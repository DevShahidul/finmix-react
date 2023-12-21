import React from 'react'

const Switch = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer"/>
        <div className=" w-14.2 h-30 bg-gray  rounded-full peer dark:bg-green peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-green peer-checked:after:bg-white after:border-gray after:border after:rounded-full after:h-6.5 after:w-6.5 after:transition-all dark:border-gray-600 peer-checked:bg-green"></div>
    </label>

  )
}

export default Switch;