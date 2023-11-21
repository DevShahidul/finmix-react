import React from 'react'
import Search from '../search';
import Finmix from "../../assets/img/finmix.svg"
import { NotificationIcon } from '../../icons';

const Header = () => {
  return (
    <div className="">
      <div>
        <img src={Finmix} alt="LogoIcon"/>
      </div>
      < Search/>
      <div>
        < NotificationIcon />
      </div>
    </div>
  )
}

export default Header;