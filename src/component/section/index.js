import React from 'react'

import Button from '../button';
import Chart from '../chart';
import Money from "../../assets/img/money-bag.png";
import FinmixDfv from '../finmix_dfv';
import Switch from '../switch';

const Section = () => {
  return (
    <div className="ml-[240px] xl:flex items-start justify-between pt-29 z-10">
        <div className="w-full xl:w-1/2 mr-30">
            <div className="bg-white rounded-lg-20 px-4 xl:px-5 2xl:px-30 py-30 mb-30 w-full">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center justify-center">
                        <figure className="flex items-center justify-center rounded-full w-10 h-10 bg-gradient-to-b from-green-gradient-light to-green-gradient-secondary drop-shadow-3xl">
                            <img src={Money} alt="MoneyBag"/>
                        </figure>
                        <div className="flex items-end">
                            <div className="mx-9.5">
                                <h3 className="text-11 font-normal leading-5 text-dark-text">Portfolio</h3>
                                <h2 className="font-popins text-3xl font-bold text-dark-title">$40,950</h2>
                            </div>
                            <h3 className=" font-popins text-13 font-medium leading-5 text-green-secondary-light ">+ 15.94(34.18%)</h3>
                        </div>
                    </div>
                    <div className="flex items-center text-sm 2xl:gap-1.5 leading-5 font-medium text-dark-body">
                        <div className=" py-1 px-1.5 hover:bg-green hover:rounded-md hover:text-white">1D</div>
                        <div className=" py-1 px-1.5 hover:bg-green hover:rounded-md hover:text-white">1W</div>
                        <div className=" py-1 px-1.5 hover:bg-green hover:rounded-md hover:text-white">1M</div>
                        <div className=" py-1 px-1.5 hover:bg-green hover:rounded-md hover:text-white">1Y</div>
                        <div className="py-1 pl-1.5">YTD</div>
                    </div>
                </div>
                <Chart hideXAxis={false} hideYAxis={false} verticalDasharray={false} horizontalDasharray={true} />
            </div>
            <div className=" bg-white rounded-lg-30 mb-30">
                <div className="px-4 xl:px-5 2xl:px-30 pb-22 pt-30 flex items-center justify-between border-b border-gray-secondary-1">
                    <h2 className="text-lg font-bold text-dark-title">Finmixes</h2>
                    <Button text="Create" plas={<svg className="ml-[6px] mt-1" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1V9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 5H9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>} className="bg-blue-gradient-60 py-2 px-4 flex items-center" />
                </div>
                <div className="px-4 xl:px-5 2xl:px-30">
                    <FinmixDfv />
                    <FinmixDfv />
                    <FinmixDfv />
                    <FinmixDfv className="border-b-0" />
                </div>
                <div className="py-4 border-t border-gray-secondary-1 text-center">
                    <div className="inline-block">
                        <a className="flex items-center justify-center gap-2 text-base text-dark-title font-medium leading-6" href="index.html">
                            <h5>Show More</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M5.5 1V10" stroke="#2D405A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 5.5H10" stroke="#2D405A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className=" bg-white rounded-lg-30">
                <div className="px-4 xl:px-5 2xl:px-30 pb-22 pt-30 flex items-center justify-between border-b border-gray-secondary-1">
                    <h2 className="text-lg font-bold text-dark-title">Featured Indexes</h2>
                    <a href="index.html" className=" text-sm font-semibold leading-4 text-green">See all Features</a>
                </div>
                <div className="px-4 xl:px-5 2xl:px-30">
                    <FinmixDfv />
                    <FinmixDfv />
                    <FinmixDfv />
                    <FinmixDfv className="border-b-0" />
                </div>
                <div className="py-4 border-t border-gray-secondary-1 text-center ">
                    <div className="inline-block">
                        <a className="flex items-center justify-center gap-2 text-base text-dark-title font-medium leading-6" href="index.html">
                            <h5>Show More</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M5.5 1V10" stroke="#2D405A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 5.5H10" stroke="#2D405A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full xl:w-1/2 bg-white rounded-lg-20 px-4 xl:px-5 2xl:px-30 py-5 mt-30 xl:mt-0 shadow-shadow-feed">
            <Switch />
        </div>
    </div>
  )
}

export default Section;