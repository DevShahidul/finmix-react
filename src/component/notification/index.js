import React from 'react'

const Notification = (props) => {
const {text,icon} = props;
  return (
    <div className="relative w-7 ">
        <div className="absolute top-0 right-0 w-4 h-4 bg-red-5 flex items-center justify-center rounded-full border-2 border-white">
          <h3 className="text-white font-popins text-9 font-semibold tracking-0.9">{text}</h3>
        </div>
        {icon}
    </div>
  )
}

export default Notification;