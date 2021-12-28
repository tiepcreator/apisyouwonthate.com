const axios = require('axios');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' });
    return;
  }

  // great, handle the message
  const { body } = req;

  const {
    'contact-name': name,
    'contact-info': contact,
    comment: message,
    'bot-field': honeypot,
  } = body;

  if (honeypot) {
    res.status(400).send({ message: 'No bots allowed 🤖' });
    return;
  }

  const sentMessageResponse = await axios({
    method: 'POST',
    url: process.env.CONTACT_FORM_SLACK_WEBHOOK_ADDRESS,
    data: formatMessage(name, contact, message),
  });

  res.status(parseInt(sentMessageResponse.status)).send();
}

// created with block kit builder from slack https://app.slack.com/block-kit-builder
const formatMessage = (name, contact, message) => ({
  blocks: [
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: 'New Message Request from apisyouwonthate.com/ama:',
        },
      ],
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*Name:*\n${name}`,
        },
        {
          type: 'mrkdwn',
          text: `*Contact:*\n${contact}`,
        },
      ],
    },
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: message,
        emoji: true,
      },
    },
  ],
});
