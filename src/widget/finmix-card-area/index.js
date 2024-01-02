import React from 'react'
import {FinmixCard,Button} from '../../component';


const FinmixCardArea = ({title, button, showmore, listItems}) => {
  return (
    <div className="">
        <div className="px-4 xl:px-5 2xl:px-30 pb-22 pt-30 flex items-center justify-between border-b border-gray-secondary-1">
            <h2 className="text-lg font-bold text-dark-title">{title}</h2>
            <Button text={button.text} plas={<svg className="ml-[6px] mt-1" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1V9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 5H9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>} className="bg-blue-gradient-60 py-2 px-4 flex items-center" />
        </div>

        {listItems.map((item, index)=>  <FinmixCard  key={index} {...item}  />)}
        
        <div className="py-4 border-t border-gray-secondary-1 text-center">
            <div className="inline-block">
                <a className="flex items-center justify-center gap-2 text-base text-dark-title font-medium leading-6" href={showmore}>
                    <h5>Show More</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M5.5 1V10" stroke="#2D405A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 5.5H10" stroke="#2D405A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
  )
}

export default FinmixCardArea;