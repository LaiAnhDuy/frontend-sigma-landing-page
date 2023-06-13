import { IMAGE_PATH } from 'src/constants/images';

export const SIGMA_TRANSCODER1 = [
  {
    img: IMAGE_PATH.W1,
    title: 'All industry standard playout formats',
    description: 'Apple HTTP Livestreaming HLS (TS & CMAF), MPEG DASH',
  },
  {
    img: IMAGE_PATH.W2,
    title: 'Customize files',
    description:
      'Formats: MP4, 3GP, OGG, WMV, FLV, WEBM, TS, MP3, … Bitrate: 300kbps to 50Mbps (HD), 80 Mpbs (UHD) Resolution & frame rate: Up to 2160 @ 50 / 59.94 / 60 fps',
  },
  {
    img: IMAGE_PATH.W3,
    title: 'Every major DRM system',
    description:
      'FairPlay, PlayReady, Widevine, Sigma DRM. Key provisioning interface to leadind CAS & DRM vendor',
  },
  {
    img: IMAGE_PATH.W4,
    title: 'Latest codecs',
    description:
      'Video: H.264 (Baseline, Main, High), H.265, AV1, MPEG4, Theora, VP9, VP8, WMV, Vorbis, WMA, … Audio: AAC (AAC-LC, HE-AAC, H-AAC v2), MP3',
  },
  {
    img: IMAGE_PATH.W5,
    title: 'Comprehensive subtitle support',
    description:
      'Closed Caption: WebVTT for HLS, WebVTT or SMPTE-TT for DASH DVB Teletext: WebVTT for HLS, WebVTT or SMPTE-TT for DASH DVB subtitle: SMPTE-TT for DASH',
  },
  {
    img: IMAGE_PATH.W6,
    title: 'Low latency',
    description: 'Apple HLS Low Latency Dash LL - CMAF',
  },
];

export const SIGMA_TRANSCODER2 = [
  {
    id: 0,
    img: IMAGE_PATH.PM1,
    title: 'Offer a premium viewing experience',
    description:
      'Deliver the highest quality content at the lowest bitrate to delight your audiences with all kinds of content – including UHD, 4K, and HDR. Ensure low latency on all platforms and broadcast-level latency on streaming platforms, with reduced rebuffering.',
  },
  {
    id: 1,
    img: IMAGE_PATH.PM2,
    title: 'Reduce total cost of ownership',
    description:
      'Save bandwidth and storage requirements with the unmatched compression efficiency of Kyrion and TITAN encoders/decoders, faster-than-real-time capabilities, and simultaneous processing of all formats. Reduce waste and complexity with a single workflow for both live and file transcoding. Optimize your delivery platform by repurposing available cloud-native resources for file transcoding.',
  },
  {
    id: 2,
    img: IMAGE_PATH.PM3,
    title: 'Deploy anywhere',
    description:
      'Pick what best fits your needs with a scalable software solution that can run on-premises on an appliance or in a virtualized environment, and off-premises in a private or public cloud.',
  },
  {
    id: 3,
    img: IMAGE_PATH.PM4,
    title: 'Protect your revenues',
    description:
      'Ensure a flow of revenues by protecting your content with the relevant encryption and watermarking standards: Sigma DRM and Sigma Audio Watermark',
  },
  {
    id: 4,
    img: IMAGE_PATH.PM5,
    title: 'System optimization',
    description:
      'Save bandwidth and storage requirements with the unmatched compression efficiency of Kyrion and TITAN. Optimize your delivery platform by repurposing available cloud-native resources for file transcoding. Reduce waste and complexity with a single workflow for both live and file transcoding. Simplicity– with no compromise on video quality',
  },
];
