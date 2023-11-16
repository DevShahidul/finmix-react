import React from 'react'

const OthButton = (props) => {
  const {text,icon} = props;
  return (
    <div className=" mt-3">
      <button className="flex items-center bg-white px-6.5 py-4 rounded-md border border-gray-secondary-200 text-gray-secondary-300 text-13 leading-normal font-popins font-medium">
        {icon}
        {text}
      </button>
    </div> 
  )
}

export default OthButton;