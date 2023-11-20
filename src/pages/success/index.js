import React from 'react'
import FinmixLogo from "../../assets/img/finmix-logo.png";
import Logo from "../../assets/img/logo.png";
import SuccessImage from "../../assets/img/success.svg";
const Success = () => {
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
      <div className="flex flex-col items-center w-full lg:w-1/2 py-12 px-6 md:px-14 2xl:px-137 ">
        <img className="mb-7" src={SuccessImage} alt="Sucsses"/>
          <h6 className="text-dark-text font-medium leading-normal text-[18px] mt-px">Email was sent </h6>
          <h2 className="text-green font-semibold leading-normal text-[40px]">Successfuly!</h2>
          <p className="text-dark-text text-sm font-normal leading-6">Please cheeck your email and set the password</p>
      </div>
    </div>
  )
}

export default Success;