import { IMAGE_PATH } from 'src/constants/images';

export const LIST_CAROUSEL = [
  {
    title: 'Media content receiving system',
    content:
      'We are guided by five core values that enable everyone in the Amagi ecosystem, from our employees to customers, to THRIVE and evolve into their best version',
  },
  {
    title: 'Data encapsulation and encryption',
    content:
      'Works with content protection schemes, such as encryption, DRM and multiple-key DRM, to create a seamless viewer experience. Once packaged, your content is ready for delivery to an origin server or a CDN.',
  },
  {
    title: 'Converts original audio, video and image',
    content:
      'This is often done to maximize the number of compatible playback devices, making the encoded data more accessible to a wider audience. ',
  },
  {
    title: 'Perform transport of manifest and segment ',
    content:
      'Secure and deliver a Video on Demand/Live Streaming content instantly into formats accessible to any internet-connected device.',
  },
];

export const LIST_SPECIFICATION = [
  {
    title: 'Support:',
    content: 'Linear Channel Timeshifting Start Over TV',
  },
  {
    title: 'Storage:',
    content:
      'Support Local storage, NAS, NFS Object storage (s3,ceph...) Ram Disk for Lineal Channel',
  },
  {
    title: 'Network:',
    content: 'IPv4 Multicast for Live Ingest (IGMPv2/v3 support)',
  },
  {
    title: 'CDN compatible:',
    content: 'CDN pulling support',
  },
  {
    title: 'Manifest Filtering',
    content: 'Support HLS, DASH Manifest filtering',
  },
];

export const SIGMA_PACKAGE1 = [
  {
    img: IMAGE_PATH.N53_F1,
    title: 'All industry standard layout formats',
    description:
      'HLS (TS & CMAF), (DVB-)DASH, HbbTV, HDS, and Smooth Livestream',
  },
  {
    img: IMAGE_PATH.N53_F2,
    title: 'Comprehensive subtitle support',
    description: 'WebVTT for HLS, WebVTT or SMPTE-TT for DASH',
  },
  {
    img: IMAGE_PATH.N53_F3,
    title: 'Trustworthy',
    description:
      'Stay up to date with the latest technologies of video streaming solutions',
  },
  {
    img: IMAGE_PATH.N53_F4,
    title: 'ID3 timed metadata:',
    description: 'insert metadata into the stream in real time',
  },
  {
    img: IMAGE_PATH.N53_F5,
    title: 'SCTE35',
    description:
      'Detect advertising signal In band Signal & Out of band Signal',
  },
  {
    img: IMAGE_PATH.N53_F6,
    title: 'Catchup TrickPlay',
    description:
      'Set of functions  including pause, forward, fast forward, slow forward, slow back, jump to front/back of frame etc..',
  },
  {
    img: IMAGE_PATH.N53_F4,
    title: 'Every major DRM system',
    description: 'Support DRM solutions or our Sigma DRM',
  },
  {
    img: IMAGE_PATH.N53_F5,
    title: 'Fingerprint',
    description: 'Content identification',
  },
];

export const SIGMA_PACKAGE2 = [
  {
    img: IMAGE_PATH.PO1,
    description:
      'Adaptive streaming supports multiple transport protocols for CDNs with push/pull mode.',
  },
  {
    img: IMAGE_PATH.PO2,
    description: 'Ability to integrate with 3rd party storage',
  },
  {
    img: IMAGE_PATH.PO3,
    description: 'Support TV start-over, Catch-Up, Time Shift TV, Cloud DVR',
  },
  {
    img: IMAGE_PATH.PO4,
    description: 'High extensibility',
  },
  {
    img: IMAGE_PATH.PO5,
    description: 'Support low latency streaming',
  },
  {
    img: IMAGE_PATH.PO6,
    description:
      'Use different types of storage for many different types of content',
  },
];
