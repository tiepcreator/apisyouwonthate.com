/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

import { useRouter } from 'next/router';
import config from '../../../config';

const SEO = ({
  author,
  canonical,
  description,
  imageUrl,
  meta,
  ogType,
  keywords,
  title,
}) => {
  const router = useRouter();
  const { siteMetadata } = config;

  const {
    siteUrl: baseUrl,
    title: siteTitle,
    description: siteDescription,
  } = siteMetadata;

  const metaTitle = title || siteTitle;
  const metaDescription = description || siteDescription;

  const fullCanonical = () => {
    const link = canonical || router.asPath;
    if (!link) return baseUrl;
    if (link.startsWith('http')) return link;

    const slashLink = link.startsWith('/') ? link : `/${link}`;

    const fullUrl = link.startsWith(baseUrl) ? link : `${baseUrl}${slashLink}`;

    return fullUrl;
  };

  const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  // og images must have a full (not relative) path
  let fullImageUrl;
  if (imageUrl && !imageUrl.startsWith(baseUrl)) {
    if (imageUrl.startsWith('/')) {
      fullImageUrl = `${baseUrl}${fullImageUrl}`;
    } else {
      fullImageUrl = `${baseUrl}/${imageUrl}`;
    }
  }

  return (
    <Head>
      {/* favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {/* end favicon */}

      <link rel="canonical" href={fullCanonical(canonical)} />

      <title>{formattedTitle}</title>
      <meta name="description" content={description || metaDescription} />
      <meta
        name="monetization"
        content="$twitter.xrptipbot.com/irreverentmike"
      />

      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}

      <meta
        name="twitter:card"
        content={fullImageUrl ? `summary_large_image` : `summary`}
      />
      <meta name="twitter:title" content={metaTitle} />
      <meta
        name="twitter:creator"
        content={author?.name || "APIs You Won't Hate"}
      />
      <meta name="twitter:description" content={metaDescription} />

      <meta
        name="og:title"
        content={
          title ? `${title} | ${siteMetadata.title}` : siteMetadata.title
        }
      />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content={ogType || `website`} />
      <meta name="og:url" content={router.asPath} />
      <meta name="og:image" content={fullImageUrl} />
      <meta name="og:image:url" content={fullImageUrl} />

      <meta name="creator" content="APIs You Won't Hate @apisyouwonthate" />
      <meta name="publisher" content="apisyouwonthate.com" />
      {meta}
    </Head>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  lang: PropTypes.string,
  ogType: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
