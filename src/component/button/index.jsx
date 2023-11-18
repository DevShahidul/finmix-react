import React from 'react'

const Button = (props) => {
  const {text} = props;
  return (
    <button className={`bg-green w-full px-6.5 py-4 rounded-lg-10 text-white text-base leading-5 font-semibold ${props?.className}`} >{text}</button> 
  )
}

export default Button;