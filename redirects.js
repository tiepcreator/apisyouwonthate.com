const redirects = [
  {
    source: '/podcast/rss',
    destination: 'https://feeds.transistor.fm/apis-you-wont-hate',
    permanent: false,
  },
  {
    source: '/sitemap/sitemap-index.xml',
    destination: '/sitemap/sitemap.xml',
    permanent: false,
  },
  {
    source: '/sitemap/sitemap-0.xml',
    destination: '/sitemap/sitemap.xml',
    permanent: false,
  },
];

module.exports = redirects;
