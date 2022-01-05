// attempt to subscribe to newsletter
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' });
    return;
  }

  // great, handle the message
  const { body } = req;

  const { name, email } = body;

  // adapted from https://dev.mailjet.com/email/guides/contact-management/#single-contact-management
  const mailjet = require('node-mailjet').connect(
    process.env.MAILJET_PUBLIC_KEY,
    process.env.MAILJET_SECRET_KEY
  );
  const request = mailjet.post('contact', { version: 'v3' }).request({
    IsExcludedFromCampaigns: 'false',
    Name: name,
    Email: email,
  });

  request
    .then((result) => {
      res.status(200).send(result.body);
    })
    .catch((err) => {
      res.status(err.statusCode).send(err.body);
    });
}
