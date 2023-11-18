import React from 'react'
const Input = (props) => {
  const {type,label,icon,name,id,placeholder } = props;
  return (
    <div className="mb-6">
        {label ? <label htmlFor="price" className="block text-sm font-medium leading-6 text-dark-title">{label}</label> : null}
        <div className="relative mt-2">
          {icon ? 
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
            {icon}
          </div> : null }
          <input type={type} name={name} id={id} className="block w-full py-4 pl-12 pr-20 text-13 text-dark-text font-normal rounded-lg border bg-white border-border placeholder:text-dark-text leading-6" placeholder={placeholder} />
          
        </div>
    </div>
  )
}

export default Input