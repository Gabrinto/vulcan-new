import React from 'react';
import { communityData } from '../data';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdArrowForwardIos } from 'react-icons/md';
import { images } from '../constants';

const Community = () => {
  return (
    <div className=" pt-[5rem] bg-[#333131] mt-0">
      <div className="px-3">
        <div className="flex flex-col p-3">
          <h1 className="text-[#F78C3D] font-semibold text-[20px]">
            Join Our Community
          </h1>
          <span className="text-white text-center text-sm">
            Join the discussions on Discord and stay up to date with the latest
            news and announcements.
          </span>
        </div>

        <div className="mt-[3rem] flex flex-wrap gap-[15px] lg:justify-center">
          {communityData.map((item) => (
            <div
              className="bg-[#272525] flex gap-[2rem] 
            px-4 py-2 rounded-lg text-white w-[100%] h-[145px]  items-center lg:w-[400px]  "
            >
              <div className="w-[50px]">{item.icon}</div>
              <div className="flex justify-between w-full">
                <span className="text-left">
                  <h1 className="text-[23px] font-semibold">{item.name}</h1>
                  <p>{item.text}</p>
                </span>
                <FiArrowUpRight size={20} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}

      <div className="bg-black">
        <div className="bg-gradient-to-r from-[#F2632D] to-[#F57A36] w-[100%] h-[250px]">
          <p className="text-white px-3 mt-[4rem] font-semibold  pt-[3rem] text-[20px]">
            Subscribe to the Vulcan Blockchain Quarterly Newsletter
          </p>
          <span
            className="mt-[1rem] rounded-xl border-[1px]
           border-gray-100 bg-transparent w-[90%] py-[1rem] px-[1rem]
           flex justify-between items-center mx-auto lg:w-[40%]"
          >
            <input
              type="email "
              className="w-[100%] bg-transparent placeholder:text-white placeholder:font-semibold"
              placeholder="Type your email address here"
            />
            <MdArrowForwardIos size={23} className="text-white" />
          </span>
        </div>

        <div className="mt-[4rem] px-3 bg-black text-gray-200 flex flex-col items-center justify-center">
          <img src={images.footerLogo} alt="" className="w-[70%] lg:w-[30%]" />

          <span className="w-full mt-[1.2rem] text-sm lg:w-[50%]">
            The information on this website is for informational purposes only.
            It contains high-level summaries and is not intended to include all
            material information regarding the Vulcan or OOXY Labs ecosystem and
            risk factors associated with holding VUL.
          </span>
          <span className="mt-[2rem]">© 2023 Ooxy labs</span>
          <div className="flex flex-wrap items-center justify-center mt-[1rem] gap-[10px] px-[10px]">
            <span>Privacy Policy</span>

            <span>Terms of Service</span>
            <span> Cookies Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
