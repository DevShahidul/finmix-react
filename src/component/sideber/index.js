import React from 'react'
import { AcountIcon, DashboardIcon, HelpIcon, MemuIcon, SettingIcon} from '../../icons';
import ActivityIcon from '../../icons/activity';
import FinmixCreation from '../finmix-creation';

const Sideber = () => {
  return (
    <aside className="hidden md:block fixed top-29 left-0 bg-white w-[240px] h-screen">
      <div className="relative max-h-[calc(100vh-550px)] overflow-y-auto pl-30">
        <ul>
          <li className="text-base group -ml-30 pt-1.5 pb-0.5 text-dark-body opacity-80 font-medium leading-6"><a href="index.html" className="flex items-center gap-4"><div className="pl-9 pr-4 group-hover:bg-green/15 group-hover:text-green py-2.5 rounded-r-lg-50"> {< DashboardIcon />}</div> <span className=" text-dark-body group-hover:text-dark-title">Dashboard</span> </a></li>
          <li className="text-base group -ml-30 pb-0.5 text-dark-body opacity-80 font-medium leading-6"><a href="index.html" className="flex items-center gap-4"><div className="pl-9 pr-4 group-hover:bg-green/15 group-hover:text-green py-2.5 rounded-r-lg-50"> {< AcountIcon />}</div> <span className=" text-dark-body group-hover:text-dark-title">Account</span> </a></li>
          <li className="text-base group -ml-30 pb-0.5 text-dark-body opacity-80 font-medium leading-6"><a href="index.html" className="flex items-center gap-4"><div className="pl-9 pr-4 group-hover:bg-green/15 group-hover:text-green py-2.5 rounded-r-lg-50"> {< ActivityIcon />}</div> <span className=" text-dark-body group-hover:text-dark-title">Activity</span> </a></li>
          <li className="text-base group -ml-30 pb-0.5 text-dark-body opacity-80 font-medium leading-6"><a href="index.html" className="flex items-center gap-4"><div className="pl-9 pr-4 group-hover:bg-green/15 group-hover:text-green py-2.5 rounded-r-lg-50"> {< MemuIcon />}</div> <span className=" text-dark-body group-hover:text-dark-title">Create Memo</span> </a></li>
          <li className="text-base group -ml-30 pb-0.5 text-dark-body opacity-80 font-medium leading-6"><a href="index.html" className="flex items-center gap-4"><div className="pl-9 pr-4 group-hover:bg-green/15 group-hover:text-green py-2.5 rounded-r-lg-50"> {< SettingIcon />}</div> <span className=" text-dark-body group-hover:text-dark-title">Settings</span> </a></li>
          <li className="text-base group -ml-30 pb-0.5 text-dark-body opacity-80 font-medium leading-6"><a href="index.html" className="flex items-center gap-4"><div className="pl-9 pr-4 group-hover:bg-green/15 group-hover:text-green py-2.5 rounded-r-lg-50"> {< HelpIcon />}</div> <span className=" text-dark-body group-hover:text-dark-title">Help</span> </a></li>
        </ul>
      </div>
      <div className=" px-5">
        < FinmixCreation />
      </div>
    </aside>
    
  )
}

export default Sideber;