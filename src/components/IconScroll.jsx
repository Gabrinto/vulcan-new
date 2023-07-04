import React from 'react';
import './LookingFor.css';

const IconScroll = () => {
  return (
    <>
      <div
        className="pt-[1.4rem] relative mb-[3rem] md:mt-[8rem] no-scrollbar 
      overflow-x-hidden bg-[#F15A29] h-[100px] mt-[2rem] flex items-center justify-center"
      >
        <div
          className="styles_content__dZufc styles_slideToLeft__skudD flex gap-[2rem]
        items-center  h-[100%] px-[10px]"
        >
          <span className="flex gap-[2rem] items-start h-[70%] w-[200px]">
            <div className="bg-gray-300 h-[80%] w-[1px]" />
            <span className="flex flex-col items-start">
              <h1 className="text-white font-bold text-[19px]">500</h1>
              <p className="text-gray-200 font-semibold text-[16px] block w-full">
                Full Nodes
              </p>
            </span>
          </span>

          {/* number 2 */}
          <span className="flex gap-[2rem] items-start h-[70%] w-[200px]">
            <div className="bg-gray-300 h-[80%] w-[1px]" />
            <span className="flex flex-col items-start">
              <h1 className="text-white font-bold text-[19px]">1500</h1>
              <p className="text-gray-200 font-semibold text-[16px] block w-full">
                Lite Nodes
              </p>
            </span>
          </span>

          {/* number 3 */}

          <span className="flex gap-[2rem] items-start h-[70%] w-[200px]">
            <div className="bg-gray-300 h-[80%] w-[1px]" />
            <span className="flex flex-col items-start">
              <h1 className="text-white font-bold text-[19px]">83.5%</h1>
              <p className="text-gray-200 font-semibold text-[16px] block w-full">
                Starting FirePit
              </p>
            </span>
          </span>
          <span className="flex gap-[2rem] items-start h-[70%] w-[200px]">
            <div className="bg-gray-300 h-[80%] w-[1px]" />
            <span className="flex flex-col items-start">
              <h1 className="text-white font-bold text-[19px]">15 Min</h1>
              <p className="text-gray-200 font-semibold text-[16px] block w-full">
                Rebasing Epochs
              </p>
            </span>
          </span>
          <span className="flex gap-[2rem] items-start h-[70%] w-[200px]">
            <div className="bg-gray-300 h-[80%] w-[1px]" />
            <span className="flex flex-col items-start">
              <h1 className="text-white font-bold text-[19px]">44%</h1>
              <p className="text-gray-200 font-semibold text-[16px] block w-full">
                APR
              </p>
            </span>
          </span>
          <span className="flex gap-[2rem] items-start h-[70%] w-[200px]">
            <div className="bg-gray-300 h-[80%] w-[1px]" />
            <span className="flex flex-col items-start">
              <h1 className="text-white font-bold text-[19px]">24 Hour</h1>
              <p className="text-gray-200 font-semibold text-[16px] block w-full">
                Flex Rewards
              </p>
            </span>
          </span>
          <span className="flex gap-[2rem] items-start h-[70%] w-[200px]">
            <div className="bg-gray-300 h-[80%] w-[1px]" />
            <span className="flex flex-col items-start">
              <h1 className="text-white font-bold text-[19px]">90 Day</h1>
              <p className="text-gray-200 font-semibold text-[16px] block w-full">
                Firestorm Epoch
              </p>
            </span>
          </span>
          <span className="flex gap-[2rem] items-start h-[70%] w-[200px]">
            <div className="bg-gray-300 h-[80%] w-[1px]" />
            <span className="flex flex-col items-start">
              <h1 className="text-white font-bold text-[19px]">30 Day</h1>
              <p className="text-gray-200 font-semibold text-[16px] block w-full">
                PowerPool Event
              </p>
            </span>
          </span>
          <span className="flex gap-[2rem] items-start h-[70%]  w-[200px]">
            <div className="bg-gray-300 h-[80%] w-[1px]" />
            <span className="flex flex-col items-start">
              <h1 className="text-white font-bold text-[19px]">83.5%</h1>
              <p className="text-gray-200 font-semibold text-[16px] flex">
                Starting FirePit
              </p>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default IconScroll;
