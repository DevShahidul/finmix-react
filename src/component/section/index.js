import { useState } from 'react';
import Button from '../button';
import Switch from '../switch';
import SelectDropdown from '../select-dropdown';
import Abator from '../../assets/img/abator.png';
import Articale from '../articale';
import {articaleData,finmixChartList,FeatureChartList} from "../../data";
import { ChartArea, FeatureCard,FinmixCardArea } from '../../widget';
const Section = () => {

    const [options] = useState([
          {
            label: "Global",
            value: "opt1",
          },
          {
            label: "Option 1",
            value: "opt1",
          },
          {
            label: "Option 2",
            value: "opt2",
          },
          {
            label: "Option 3",
            value: "opt3",
          },
        ])
    const handleChangeSelect = (e) => {
        console.log(e)
    }
  return (
    <div className="md:ml-[240px] xl:flex items-start justify-between pt-29 z-10 pb-12">
        <div className="w-full xl:w-1/2 md:mr-30">
            < ChartArea />
            <div className=" bg-white rounded-lg-30 mb-30">
                
                <FinmixCardArea title="Finmixes" button={{text: "create"}} showmore="/" listItems={finmixChartList} />
                
            </div>
            <div className=" bg-white rounded-lg-30">
                
                <FeatureCard title="Featured Indexes" text="See all Features"  showmore="/" listItems={FeatureChartList} />
                
            </div>
        </div>
        <div className="w-full xl:w-1/2 bg-white rounded-lg-20 shadow-shadow-feed ">
            <div className="px-4 xl:px-5 2xl:px-30 py-5 mt-30 xl:mt-0 ">
                <div className="flex items-center justify-between border-b pb-4 mb-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <h4 className="text-lg font-bold text-dark-title">Feed</h4>
                        <Switch />
                        <h4 className="text-lg font-bold text-dark-title">Leaderboard</h4>
                    </div>
                    <SelectDropdown
                        options={options}
                        placeHolder='Global'
                        onChange={(e) => handleChangeSelect(e)}
                        isSearchable/>
                </div>
                <div className="w-full relative bg-gray-secondary-60 rounded-lg pb-20 pl-14 pr-5 pt-5">
                    <textarea className="w-full bg-transparent border-spacing-0 resize-none focus:outline-none pl-3 font-biennale mt-2 text-13 text-dark-text font-normal
                    placeholder:font-popins placeholder:text-13 placeholder:font-normal placeholder:leading-5" id="w3review" name="w3review" rows="4" placeholder="What's on your mind"></textarea>
                    <img className="absolute top-5 left-5" src={Abator} alt="Abator_Image"/>
                    <div className="flex items-center justify-between absolute bottom-5 left-4 right-5">
                        <div className="flex items-center gap-4">
                            <a href='index.html'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                <path d="M12.8699 5.37583V13.8023C12.8699 15.4669 11.6765 16.9483 10.0541 17.1076C8.18994 17.2908 6.62995 15.8014 6.62995 13.9377V4.09354C6.62995 3.05018 7.36314 2.1024 8.37713 1.99886C9.54712 1.87939 10.5299 2.81125 10.5299 3.98204V12.3448C10.5299 12.7829 10.1789 13.1413 9.74992 13.1413C9.32092 13.1413 8.96993 12.7829 8.96993 12.3448V5.37583C8.96993 5.04929 8.70473 4.77849 8.38493 4.77849C8.06514 4.77849 7.79994 5.04929 7.79994 5.37583V12.2333C7.79994 13.2767 8.53313 14.2245 9.54712 14.328C10.7171 14.4475 11.6999 13.5156 11.6999 12.3448V4.11743C11.6999 2.45284 10.5065 0.971434 8.88413 0.812143C7.02775 0.628958 5.45996 2.11833 5.45996 3.98204V13.7545C5.45996 16.0404 7.09795 18.0873 9.32872 18.3023C11.8949 18.5412 14.0399 16.5023 14.0399 13.9377V5.37583C14.0399 5.04929 13.7747 4.77849 13.4549 4.77849C13.1351 4.77849 12.8699 5.04929 12.8699 5.37583Z" fill="#646464"/>
                            </svg>
                            </a>
                            <a href='index.html'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_643_2640)">
                                    <path d="M17.116 3.98214H15.5404V2.3733C15.5404 1.94321 15.1972 1.59277 14.776 1.59277H14.7526C14.3236 1.59277 13.9804 1.94321 13.9804 2.3733V3.98214H12.4127C11.9915 3.98214 11.6483 4.33258 11.6405 4.76267V4.78656C11.6405 5.22461 11.9837 5.57505 12.4127 5.57505H13.9804V7.17593C13.9804 7.60601 14.3236 7.96442 14.7526 7.95645H14.776C15.1972 7.95645 15.5404 7.60601 15.5404 7.17593V5.57505H17.116C17.5372 5.57505 17.8804 5.22461 17.8804 4.79452V4.76267C17.8804 4.33258 17.5372 3.98214 17.116 3.98214ZM13.2005 7.17593V6.37151H12.4127C11.9993 6.37151 11.6093 6.20425 11.3129 5.90956C11.0243 5.60691 10.8605 5.20868 10.8605 4.76267C10.8605 4.47594 10.9385 4.21311 11.0711 3.98214H4.62053C3.76254 3.98214 3.06055 4.69895 3.06055 5.57505V15.1325C3.06055 16.0086 3.76254 16.7254 4.62053 16.7254H13.9804C14.8384 16.7254 15.5404 16.0086 15.5404 15.1325V8.53787C15.3064 8.67326 15.0412 8.76087 14.7448 8.76087C13.8946 8.75291 13.2005 8.04406 13.2005 7.17593ZM13.1693 15.1325H5.40053C5.08073 15.1325 4.89353 14.7582 5.08853 14.4954L6.63291 12.4007C6.79671 12.1777 7.11651 12.1936 7.27251 12.4166L8.5205 14.3361L10.5563 11.5644C10.7123 11.3573 11.0165 11.3494 11.1725 11.5564L13.4734 14.4874C13.6762 14.7502 13.4968 15.1325 13.1693 15.1325Z" fill="#646464"/>
                                </g>
                                    <defs>
                                        <clipPath id="clip0_643_2640">
                                        <rect width="18.7198" height="19.1149" fill="white" transform="translate(0.720703)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href='index.html'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <path d="M9.08177 16.9098C13.0518 16.9098 16.2817 13.6118 16.2817 9.55795C16.2817 5.50412 13.0518 2.20605 9.08177 2.20605C5.11173 2.20605 1.88184 5.50412 1.88184 9.55795C1.88184 13.6118 5.11173 16.9098 9.08177 16.9098ZM11.5967 7.35238C12.19 7.35238 12.6717 7.84422 12.6717 8.45002C12.6717 9.05582 12.19 9.54766 11.5967 9.54766C11.0034 9.54766 10.5218 9.05582 10.5218 8.45002C10.5218 7.84422 11.0034 7.35238 11.5967 7.35238ZM8.50001 12.4392C8.88089 12.5178 9.28121 12.5178 9.66352 12.4392C9.84568 12.4009 10.0271 12.3429 10.2035 12.2679C10.372 12.1943 10.5376 12.1032 10.6924 11.9973C10.8422 11.8929 10.9854 11.7723 11.1179 11.6378C11.2497 11.504 11.3677 11.3577 11.47 11.2026L12.6637 12.0238C12.5089 12.2583 12.3311 12.4789 12.1353 12.6788C11.9401 12.8781 11.7249 13.0597 11.4981 13.2155C11.2662 13.3758 11.0193 13.5118 10.763 13.6228C10.498 13.736 10.2258 13.8228 9.9508 13.8801C9.66568 13.9389 9.37265 13.9691 9.08177 13.9691C8.79089 13.9691 8.49785 13.9389 8.21274 13.8794C7.93698 13.8228 7.66482 13.736 7.4013 13.6228C7.14427 13.5118 6.89731 13.3751 6.66619 13.2155C6.43867 13.0582 6.2234 12.8773 6.02684 12.6766C5.83172 12.4781 5.65316 12.2583 5.49908 12.023L6.69283 11.2018C6.79579 11.357 6.91387 11.5033 7.04419 11.6356C7.17739 11.7723 7.32066 11.8929 7.47186 11.9973C7.62522 12.1032 7.7901 12.1943 7.96074 12.2679C8.13642 12.3429 8.31714 12.4009 8.50001 12.4392ZM6.56179 7.35238C7.15795 7.35238 7.64178 7.84643 7.64178 8.45517C7.64178 9.0639 7.15795 9.55795 6.56179 9.55795C5.96564 9.55795 5.4818 9.0639 5.4818 8.45517C5.4818 7.84643 5.96564 7.35238 6.56179 7.35238Z" fill="#646464"/>
                                </svg>
                            </a>
                        </div>
                        <Button text="Post" className="bg-green px-5 py-2" />
                    </div>
                </div>
            </div>
            <div className="max-h-[1576px] overflow-y-auto">
                {articaleData.map((article, index) => <Articale key={index} {...article} /> )}
            </div>
        </div>
    </div>
  )
}

export default Section;