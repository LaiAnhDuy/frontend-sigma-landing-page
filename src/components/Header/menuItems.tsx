import './index.style.scss';
import Label from './Label';
import ROUTE from 'src/constants/route';
/* eslint-disable jsx-a11y/anchor-is-valid */

export const menuItems = [
  {
    name: 'Product',
    item: [
      {
        key: '1',
        label: (
          <Label
            url={ROUTE.PRODUCT_SIGMA_DRM}
            title="Sigma DRM/Multi DRM"
            content="Sigma-Digital Rights Management - exclusive research by TDM"
          />
        ),
      },
      {
        key: '2',
        label: (
          <Label
            url={ROUTE.PRODUCT_SIGMA_TRANSCODER}
            title="Sigma Transcoder"
            content="Encode and convert video files to many other formats"
          />
        ),
      },
      {
        key: '3',
        label: (
          <Label
            url={ROUTE.PRODUCT_SIGMA_PACKAGE}
            title="Sigma Origin/Packager"
            content="Pack videos and make them compatible with many operating systems
          and devices"
          />
        ),
      },
      {
        key: '4',
        label: (
          <Label
            url={ROUTE.PRODUCT_SIGMA_LIVESTREAMING}
            title=" Sigma Live streaming "
            content=" Go live with recorded content and broadcast in real time. "
          />
        ),
      },
      {
        key: '5',
        label: (
          <Label
            url={ROUTE.PRODUCT_SIGMA_INTERACTIVE}
            title="Sigma Interactive"
            content="Enable audience engagement, impact on the streaming experience"
          />
        ),
      },
      {
        key: '6',
        label: (
          <Label
            url={ROUTE.PRODUCT_MULTI_CDN}
            title="Sigma Multi CDN"
            content="Optimizing CDN network usage"
          />
        ),
      },
      {
        key: '7',
        label: (
          <Label
            url={ROUTE.PRODUCT_AUDIO_WATERMARKING}
            title="Sigma Audio Water Marking"
            content="Audio signal processing to determine copyright"
          />
        ),
      },
      {
        key: '8',
        label: (
          <Label
            url={ROUTE.PRODUCT_SIGMA_DAI}
            title="Sigma Dynamic Ads Insert"
            content="Server-Side Ad Insertion Solution exclusively for Television,
          Live streaming Event and VOD"
          />
        ),
      },
      {
        key: '9',
        label: (
          <Label
            url={ROUTE.PRODUCT_SIGMA_NS53}
            title="NS53"
            content="DNS domain name resolution system helps balance load and
          optimize server access navigation"
          />
        ),
      },
    ],
    route: 'product',
  },
  {
    name: 'Service',
    item: [
      {
        key: '1',
        label: (
          <Label
            url={ROUTE.SERVICE}
            title="OTT Service"
            content="Add on every feature for your OTT product"
          />
        ),
      },
    ],
    route: 'service',
  },
  {
    name: 'Solution',
    item: [],
    route: 'solution',
  },
  {
    name: 'Resource',
    item: [
      {
        key: '1',
        label: (
          <Label
            url={ROUTE.RESOURCES.replace(':tab', 'new')}
            title="News"
            content="Let's see the latest information of the market"
          />
        ),
      },
      {
        key: '2',
        label: (
          <Label
            url={ROUTE.RESOURCES.replace(':tab', 'blog')}
            title="Blogs"
            content="Let's see more info about our solution"
          />
        ),
      },
      {
        key: '3',
        label: (
          <Label
            url={ROUTE.RESOURCES.replace(':tab', 'casestudy')}
            title="Casestudy"
            content="Understand the customer"
          />
        ),
      },
      {
        key: '4',
        label: (
          <Label
            url={ROUTE.RESOURCES.replace(':tab', 'document')}
            title="Documents"
            content="Let's see the latest information of the market"
          />
        ),
      },
      {
        key: '5',
        label: (
          <Label
            url={ROUTE.RESOURCES.replace(':tab', 'video')}
            title="Video"
            content="Maybe you want to watch"
          />
        ),
      },
    ],
    route: 'resources',
  },
];
