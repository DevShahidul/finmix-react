import React from 'react'
import { Link } from "react-router-dom";
import FinmixLogo from "../../assets/img/finmix-logo.png";
import Logo from "../../assets/img/logo.png";
import {Button,Input} from "../../component";
import { EmailIcon,} from '../../icons';
const PassReset = () => {
  return (
    <div className=" lg:flex items-center justify-center w-full ">
      <div className="relative flex flex-col justify-between w-full lg:w-1/2 py-12 px-6 md:px-14 min-h-[500px] md:h-screen bg-theme">
        <div>
          <img className="" src={FinmixLogo} alt="LogoImage" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img src={Logo} alt="HeroImage" />
        </div>
        <div className="flex items-center justify-center gap-1">
          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path fill="#fff" d="M8.083 5.784 9.186 4.68a3.111 3.111 0 1 0 .137 4.511L8.302 8.167h-.163a1.556 1.556 0 1 1-.056-2.385v.002Z"/>
            <path fill="#fff" fill-rule="evenodd" d="M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1.556a5.445 5.445 0 1 1 0 10.889 5.445 5.445 0 0 1 0-10.89Z" clip-rule="evenodd"/>
          </svg>
          <p className="text-white font-popins text-13 font-medium text-center">Finmix 2021</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full lg:w-1/2 py-12 px-6 md:px-14 2xl:px-137 ">
        <div className=" w-full sm:min-w-[446px]">
          <h1 className="text-dark-title text-3xl font-bold mb-4">Reset Password</h1>
          <p className="text-dark-text text-sm font-normal leading-6 mb-10">Have no fear, help is here. Enter the email address that you wish to reset the password for and we'll send you an email with the instructions</p>
          <from>
            <Input type="email" label="Email" icon={< EmailIcon />} name="email" id="email" placeholder="Enter email address"  />
            <Button className=" w-28" text="Reset"/>
          </from>
          <p className="text-dark-text text-13 leading-5 mt-7">Already a user?<Link className="text-green" to="/success">Log in here</Link> </p>
        </div>
      </div>
    </div>
  )
}

export default PassReset;