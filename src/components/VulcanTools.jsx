import React from 'react';
import { newsData, toolsData } from '../data';
import { FiArrowUpRight } from 'react-icons/fi';

const VulcanTools = () => {
  return (
    <div className="pt-[4rem] bg-[#333131] mb-0 sm:flex sm:flex-col items-center justify-center">
      <div className="flex items-center justify-evenly gap-4">
        <h1 className="text-[#F78C3D] font-semibold text-[20px]">
          Vulcan Tools
        </h1>
        <FiArrowUpRight size={20} className="text-white" />
      </div>

      <div className="p-3 py-3 flex flex-wrap gap-[15px] mt-[3rem]  justify-center">
        {toolsData.map((item) => (
          <div className="w-full p-3 bg-[#1b1b1b] rounded-xl flex gap-[20px] justify-between md:w-[330px]">
            <img src={item.icon} alt="" className="w-[70px] object-contain" />
            <div className="flex gap-[10px] justify-between pr-[3px] mt-[15px]">
              <span className="w-[90%] text-left text-white">
                <h1 className="text-[22px] font-bold">{item.title}</h1>
                <p className="text-sm">{item.text}</p>
              </span>
              <FiArrowUpRight size={20} className="text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Vulcan news */}

      <div className="mt-[4rem]">
        <div className="flex items-center justify-evenly">
          <h1 className="text-[#F78C3D] font-semibold text-[20px]">
            Vulcan News
          </h1>
          <FiArrowUpRight size={20} className="text-white" />
        </div>

        <div className="flex flex-wrap gap-[15px] justify-center mt-[2rem]">
          {newsData.map((item) => (
            <div className="w-[160px] bg-[#1b1b1b] rounded-lg flex flex-col gap-[15px]">
              <img src={item.icon} alt="" className="w-[100%] rounded-lg" />
              <p className="text-white text-left p-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VulcanTools;
