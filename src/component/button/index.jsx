import React from 'react'

const Button = (props) => {
  const {text, plas} = props;
  return (
    <button className={` rounded-lg-10 text-white text-base leading-5 font-semibold ${props?.className}`} >{text} {plas}</button> 
  )
}

export default Button;