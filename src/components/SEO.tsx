import React from 'react';
import { PRODUCTS } from '../data/products';
import { BRAND_STORY_DATA } from '../data/brand';

const SITE_URL = 'https://thevedicuniverse.com/';

const toAbsoluteUrl = (path: string) => {
  return new URL(path, SITE_URL).href;
};

export const SEO: React.FC = () => {
  const organizationId = `${SITE_URL}#organization`;
  const websiteId = `${SITE_URL}#website`;
  const founderId = `${SITE_URL}#founder`;
  const productListId = `${SITE_URL}#product-list`;

  const productList = PRODUCTS.map((product) => ({
    '@type': 'Product',
    '@id': `${SITE_URL}#${product.slug}`,
    name: product.name,
    description: product.shortDescription,
    image: toAbsoluteUrl(product.image),

    brand: {
      '@type': 'Brand',
      name: 'The Vedic Universe',
    },

    category: 'Ayurvedic Wellness',

    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}#products`,
      priceCurrency: 'INR',
      price: product.price,
      itemCondition: 'https://schema.org/NewCondition',
    },
  }));

  const structuredData = {
    '@context': 'https://schema.org',

    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'The Vedic Universe',
        url: SITE_URL,
        logo: `${SITE_URL}favicon.png`,
        slogan:
          'Inspired by Ancient Scriptures, Perfected for Modern Life.',
        founder: {
          '@id': founderId,
        },
      },

      {
        '@type': 'Person',
        '@id': founderId,
        name: BRAND_STORY_DATA.heading,
        url: `${SITE_URL}#about`,
        image: toAbsoluteUrl(BRAND_STORY_DATA.image),
        jobTitle: 'Founder',
        description:
          BRAND_STORY_DATA.paragraphs[0],
        worksFor: {
          '@id': organizationId,
        },
      },

      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: 'The Vedic Universe',
        url: SITE_URL,
        publisher: {
          '@id': organizationId,
        },
        inLanguage: 'en-IN',
      },

      {
        '@type': 'ItemList',
        '@id': productListId,
        name: 'The Vedic Universe Ayurvedic Wellness Products',
        description:
          'Ayurvedic wellness products from The Vedic Universe, including Ashwagandha Powder, Moringa Powder and Triphala Powder.',
        numberOfItems: PRODUCTS.length,

        itemListElement: PRODUCTS.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: product.name,
          url: `${SITE_URL}#products`,
        })),
      },

      ...productList,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};