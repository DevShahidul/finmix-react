import React from 'react'
const Input = (props) => {
  const {type,label,icon,name,id,placeholder } = props;
  const Icon = icon;
  return (
    <div>
        {label ? <label for="price" class="block text-sm font-medium leading-6 text-dark-title">{label}</label> : null}
        <div class="relative mt-2">
          {icon ? 
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
          {icon}
        </div> : null }
            
        <input type={type} name={name} id={id} class="block w-full rou py-4 pl-12 pr-20 text-13 text-dark-text font-normal rounded-lg border bg-white border-border placeholder:text-dark-text leading-6" placeholder={placeholder}/>
        </div>
    </div>
  )
}

export default Input