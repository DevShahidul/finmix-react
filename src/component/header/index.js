import React from 'react'
import Search from '../search';
import Finmix from "../../assets/img/finmix.svg"
import { MessageIcon, NotificationIcon } from '../../icons';
import Notification from '../notification';
import MaskImg from "../../assets/img/mask.jpg";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between fixed z-20 bg-gray-secondary-400 -ml-6">
      <div className=" bg-white w-[240px] flex items-center justify-center h-29">
        <img src={Finmix} alt="LogoIcon"/>
      </div>
      <div className=" flex items-center justify-between py-30 w-[calc(100%-300px)] mr-auto ml-30">
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