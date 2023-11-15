import React from 'react'

const Password = () => {
  return (


    <div>
        <label for="price" class="block text-sm font-medium leading-6 text-dark-title">Password</label>
        <div class="relative mt-2">
            <div class="pointer-events-none absolute inset-y-0 left-0 right-4 flex items-center pl-5">

                 <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6858 6.87272V5.08355C11.6858 2.98939 9.98746 1.29105 7.89329 1.29105C5.79913 1.28189 4.09413 2.97189 4.08496 5.06689V5.08355V6.87272" stroke="#79828D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0695 16.7076H4.70199C2.95699 16.7076 1.54199 15.2935 1.54199 13.5476V9.97348C1.54199 8.22764 2.95699 6.81348 4.70199 6.81348H11.0695C12.8145 6.81348 14.2295 8.22764 14.2295 9.97348V13.5476C14.2295 15.2935 12.8145 16.7076 11.0695 16.7076Z" stroke="#79828D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.88542 10.835V12.6858" stroke="#79828D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg className=' ml-auto' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.13314 9.9724C6.65397 9.49406 6.3623 8.84406 6.3623 8.1149C6.3623 6.65406 7.53897 5.47656 8.99897 5.47656C9.72147 5.47656 10.3865 5.76906 10.8573 6.2474" stroke="#99A6B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.5868 8.58203C11.3935 9.65703 10.5468 10.5054 9.47266 10.7004" stroke="#99A6B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.54518 12.56C3.22268 11.5217 2.10268 10.005 1.29102 8.11415C2.11102 6.21499 3.23852 4.68999 4.56935 3.64332C5.89185 2.59665 7.41768 2.02832 8.99935 2.02832C10.5902 2.02832 12.1152 2.60499 13.446 3.65915" stroke="#99A6B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.2063 5.49219C15.7796 6.25385 16.2838 7.13302 16.708 8.11385C15.0688 11.9114 12.1721 14.1989 8.99965 14.1989C8.28048 14.1989 7.57132 14.0822 6.88965 13.8547" stroke="#99A6B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.5718 1.54102L2.42676 14.686" stroke="#99A6B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <input type="password" name="price" id="price" class="block w-full rou py-4 pl-12 pr-20 text-13 text-dark-text font-normal rounded-lg border bg-white border-border placeholder:text-dark-text leading-6" placeholder="Enter password"/>
        </div>
    </div>
  )
}

export default Password