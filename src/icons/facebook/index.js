import React from 'react'

const FacebookIcon = (props) => {
  return (
    <svg {...props} className="w-5 h-5 mr-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <g clip-path="url(#a)">
            <path fill="#3699FF" fill-rule="evenodd" d="M0 10.056C0 15.028 3.61 19.162 8.333 20v-7.223h-2.5V10h2.5V7.777c0-2.5 1.611-3.888 3.89-3.888.721 0 1.5.111 2.221.222v2.556h-1.277c-1.223 0-1.5.61-1.5 1.389V10h2.666l-.444 2.777h-2.222V20C16.389 19.162 20 15.028 20 10.056 20 4.525 15.5 0 10 0S0 4.525 0 10.056Z" clip-rule="evenodd"/>
        </g>
        <defs>
            <clipPath id="a">
            <path fill="#fff" d="M0 0h20v20H0z"/>
            </clipPath>
        </defs>
    </svg>
  )
}

export default FacebookIcon;