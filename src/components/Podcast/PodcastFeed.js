const PodcastFeed = ({ dark = false }) => (
  <iframe
    width="100%"
    height="390"
    frameBorder="no"
    scrolling="no"
    seamless
    src={`https://share.transistor.fm/e/apis-you-wont-hate/playlist${
      dark ? '/dark' : ''
    }`}
  />
);

export default PodcastFeed;
