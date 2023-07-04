import React from 'react';
import VideoSVG from './svg/VideoSVG';
import slowFire from '../assets/slowfireshort.mp4';
import { vulcanHomeScreenData } from '../data';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BannerHome = () => {
  return (
    <div className="h-[1060px] relative">
      <div className="flex items-center justify-center w-full h-full">
        <div className=" flex flex-col items-center justify-center">
          <video
            id="videoElement"
            autoPlay
            muted
            loop
            width="100%"
            // height="100%"
            style={{
              height: '100%',
              position: 'absolute',
              top: 0,
              bottom: '0',
              objectFit: 'cover',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: '2',
            }}
            className=" items-center"
          >
            <source src={slowFire} type="video/mp4" />
          </video>
        </div>
        <div className="absolute  h-[100%] z-[999] md:mt-[15rem]">
          <div className=" flex flex-col items-center pt-[8rem] z-[99999]  bg-gradient-to-br  from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.4)] h-[100%]">
            <VideoSVG />
            <span className="mt-[2rem] flex flex-col">
              <span className="text-[38px] md:text-[46px] font-semibold leading-[45px] text-white">
                The World's First{' '}
                <h2
                  style={{ fontWeight: 'bold' }}
                  className=" text-[#F78C3D]   
                font-extrabold text-[40px] md:text-[46px] z-[9999] leading-[49px] md:leading-[58px]"
                >
                  Blockchain Automatic Revenue Sharing{' '}
                </h2>{' '}
                (BARS) Technology
              </span>
              <Link
                to={'/wallet'}
                className="bg-white z-30 mt-[2rem] px-[43px] py-[11px] text-gray-800
                 w-[40%] sm:w-[30%] self-center font-bold rounded-full"
              >
                Connect
              </Link>
            </span>

            <div className="mt-[3rem] flex flex-wrap items-center justify-center gap-[15px]">
              {vulcanHomeScreenData.map((item) => (
                <div className="bg-[#252525] h-[240px] w-[150px] sm:w-[300px] md:w-[450px] lg:w-[300px] rounded-md p-[1rem]">
                  <span className="flex justify-between">
                    <img src={item.icon} alt="" className="w-[60px]" />
                    <FiArrowUpRight size={20} className="text-white" />
                  </span>
                  <div className="mt-[1.2rem] flex flex-col items-start">
                    <p className="text-[18px] text-left text-white font-semibold">
                      {item.title}
                    </p>
                    <p className="mt-[10px] text-gray-300 text-left">
                      {item.function}
                    </p>
                    <p className="text-white font-semibold text-left text-[20px] leading-[26px] mt-[8px]">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
