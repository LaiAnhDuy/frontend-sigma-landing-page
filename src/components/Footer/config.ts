import ROUTE from 'src/constants/route';

export const listItem = [
  {
    title: 'Develop',
    content: [
      {
        subtitle: 'News',
        url: ROUTE.RESOURCES.replace(':tab', 'new'),
      },
      {
        subtitle: 'Blog',
        url: ROUTE.RESOURCES.replace(':tab', 'blog'),
      },
      {
        subtitle: 'CaseStudy',
        url: ROUTE.RESOURCES.replace(':tab', 'casestudy'),
      },
      {
        subtitle: 'Document',
        url: ROUTE.RESOURCES.replace(':tab', 'document'),
      },
      {
        subtitle: 'Video',
        url: ROUTE.RESOURCES.replace(':tab', 'video'),
      },
    ],
  },
  {
    title: 'Company',
    content: [
      {
        subtitle: 'About us',
        url: ROUTE.ABOUT_US,
      },
      {
        subtitle: 'Contact Us',
        url: ROUTE.CONTACT_US,
      },
    ],
  },
  {
    title: 'Product',
    content: [
      {
        subtitle: 'Multi DRM',
        url: ROUTE.PRODUCT_SIGMA_DRM,
      },
      {
        subtitle: 'Livestreaming',
        url: ROUTE.PRODUCT_SIGMA_LIVESTREAMING,
      },
      {
        subtitle: 'OTT',
        url: ROUTE.SERVICE,
      },
      {
        subtitle: 'Transcoder',
        url: ROUTE.PRODUCT_SIGMA_TRANSCODER,
      },
      {
        subtitle: 'Package/Origin',
        url: ROUTE.PRODUCT_SIGMA_PACKAGE,
      },
      {
        subtitle: 'Audio water marking',
        url: ROUTE.PRODUCT_AUDIO_WATERMARKING,
      },
      {
        subtitle: 'Multi CDN',
        url: ROUTE.PRODUCT_MULTI_CDN,
      },
      {
        subtitle: 'NS53',
        url: ROUTE.PRODUCT_SIGMA_NS53,
      },
      {
        subtitle: 'Dynamic Ads Insert',
        url: ROUTE.PRODUCT_SIGMA_DAI,
      },
      {
        subtitle: 'Interactive',
        url: ROUTE.PRODUCT_SIGMA_INTERACTIVE,
      },
    ],
  },
];
