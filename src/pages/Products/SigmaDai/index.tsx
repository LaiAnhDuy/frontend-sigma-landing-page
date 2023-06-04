/* eslint-disable max-len */
import './index.style.scss';
import { IMAGE_PATH } from 'src/constants/images';

function SigmaDai() {
  return (
    <div className="text-black">
      <div className='flex justify-between'>
        <div className="pl-[184px]">
          <div className="text-[50px] font-bold w-[526px] h-[100px] leading-[50px]">
            Enable <span className="text-main">ADS Insertion</span> Everywhere
          </div>
          <div className='w-[501px] h-[120px] font-medium text-[21px] leading-[30px]'>
            Dynamic Ad Insertion – also known as Server-side ad insertion (SSAI)
            – enables the seamless delivery of video ads into content streamed
            on internet-enabled devices.
          </div>
          <button className='bg-main rounded-[4px] border-none text-white'>Request your free DRM trial</button>
        </div>
        <div className='pr-[86px]'>
            <img className='image-tv w-[1200px] h-[1200px]' src={IMAGE_PATH.TV_DAI} alt="TV_DAI" />
        </div>
      </div>
    </div>
  );
}

export default SigmaDai;
