import React from 'react';

import * as classes from './NewsletterForm.module.css';

const NewsletterForm = () => {
  return (
    <div className={classes.newsletterFormContainer}>
      <p>Get Pragmatic API, HTTP And REST Info Monthly!</p>

      <iframe
        className="mj-w-res-iframe"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://app.mailjet.com/widget/iframe/5dss/LBf"
        width="100%"
      ></iframe>

      <script
        async
        type="text/javascript"
        src="https://app.mailjet.com/statics/js/iframeResizer.min.js"
      ></script>
    </div>
  );
};

export default NewsletterForm;
