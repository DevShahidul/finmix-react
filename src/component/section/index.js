import React from 'react'

import Button from '../button';
import Chart from '../chart';

const Section = () => {
  return (
    <div className="ml-[240px] lg:flex items-center justify-between">
        <div className="w-full lg:w-1/2 mr-30">
            <div className="bg-white rounded-lg-20 py-30 px-5 mb-30 w-full">
                <Chart hideXAxis={false} hideYAxis={false} verticalDasharray={false} horizontalDasharray={true} />
            </div>
            < div className="px-30 pt-30 bg-white rounded-lg-30">
                <div className="flex items-center justify-between border-b border-gray-secondary-1">
                    <h2>Finmixes</h2>
                    <Button text="Create" plas={<svg className="ml-[6px] mt-1" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1V9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 5H9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>} className="bg-blue-gradient-60 py-2 px-4 flex items-center" />
                </div>
                <div className="">

                </div>

            </div>
        </div>
        <div className="w-full lg:w-1/2 mr-30">
            <h1>this</h1>
        </div>
    </div>
  )
}

export default Section;