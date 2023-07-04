import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/fav-icon.jpeg';
import { images } from '../constants';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiArrowUpRight } from 'react-icons/fi';

const Header = ({ path }) => {
  return (
    <div
      className="w-full px-2 shadow-lg fixed top-0 z-[999999999] h-[60px]
    md-full bg-black flex items-center  justify-center "
    >
      <div className="flex items-center justify-between md:justify-between md:w-full md:px-[1rem]">
        <Link to="/" className="flex flex-[0.5]">
          <img
            src={images.vulcanLogo}
            alt=""
            className="w-[70%] md:w-[40%] cursor-pointer"
          />
        </Link>
        <span className="flex flex-col gap-2 md:hidden">
          <div className="bg-white h-[0.7px] w-[30px]" />
          <div className="bg-white h-[0.7px] w-[30px]" />
          <div className="bg-[#fff] h-[0.7px] w-[30px]" />
        </span>

        {/* desktop */}

        <div className="hidden md:flex flex-1  justify-end">
          <div className="flex gap-[1rem]">
            <span className="flex text-white text-[20px] gap-[10px] items-center md:gap-[5px] lg:flex">
              <Link to={'/'}>Learn</Link>
              <MdKeyboardArrowDown size={25} />
            </span>
            <span className="flex text-white text-[20px] gap-[10px] items-center  md:gap-[5px] lg:flex">
              <Link to={'/'}>Build</Link>
              <MdKeyboardArrowDown size={25} />
            </span>
            <span className="flex text-white text-[20px] gap-[10px] items-center  md:gap-[5px] lg:flex">
              <Link to={'/'}>Projects</Link>
              <MdKeyboardArrowDown size={25} />
            </span>
            <span className="flex text-white text-[20px] gap-[10px] items-center  md:gap-[5px] lg:flex">
              <Link to={'/'}>Network</Link>
              <MdKeyboardArrowDown size={25} />
            </span>
            <span className="flex text-white text-[20px] gap-[10px] items-center  md:gap-[5px] lg:flex">
              <Link to={'/'}>Community</Link>
              <MdKeyboardArrowDown size={25} />
            </span>
            <span className="text-[#F2632D] flex gap-[1px]">
              Litepaper
              <FiArrowUpRight size={20} className="text-white" />
            </span>
            <Link
              to={'/wallet'}
              className="bg-white px-[30px] py-[5px] text-gray-800 font-bold rounded-full text-center"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
