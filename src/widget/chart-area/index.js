import React from 'react'

import Money from "../../assets/img/money-bag.png";
import { Chart } from '../../component';
const ChartArea = () => {
    return (
        <div className="bg-white rounded-lg-20 px-4 xl:px-5 2xl:px-30 py-30 mb-30 w-full">
            <div className="flex items-center justify-between mb-5 flex-wrap">
                <div className="flex items-center justify-center">
                    <figure className="flex items-center justify-center rounded-full w-10 h-10 bg-gradient-to-b from-green-gradient-light to-green-gradient-secondary drop-shadow-3xl">
                        <img src={Money} alt="MoneyBag"/>
                    </figure>
                    <div className="flex items-end">
                        <div className="mx-9.5">
                            <h3 className="text-11 font-normal leading-5 text-dark-text">Portfolio</h3>
                            <h2 className="font-popins text-xl sm:text-2xl lg:text-3xl font-bold text-dark-title">$40,950</h2>
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
            <Chart hideXAxis={false} hideYAxis={false} verticalDasharray={false} horizontalDasharray={true}  />
        </div>
    )

}

export default ChartArea;