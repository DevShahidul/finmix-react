import React from 'react'
import Chart from '../chart';

const FinmixDfv = (props) => {
  return (
    <div className={` relative flex items-center justify-between border-b border-gray py-5 ${props?.className}`}>
      <div className="w-[calc(100%-168px)] mr-2">
        <h5 className="font-popins text-base font-bold text-dark-title">DFV/GME</h5>
        <p className="text-sm font-medium leading-6 mt-1">ARK Innovation ETF by approximate holdings</p>
        <div className="flex gap-2.5 mt-2.5 flex-wrap">
          <button className="text-sm font-medium leading-5 text-green-secondary-50 py-1.5 px-2.5 bg-green/12 rounded-lg">580 Investors</button>
          <button className="text-sm font-medium leading-5 text-blue-secondary py-1.5 px-2.5 bg-blue-secondary/12 rounded-lg">820 Followers</button>
        </div>
      </div>
      <div className=" w-40">
        <Chart hideXAxis={true} hideYAxis={true} verticalDasharray={false} horizontalDasharray={false} />
        <h3 className=" font-popins text-xs font-medium leading-5 text-green-secondary-light ">+ 15.94 (34.18%) <span className="text-11 font-normal leading-4 text-dark-body">last month</span></h3>
      </div>
    </div>
  )
}

export default FinmixDfv;