import React from 'react'

const Checkbox = (props) => {
  const {label,} = props;
  return (
    <div className="flex items-center text-13 my-6 font-normal leading-6 text-dark-text">
        <label className="relative flex pr-3 items-center rounded-full cursor-pointer"for="checkbox"data-ripple-dark="true">
            <input type="checkbox" name='checkbox' className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-border-check transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:border-dark-text  hover:before:opacity-10"
            id="checkbox" />
            <div className="absolute text-dark-text transition-opacity opacity-0 pointer-events-none top-2/4 left-1/4 -translate-y-2/4 -translate-x-1/3 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg"className=" h-3.5 w-3.5"viewBox="0 0 20 20"fill="currentColor"stroke="currentColor"stroke-width="1"><path fill-rule="evenodd"d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"clip-rule="evenodd"></path>
                </svg>
            </div>
        </label>
        <label className="text-13 text-dark-text leading-5" For="checkbox">{label}</label>
    </div>
  )
}

export default Checkbox;