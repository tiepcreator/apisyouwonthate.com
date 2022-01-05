const mailjet = require('node-mailjet').connect(
  process.env.MAILJET_PUBLIC_KEY,
  process.env.MAILJET_SECRET_KEY
);

// attempt to subscribe to newsletter
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' });
    return;
  }

  // great, handle the message
  const { name, email } = req.body;

  // adapted from https://dev.mailjet.com/email/guides/contact-management/#single-contact-management
  try {
    const result = await mailjet.post('contact', { version: 'v3' }).request({
      IsExcludedFromCampaigns: 'false',
      Name: name,
      Email: email,
    });

    const { Data } = result.body;
    const { ID, Email } = Data;

    return await addToList({ id: ID, email: Email }, res);
  } catch (err) {
    if (err.message.startsWith('Unsuccessful: 400 MJ18')) {
      // this error means this is already a _contact_ in the system - not we want to make sure they're added to our newsletter list
      return await addToList({ email }, res);
    }

    res.status(err.statusCode).send({ message: err.message });
  }
}

const addToList = async ({ id, email }, res) => {
  try {
    const listRequest = await mailjet
      .post('listrecipient', { version: 'v3' })
      .request({
        IsUnsubscribed: 'false',
        ContactID: id,
        ContactAlt: email,
        ListID: process.env.MAILJET_NEWSLETTER_LIST_ID,
      });
    res.status(200).send(listRequest.body);
  } catch (err) {
    if (
      err.message.startsWith(
        'Unsuccessful: 400 A duplicate ListRecipient already exists.'
      )
    ) {
      res.status(200).send({ message: 'Already subscribed!' });
    } else {
      res.status(err.statusCode).send({ message: err.message });
    }
  }
};
