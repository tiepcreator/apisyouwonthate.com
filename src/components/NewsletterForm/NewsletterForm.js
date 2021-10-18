import React from 'react';

import * as classes from './NewsletterForm.module.css';

const NewsletterForm = () => {
  return (
    <div className={classes.newsletterFormContainer}>
      <p>Get Pragmatic API, HTTP And REST Info Monthly!</p>

      <iframe
        title="Subscribe to our Newsletter"
        className="mj-w-res-iframe"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        height="200px"
        src="https://app.mailjet.com/widget/iframe/5dss/qTS"
        width="100%"
      ></iframe>

      <script
        type="text/javascript"
        src="https://app.mailjet.com/statics/js/iframeResizer.min.js"
      ></script>
    </div>
  );
};

export default NewsletterForm;
