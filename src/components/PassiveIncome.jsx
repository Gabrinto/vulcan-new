import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { images } from '../constants';
import video from '../assets/slowfireshort.mp4';

const PassiveIncome = () => {
  return (
    <div className="mt-[4rem] p-3 px-6 flex flex-col items-center">
      <div className="flex items-center justify-evenly">
        <h1 className="text-[#F78C3D] font-semibold text-[19px]">
          What is BARS Technology?
        </h1>
        <FiArrowUpRight size={20} className="text-white" />
      </div>

      <div className="mt-[2rem] bg-[#202020] rounded-lg px-2 flex flex-col items-center">
        <div>
          <img
            src={images.circleOne}
            alt=""
            className="w-[280px] md:w-[350px] transform absolute rotate-6 translate-x-4"
          />
          <img
            src={images.circleTwo}
            alt=""
            className="w-[280px] md:w-[350px]  "
          />
        </div>
        <div className="text-white">
          <h1 className="text-[45px] md:text-[50px] text-left font-bold mt-[2rem] mb-[1rem] ml-3">
            Sharing Passive Income
          </h1>
          <h3 className="text-[20px] font-semibold text-left mb-[1rem] md:text-[22px] md:w-[80%]">
            Rewarding holders of $VUL coin with passive income
          </h3>
          <span className=" text-[14px] font-semibold text-left flex flex-start mb-[1.5rem]  md:w-[80%]">
            Blockchain Automatic Revenue Sharing (BARS) is a new, radical and
            unique way for holders of VUL coin to directly benefit from Vulcan’s
            expanding ecosystem compared to traditional blockchain platforms
            that only pay rewards from transaction fees or staking.
          </span>
          <span className=" text-[14px] font-semibold text-left flex flex-start mb-[1.5rem]">
            BARS is designed for users to earn shared rewards from multiple
            income streams throughout the global Vulcan Network.
          </span>

          <div
            className="flex flex-col gap-[1rem] mt-[4rem] items-center
           justify-center sm:flex-row sm:gap-[1rem] sm:w-[60%] "
          >
            <button
              type="button"
              className="px-[2rem] py-[0.8rem] text-center bg-[white] text-black font-bold w-[90%] sm:w-[40%] rounded-full"
            >
              READ MORE
            </button>
            <button
              type="button"
              className="px-[2rem] py-[0.8rem] text-center  sm:w-[40%] 
              bg-transparent text-white w-[90%] border-[1px] font-bold border-white rounded-full"
            >
              LITEPAPER
            </button>
          </div>
        </div>
      </div>

      {/* why Vulcan Blcokchain */}

      <div className="mt-[5rem] flex flex-col gap-[4rem]">
        <div className="flex items-center justify-evenly">
          <h1 className="text-[#F78C3D] font-semibold text-[20px]">
            Why Vulcan Blockchain?
          </h1>
          <FiArrowUpRight size={20} className="text-white" />
        </div>
        <video
          id="videoElement"
          controls
          poster={images.videoPoster}
          width={'100%'}
          height={'400px'}
          className="w-[90vw]"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <img
        src={images.whyVulcan}
        alt=""
        className="w-[100%] h-[100%] object-cover mt-[4rem]"
      />
    </div>
  );
};

export default PassiveIncome;
