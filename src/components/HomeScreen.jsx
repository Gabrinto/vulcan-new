import React, { useState } from 'react';
import { categoryDate } from '../data';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { images } from '../constants';
import Header from './Header';
import BannerHome from './BannerHome';
import IconScroll from './IconScroll';
import PassiveIncome from './PassiveIncome';
import Features from './Features';
import VulcanTools from './VulcanTools';
import Community from './Community';

const HomeScreen = () => {
  return (
    <div className="bg-black">
      <div className="bg-black">
        <Header />
        <BannerHome />
        <IconScroll />
        <PassiveIncome />
        <Features />
        <VulcanTools />
        <Community />
      </div>
    </div>
  );
};

export default HomeScreen;
