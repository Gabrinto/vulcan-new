import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { featuresData } from '../data';
import blurLogo from '../assets/vul-coin.png';

const Features = () => {
  return (
    <div className="mt-[4rem] flex flex-col items-center justify-center ">
      <div className="flex items-center justify-evenly">
        <h1 className="text-[#F78C3D] font-semibold text-[20px]">
          Features & Benefits?
        </h1>
        <FiArrowUpRight size={20} className="text-white" />
      </div>
      <div className="flex flex-wrap  justify-center gap-[20px] mt-[3.5rem]">
        {featuresData.map((item) => (
          <div className="text-white text-left w-[150px] md:w-[250px] ">
            <img src={item.icon} alt="" className="w-[50px] mb-[1rem]" />
            <h1 className="text-[18px] font-semibold mb-[1rem]">
              {item.title}
            </h1>
            <span className="text-[14px] text-gray-200 font-semibold">
              {item.text}
            </span>
          </div>
        ))}
      </div>
      {/* build on Vulcan */}
      <div className="bg-[#333131] px-[15px]">
        <div className="flex items-center justify-evenly">
          <h1 className="text-[#F78C3D] font-semibold text-[20px]">
            Build On Vulcan
          </h1>
          <FiArrowUpRight size={20} className="text-white" />
        </div>

        <div className="w-full bg-[#F15A29] rounded-lg mt-[15rem] ">
          <div className="flex relative">
            <img
              src={blurLogo}
              alt="vulcan logo"
              className="w-[50px] absolute top-[-1rem] "
            />
            <img src={blurLogo} alt="vulcan logo" className="w-[50px] " />
            <img
              src={blurLogo}
              alt="vulcan logo"
              className="w-[50px] absolute"
            />
            <img
              src={blurLogo}
              alt="vulcan logo"
              className="w-[150px] top-[-2rem] flex mx-auto right-0 left-0  absolute"
            />
            <img
              src={blurLogo}
              alt="vulcan logo"
              className="w-[70px] absolute left-[3rem]"
            />
            <img
              src={blurLogo}
              alt="vulcan logo"
              className="w-[60px] absolute blur-[1px] right-[2rem] top-[3rem]"
            />
            <img
              src={blurLogo}
              alt="vulcan logo"
              className="w-[40px] absolute blur-[1px] right-[0.5rem] top-[5rem]"
            />
            <img
              src={blurLogo}
              alt="vulcan logo"
              className="w-[50px] absolute blur-[1px] right-[1rem] top-[7rem]"
            />
            <img
              src={blurLogo}
              alt="vulcan logo"
              className="w-[80px] absolute top-[2rem] blur-sm"
            />
            <img
              src={blurLogo}
              alt="vulcan logo"
              className="w-[100px] absolute top-[4rem] left-[2rem]"
            />
            <img
              src={blurLogo}
              alt="vulcan logo"
              className="w-[40px] absolute top-[8rem] left-0 right-0"
            />
            <img
              src={blurLogo}
              alt="vulcan logo"
              className="w-[50px] absolute right-[3rem] blur-[2px]"
            />
            <img
              src={blurLogo}
              alt="vulcan logo"
              className="w-[50px] absolute right-[0] blur-[1px]"
            />
          </div>

          <div className="mt-[8rem] text-white p-3">
            <h1 className="text-[43px] text-left font-bold">Development Hub</h1>
            <dsiv>
              <h3 className="text-white font-semibold mt-[1rem] mb-[1rem] text-left text-[22px]">
                Dream, Develop, Scale!
              </h3>

              <p className="text-left font-semibold text-[16px] mt-[1rem] mb-[1rem] ">
                The Vulcan Blockchain development hub provides an easy-to-use
                platform for developers to create decentralized applications
                (dApps) using familiar tools and languages. By being Ethereum
                Virtual Machine (EVM) compatible, developers can use the
                Solidity programming language and popular tools such as Remix,
                Truffle, and MetaMask to build dApps on our network with ease.
              </p>
              <p className="text-left font-semibold text-[16px] mt-[1rem] mb-[4rem] ">
                This compatibility allows for a seamless transition for
                developers, as they can use the same tools and processes they
                are already familiar with to build on Vulcan. The result is a
                fast, streamlined development process that allows developers to
                focus on building high-quality, innovative dApps.
              </p>
            </dsiv>

            <span className="mt-[5rem] flex flex-col gap-[15px]">
              <button
                type="button"
                className="px-[2rem] py-[0.8rem] text-center bg-[white] text-black font-bold w-[90%] rounded-full"
              >
                GITBOOK
              </button>
              <button
                type="button"
                className="px-[2rem] py-[0.8rem] text-center  
              bg-transparent text-white w-[90%] border-[1px] font-bold border-white rounded-full"
              >
                SKYWAY
              </button>
              <button
                type="button"
                className="px-[2rem] py-[0.8rem] text-center  
              bg-transparent text-white w-[90%] border-[1px] font-bold border-white rounded-full"
              >
                GRANTS
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
