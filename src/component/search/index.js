import React from 'react'
import { SearchIcon } from '../../icons';

const Search = () => {
  return (
    <div className="relative hidden lg:block ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
            {< SearchIcon />}
        </div>
        <input type="search" name="search" id="id" className="w-400 py-4 pl-12 pr-20 text-sm text-border-check font-normal rounded-lg-50 bg-white placeholder:text-border-check leading-6 focus:outline-none "placeholder="Search" />
    </div>
  )
}

export default Search;