import { IMAGE_PATH } from 'src/constants/images';

export const frames = [
  {
    image: IMAGE_PATH.FRAME_1,
    title: 'Gain insight into audio content consumption',
  },
  {
    image: IMAGE_PATH.FRAME_2,
    title: 'Inaudible in the commercial way',
  },
  {
    image: IMAGE_PATH.FRAME_3,
    title: 'Resist high loss compression',
  },
  {
    image: IMAGE_PATH.FRAME_4,
    title: 'Blind detection',
  },
  {
    image: IMAGE_PATH.FRAME_5,
    title: 'Track and trace the (illegal) use',
  },
  {
    image: IMAGE_PATH.FRAME_6,
    title: 'Compatible many audio file types',
  },
];

export const items = [
  {
    id: 1,
    image: IMAGE_PATH.IMAGE_AUDIO1,
    title: 'Client-Side Audio Watermarking',
    content:
      'This client-side watermarking technology empowers providers to detect camcording, digital and analog attacks, and geometric manipulations at device and subscriber levels.',
  },
  {
    id: 2,
    image: IMAGE_PATH.IMAGE_AUDIO2,
    title: 'Server-Side Distribution Watermarking',
    content:
      'This cloud service processes the content pre-encoding and seamlessly integrates with your workflow to identify both the source and target of distribution, ensuring traceability of any content leak independent of device type.',
  },
  {
    id: 3,
    image: IMAGE_PATH.IMAGE_AUDIO3,
    title: 'Server-Side Session-Based Watermarking',
    content:
      'Identify the source of piracy at session and subscriber level with a solution that provides a unique playlist per session during content delivery with easy CDN integration. Imperceptible and robust, session-based watermarking protects against a wide range of attacks, including collusion and playlist shuffling. ',
  },
];
