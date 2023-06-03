import { Link } from 'react-router-dom';
import './index.style.scss';
/* eslint-disable jsx-a11y/anchor-is-valid */
export const menuItems = [
  {
    name: (<Link  to={"/product"} className='no-underline'>Product</Link>),
    item: [
      {
        key: '1',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma DRM/Multi DRM
              </p>
              <p className="font-medium m-0 content">
                Sigma-Digital Rights Management - exclusive research by TDM
              </p>
            </div>
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Transcoder
              </p>
              <p className="font-medium m-0 content">
                Encode and convert video files to many other formats
              </p>
            </div>
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Origin/Packager
              </p>
              <p className="font-medium m-0 content">
                Pack videos and make them compatible with many operating systems
                and devices
              </p>
            </div>
          </a>
        ),
      },
      {
        key: '4',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Livestreaming
              </p>
              <p className="font-medium m-0 content">
                Go live with recorded content and broadcast in real time.
              </p>
            </div>
          </a>
        ),
      },
      {
        key: '5',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Interactive
              </p>
              <p className="font-medium m-0 content">
                Enable audience engagement, impact on the streaming experience
              </p>
            </div>
          </a>
        ),
      },
      {
        key: '6',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Multi CDN
              </p>
              <p className="font-medium m-0 content">
                Optimizing CDN network usage
              </p>
            </div>
          </a>
        ),
      },
      {
        key: '7',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Audio Warter Marking
              </p>
              <p className="font-medium m-0 content">
                Audio signal processing to determine copyright
              </p>
            </div>
          </a>
        ),
      },
      {
        key: '8',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Sigma Dynamic Ads Insert
              </p>
              <p className="font-medium m-0 content">
                Server-Side Ad Insertion Solution exclusively for Television,
                Livestreaming Event and VOD
              </p>
            </div>
          </a>
        ),
      },
      {
        key: '9',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">NS53</p>
              <p className="font-medium m-0 content">
                DNS domain name resolution system helps balance load and
                optimize server access navigation{' '}
              </p>
            </div>
          </a>
        ),
      },
    ],
  },
  {
    name: (<Link  to={"/service"} className='no-underline'>Service</Link>),
    item: [
      {
        key: '1',
        label: (
          <a href="#">
            <div className="">
              <p className="m-0 text-base font-medium mb-2 text-main">
                OTT Service{' '}
              </p>
              <p className="font-medium m-0 content">
                Add on every feature for your OTT product
              </p>
            </div>
          </a>
        ),
      },
    ],
  },
  {
    name: (<Link  to={"/solution"} className='no-underline'>Solution</Link>),
    item: [],
  },
  {
    name: (<Link  to={"/resources"} className='no-underline'>Resources</Link>),
    item: [
      {
        key: '1',
        label: (
          <Link to="/resources/blog">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">Blog</p>
              <p className="font-medium m-0 content">
                Lets see more infor about our solution{' '}
              </p>
            </div>
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">News</p>
              <p className="font-medium m-0 content">
                Let's see the latest information of the market{' '}
              </p>
            </div>
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">Video</p>
              <p className="font-medium m-0 content">Maybe you want to watch</p>
            </div>
          </a>
        ),
      },
      {
        key: '4',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Casestudy
              </p>
              <p className="font-medium m-0 content">
                Understand the customer{' '}
              </p>
            </div>
          </a>
        ),
      },
      {
        key: '5',
        label: (
          <a href="#">
            <div className="w-50">
              <p className="m-0 text-base font-medium mb-2 text-main">
                Document
              </p>
              <p className="font-medium m-0 content">
                Let's see the latest information of the market{' '}
              </p>
            </div>
          </a>
        ),
      },
    ],
  },
];
