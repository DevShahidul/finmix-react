import React from 'react'
import Search from '../search';
import Finmix from "../../assets/img/finmix.svg"
import { MessageIcon, NotificationIcon } from '../../icons';
import Notification from '../notification';
import MaskImg from "../../assets/img/mask.jpg";

const Header = () => {
  return (
    <div className="w-full md:flex items-center justify-between fixed z-20 bg-gray-secondary-400 -ml-6">
      <div className=" bg-white w-[240px] hidden md:flex items-center justify-center h-29">
        <img src={Finmix} alt="LogoIcon"/>
      </div>
      <div className=" flex items-center justify-between px-6 md:px-0 py-30 w-full md:w-[calc(100%-300px)] mr-auto md:ml-30">
        <button className="md:hidden cursor-pointer relative w-6 h-0.5 bg-dark-body before:w-full before:h-full before:content-[''] before:absolute before:top-2 before:left-0 before:bg-dark-body after:w-full after:h-full after:content-[''] after:absolute after:bottom-2 after:left-0 after:bg-dark-body"></button>

        < Search/>
        <div className="flex items-center justify-center gap-5 ml-auto">
          {< Notification icon={< MessageIcon />} text="2"/>}
          {< Notification icon={< NotificationIcon />} text="4"/>}
          <div className="relative">
            <div className="w-2 h-2 bg-green rounded-full border border-gray-secondary-400 absolute top-1 right-1"></div>
            <img className="ml-1 rounded-full" src={MaskImg} alt="maskImage"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;