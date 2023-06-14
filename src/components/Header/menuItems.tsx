import { Link } from 'react-router-dom';
import './index.style.scss';
/* eslint-disable jsx-a11y/anchor-is-valid */

export const menuItems = [
  {
    name: 'Product',
    item: [
      {
        key: '1',
        label: (
          <Link to="/product/drm">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma DRM/Multi DRM
              </p>
              <p className="font-medium m-0 content">
                Sigma-Digital Rights Management - exclusive research by TDM
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link to="/product/transcoder">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Transcoder
              </p>
              <p className="font-medium m-0 content">
                Encode and convert video files to many other formats
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '3',
        label: (
          <Link to="/product/origin/packager">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Origin/Packager
              </p>
              <p className="font-medium m-0 content">
                Pack videos and make them compatible with many operating systems
                and devices
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '4',
        label: (
          <Link to="/product/livestreaming">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Live streaming
              </p>
              <p className="font-medium m-0 content">
                Go live with recorded content and broadcast in real time.
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '5',
        label: (
          <Link to="/product/interactive">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Interactive
              </p>
              <p className="font-medium m-0 content">
                Enable audience engagement, impact on the streaming experience
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '6',
        label: (
          <Link to="/product/sigma">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Multi CDN
              </p>
              <p className="font-medium m-0 content">
                Optimizing CDN network usage
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '7',
        label: (
          <Link to="/product/awm">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Audio Water Marking
              </p>
              <p className="font-medium m-0 content">
                Audio signal processing to determine copyright
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '8',
        label: (
          <Link to="/product/dai">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Dynamic Ads Insert
              </p>
              <p className="font-medium m-0 content">
                Server-Side Ad Insertion Solution exclusively for Television,
                Live streaming Event and VOD
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '9',
        label: (
          <Link to="/product/dns">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">NS53</p>
              <p className="font-medium m-0 content">
                DNS domain name resolution system helps balance load and
                optimize server access navigation{' '}
              </p>
            </div>
          </Link>
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
          <Link to="/service">
            <div className="">
              <p className="m-0 text-base font-medium mb-2 text-main">
                OTT Service{' '}
              </p>
              <p className="font-medium m-0 content">
                Add on every feature for your OTT product
              </p>
            </div>
          </Link>
        ),
      },
    ],
    route: 'service',
  },
  {
    name: "Solution",
    item: [],
    route: 'solution',
  },
  {
    name: 'Resource',
    item: [
      {
        key: '1',
        label: (
          <Link to="/resources/new">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">News</p>
              <p className="font-medium m-0 content">
                Let's see the latest information of the market{' '}
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link to="/resources/blog">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">Blogs</p>
              <p className="font-medium m-0 content">
                Lets see more info about our solution{' '}
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '3',
        label: (
          <Link to="/resources/casestudy">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Casestudy
              </p>
              <p className="font-medium m-0 content">
                Understand the customer{' '}
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '4',
        label: (
          <Link to="/resources/document">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Documents
              </p>
              <p className="font-medium m-0 content">
                Let's see the latest information of the market{' '}
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '5',
        label: (
          <Link to="/resources/video">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">Video</p>
              <p className="font-medium m-0 content">Maybe you want to watch</p>
            </div>
          </Link>
        ),
      },
    ],
    route: 'resources',
  },
];
