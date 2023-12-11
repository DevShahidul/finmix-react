import React from 'react'
import FinmixCreationIcon from "../../assets/img/finmix-creation.svg";
import Button from '../button';

const FinmixCreation = () => {
  return (
    <div className="relative py-8">
        <img src={ FinmixCreationIcon } alt="finmixicon"/>
        <div className="absolute w-full -bottom-10 left-0 bg-gray-secondary-5 rounded-lg-10 py-30 text-center">
            <h4 className="text-base font-bold text-theme mb-2.5">New Finmix Creation..</h4>
            <p className="text-13 text-dark-text font-normal leading-5">There easy three step to  create Finmix </p>
            <div className="px-4 mt-5">
                < Button className="bg-green text-sm px-5 py-9 leading-4" text="Create Finmix" />
            </div>
        </div>
    </div>
  )
}

export default FinmixCreation;