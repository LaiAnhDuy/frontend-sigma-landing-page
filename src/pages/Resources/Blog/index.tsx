/* eslint-disable max-len */
import React from 'react';
import './index.style.scss';
import { IMAGE_PATH } from 'src/constants/images';
import ScrollToTopButton from 'src/components/ScrollToTop';

export default function Blog() {
  return (
    <div className="lg:container m-auto">
      <div className="grid grid-cols-3 ">
        <div className="col-span-2 ">
          <div className="pr-16">
            <div className="flex text-center items-end">
              <p className="font-bold text-white text-3xl news w-40 py-4 rounded-xl">
                Blog
              </p>
              <p className="font-bold text-3xl ml-9">March 8, 2023</p>
            </div>
            <p className="font-bold text-[55px] my-0">
              Tone mapping: The secret sauce to powering life-like viewing
              experiences
            </p>
            <p className="font-normal text-2xl">
              By{' '}
              <span className="text-main">
                Kushagra Pandey, Product Manager, Amagi LIVE
              </span>
            </p>
            <img alt="# " className="w-full" src={IMAGE_PATH.IMAGE_BLOG1}></img>
            <p className="font-normal text-lg">
              By definition, tone mapping is a video processing technique that
              helps map one set of luma (brightness) and color space to another.
              <br />
              <span className="block my-4"></span>
              <span className="font-bold ">
                In simpler words, tone-mapping is the process of re-adjusting
                the brightness and color of the video, so that it is displayed
                as expected on the target display.
              </span>
              <span className="block my-4"></span>
              Typically, it is part of the post-processing step in any
              multimedia workflow.
              <span className="block my-4"></span>
              <span className="text-main">
                Why do we need tone mapping{' '}
              </span>{' '}
              <span className="block my-4"></span>
              Earlier, all television sets conformed to BT.709, a standard that
              governed all TVs up to High Definition Television (HDTV). Hence,
              the creative artists would just calibrate the content for BT.709
              as the final step and be done. However, as High Dynamic Range
              (HDR) came along (that too in multiple competing standards like
              HDR10 and HLG), post-processing the content to adjust its display
              properties became essential.
              <span className="block my-4"></span>
              If we consider today’s scenario–we broadly have television sets
              conforming to three different standards. This effectively implies
              that to deliver flawless video output to TV sets conforming to
              three different types of TV sets, we’ll have to create three
              different versions of every content asset. This is practically
              impossible and that’s where tone mapping plays a key role.
              <span className="block my-4"></span>
              If a piece of content meant for a particular standard is shown on
              a screen that is incapable of displaying it properly, or is
              tricked into showing it without tone mapping (by signaling the
              wrong HDR standard), the resulting image is going to be way off.
              <span className="block my-4"></span>
              Given the above premise,{' '}
              <span className="font-bold">
                tone mapping needs to be an indispensable part of the broadcast
                workflow.
              </span>
            </p>
            <img
              className="w-full mb-8 mt-3"
              alt="#"
              src={IMAGE_PATH.IMAGE_BLOG2}
            />
            <img className="w-full mb-8" alt="#" src={IMAGE_PATH.IMAGE_BLOG3} />
            <img className="w-full mb-4" alt="#" src={IMAGE_PATH.IMAGE_BLOG4} />
            <p className="mb-10">
              Broadcasters can drop assets in any HDR format and Amagi CLOUDPORT
              – our cloud playout solution - starts processing them further. If
              formats differ, it can use tone mapping to transcode the same. For
              instance, let’s assume that a channel runs in HDR10 format. The
              customer, however, drops the assets in HLG. Now, these assets need
              to be transcoded and adapted to bring all of them in the same
              format, which is HDR10 in this case. The process used in achieving
              this is tone mapping.
              <span className="block my-4"></span>
              <span className="text-main">Formats supported</span>
              <span className="block my-4"></span>
              Currently, Amagi CLOUDPORT can support playout in HLG, HDR. While
              we can also support Dolby Vision and all HDR formats including
              HDR10+, these haven’t gained much traction in the broadcast
              industry as of now.
              <span className="block my-4"></span>
              <span className="text-main">Exciting roadmap</span>
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-[#F9F9F9] mt-8 px-5 py-10 rounded-xl">
            <div>
              <p className="font-bold mb-0 text-3xl">
                RECENT <span className="font-light text-3xl">BLOGS</span>
              </p>
              <hr className="border-4 border-main" />
              <div>
                <p className="font-medium text-lg text-gray-500 mb-0">
                  FIFA World Cup 2022: A milestone in live streaming
                </p>
                <hr />
                <p className="font-medium text-lg text-gray-500 mb-0">
                  FIFA World Cup 2022: A milestone in live streaming
                </p>
                <hr />
                <p className="font-medium text-lg text-gray-500 mb-0">
                  FIFA World Cup 2022: A milestone in live streaming
                </p>
                <hr />
                <p className="font-medium text-lg text-gray-500 mb-0">
                  FIFA World Cup 2022: A milestone in live streaming
                </p>
                <hr />
                <p className="font-medium text-lg text-gray-500 mb-0">
                  FIFA World Cup 2022: A milestone in live streaming
                </p>
                <hr />
                <p className="font-medium text-lg text-gray-500 mb-0">
                  FIFA World Cup 2022: A milestone in live streaming
                </p>
                <hr />
              </div>
              <div className="text-center">
                <button className="h-7 w-24 rounded-md border-solid bg-transparent cursor-pointer active:bg-transparent/5">
                  See all
                </button>
              </div>
            </div>
          </div>
          <div className="bg-main mt-12 px-5 py-10 rounded-xl h-80">
            <p className="font-bold text-3xl mt-0 text-white">
              Information resource{' '}
            </p>
            <p className="font-bold text-3xl text-white">@thudomultimedia </p>
            <p className="font-normal text-white">
              Let's see the detailed content of the article at
            </p>
            <a
              href="https://vtc.vn/thi-truong-ott-se-tang-gap-3-lan-gia-tri-den-nam-2028-ar678691.html"
              className="text-white"
            >
              https://vtc.vn/thi-truong-ott-se-tang-gap-3-lan-gia-tri-den-nam-2028-ar678691.html
            </a>
          </div>
          <div className="bg-[#F9F9F9] mt-12 px-5 py-10 rounded-xl">
            <div>
              <p className="font-bold mb-0 text-3xl">
                Hot <span className="font-light text-3xl">news</span>
              </p>
              <hr className="border-4 border-main" />
              <div>
                <p className="font-medium text-lg text-gray-500 mb-0">
                  FIFA World Cup 2022: A milestone in live streaming
                </p>
                <hr />
                <p className="font-medium text-lg text-gray-500 mb-0">
                  FIFA World Cup 2022: A milestone in live streaming
                </p>
                <hr />
                <p className="font-medium text-lg text-gray-500 mb-0">
                  FIFA World Cup 2022: A milestone in live streaming
                </p>
                <hr />
                <p className="font-medium text-lg text-gray-500 mb-0">
                  FIFA World Cup 2022: A milestone in live streaming
                </p>
                <hr />
                <p className="font-medium text-lg text-gray-500 mb-0">
                  FIFA World Cup 2022: A milestone in live streaming
                </p>
                <hr />
                <p className="font-medium text-lg text-gray-500 mb-0">
                  FIFA World Cup 2022: A milestone in live streaming
                </p>
                <hr />
              </div>
              <div className="text-center">
                <button className="h-7 w-24 rounded-md border-solid bg-transparent cursor-pointer active:bg-transparent/5">
                  See all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
  