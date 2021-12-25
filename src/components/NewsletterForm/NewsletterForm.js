import { Text, Stack } from '@chakra-ui/react';

import Script from 'next/script';

const NewsletterForm = () => {
  return (
    <Stack>
      <iframe
        className="mj-w-res-iframe"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://app.mailjet.com/widget/iframe/5dss/LBf"
        width="100%"
        height="200px"
      ></iframe>

      <Script
        type="text/javascript"
        src="https://app.mailjet.com/statics/js/iframeResizer.min.js"
      />
    </Stack>
  );
};

export default NewsletterForm;
