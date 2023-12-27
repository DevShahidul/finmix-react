const Articale = (props) => {
    const {author,
        postTime,
        title,
        description,
        slug,
        thumbnail,
        like,
        comment} = props;
  return (
    <div className="px-4 xl:px-5 2xl:px-30 py-5 mt-6 xl:mt-0 border-t border-gray ">
        <div className="flex items-center justify-between max-h-screen"> 
            <div className="flex items-center gap-4">
                <img src={author?.avater} alt="Avaterlogo"/>
                <div className=" text-center ex-sm:flex items-end ">
                    <div>
                        <h5 className="text-base font-bold text-dark-title">{author?.name}</h5>
                        <p className="text-13 font-normal leading-5.5 text-dark-text font-popins">{author?.email}</p>
                    </div>
                    <p className="text-13 font-normal leading-5.5 ml-2 text-dark-body">{postTime}</p>
                </div>
            </div>
            <a href="index.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M5.25 9C5.25 10.0355 4.41053 10.875 3.375 10.875C2.33947 10.875 1.5 10.0355 1.5 9C1.5 7.96447 2.33947 7.125 3.375 7.125C4.41053 7.125 5.25 7.96447 5.25 9Z" fill="#56606D"/>
                    <path d="M10.875 9C10.875 10.0355 10.0355 10.875 9 10.875C7.96447 10.875 7.125 10.0355 7.125 9C7.125 7.96447 7.96447 7.125 9 7.125C10.0355 7.125 10.875 7.96447 10.875 9Z" fill="#56606D"/>
                    <path d="M16.5 9C16.5 10.0355 15.6605 10.875 14.625 10.875C13.5895 10.875 12.75 10.0355 12.75 9C12.75 7.96447 13.5895 7.125 14.625 7.125C15.6605 7.125 16.5 7.96447 16.5 9Z" fill="#56606D"/>
                </svg>
            </a>
        </div>
        <h4 className="text-lg font-medium text-dark-title leading-normal mt-5">{title}</h4>
        <p className="text-sm font-normal leading-6 text-dark-body mt-4">{description}<a className=" text-green font-semibold ml-2" href={slug}>Read More</a></p>
        <img className="mt-30 w-full" src={thumbnail} alt='HeroImage'/>
        <div className="flex flex-wrap items-center gap-10 mt-5">
            <a href="index.html" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M1.7 16H2.55V5.05263H1.7C1.24913 5.05263 0.81673 5.23007 0.497918 5.54593C0.179107 5.86178 0 6.29016 0 6.73684V14.3158C0 14.7625 0.179107 15.1909 0.497918 15.5067C0.81673 15.8226 1.24913 16 1.7 16ZM15.3 5.05263H9.35L10.3037 2.21642C10.3888 1.9633 10.412 1.69376 10.3713 1.43003C10.3307 1.16629 10.2274 0.915885 10.0699 0.699448C9.91247 0.483011 9.70537 0.30673 9.46567 0.185125C9.22597 0.0635195 8.96055 6.91476e-05 8.69125 0H8.5L4.25 4.57937V16H13.6L16.9252 8.76126L17 8.42105V6.73684C17 6.29016 16.8209 5.86178 16.5021 5.54593C16.1833 5.23007 15.7509 5.05263 15.3 5.05263Z" fill="#14B19E"/>
                </svg>
                <h6 className="text-xs font-popins font-normal leading-5.5 text-dark-body-50">{like}</h6>
            </a>
            <a href="index.html" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M3.36842 1.60004C2.92174 1.60004 2.49336 1.76862 2.1775 2.06868C1.86165 2.36875 1.68421 2.77573 1.68421 3.20008V9.60025C1.68421 10.0246 1.86165 10.4316 2.1775 10.7316C2.49336 11.0317 2.92174 11.2003 3.36842 11.2003H4.21053C4.43387 11.2003 4.64806 11.2846 4.80598 11.4346C4.96391 11.5846 5.05263 11.7881 5.05263 12.0003V13.706L8.79663 11.3347C8.93479 11.2472 9.0971 11.2004 9.26316 11.2003H13.4737C13.9204 11.2003 14.3488 11.0317 14.6646 10.7316C14.9805 10.4316 15.1579 10.0246 15.1579 9.60025V3.20008C15.1579 2.77573 14.9805 2.36875 14.6646 2.06868C14.3488 1.76862 13.9204 1.60004 13.4737 1.60004H3.36842ZM0 3.20008C0 2.35137 0.354886 1.53741 0.986588 0.937283C1.61829 0.337151 2.47506 0 3.36842 0H13.4737C14.367 0 15.2238 0.337151 15.8555 0.937283C16.4872 1.53741 16.8421 2.35137 16.8421 3.20008V9.60025C16.8421 10.449 16.4872 11.2629 15.8555 11.863C15.2238 12.4632 14.367 12.8003 13.4737 12.8003H9.51747L4.67705 15.866C4.55024 15.9462 4.40291 15.9922 4.25076 15.9991C4.09861 16.006 3.94734 15.9736 3.81305 15.9053C3.67876 15.837 3.56649 15.7353 3.48819 15.6112C3.40989 15.4871 3.3685 15.3451 3.36842 15.2004V12.8003C2.47506 12.8003 1.61829 12.4632 0.986588 11.863C0.354886 11.2629 0 10.449 0 9.60025V3.20008Z" fill="#5C6A80"/>
                </svg>
                <h6 className="text-xs font-popins font-normal leading-5.5 text-dark-body-50">{comment}</h6>
            </a>
            <a href="index.html" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                    <path d="M10.4499 3.85106V0.949788C10.4499 0.761927 10.5057 0.578295 10.6101 0.422108C10.7145 0.26592 10.8628 0.144189 11.0364 0.0723028C11.2099 0.000416999 11.4009 -0.0183957 11.5852 0.0182431C11.7694 0.0548819 11.9387 0.145327 12.0715 0.278145L18.7215 6.92808C18.8098 7.01623 18.8798 7.12092 18.9276 7.23617C18.9754 7.35141 19 7.47496 19 7.59972C19 7.72449 18.9754 7.84803 18.9276 7.96328C18.8798 8.07852 18.8098 8.18322 18.7215 8.27136L12.0715 14.9213C11.9389 15.0546 11.7696 15.1454 11.5852 15.1823C11.4007 15.2192 11.2095 15.2005 11.0358 15.1286C10.862 15.0566 10.7136 14.9346 10.6093 14.7781C10.5049 14.6217 10.4495 14.4377 10.4499 14.2497V11.3085C10.1801 11.2895 9.91315 11.2809 9.64905 11.2809C4.49441 11.2809 1.82208 14.6743 1.70523 14.8244C1.58547 14.9828 1.41892 15.0995 1.22915 15.158C1.03939 15.2165 0.836037 15.2137 0.647894 15.1502C0.45916 15.0869 0.295078 14.9659 0.178825 14.8044C0.0625706 14.6428 1.90735e-05 14.4487 0 14.2497C0 5.58194 7.68162 4.10281 10.4499 3.85106ZM9.64905 9.38095C10.2637 9.38095 10.8954 9.4237 11.5253 9.5073C11.7535 9.5379 11.9629 9.65029 12.1146 9.82361C12.2662 9.99693 12.3498 10.2194 12.3499 10.4497V11.9564L16.7065 7.59972L12.3499 3.24306V4.74975C12.3499 5.27414 11.9024 5.69974 11.379 5.69974C10.5145 5.69974 3.67076 5.89069 2.18403 11.8034C3.75531 10.6463 6.25094 9.38095 9.64905 9.38095Z" fill="#5C6A80"/>
                </svg>
                <h6 className="text-xs font-popins font-normal leading-5.5 text-dark-body-50">Share</h6>
            </a>
            <a href="index.html" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M15.8153 0.194146C15.7252 0.1046 15.6114 0.042601 15.4872 0.0154398C15.3631 -0.0117214 15.2337 -0.00291591 15.1144 0.0408209L0.430735 5.37388C0.3041 5.42185 0.195075 5.50717 0.118139 5.6185C0.0412041 5.72983 0 5.86191 0 5.99718C0 6.13246 0.0412041 6.26453 0.118139 6.37586C0.195075 6.48719 0.3041 6.57251 0.430735 6.62048L6.83817 9.18035L9.40114 15.58C9.4493 15.7009 9.53184 15.8052 9.63858 15.8798C9.74532 15.9544 9.8716 15.9962 10.0018 16C10.1367 15.9972 10.2676 15.9537 10.3772 15.8752C10.4868 15.7966 10.57 15.6868 10.6159 15.56L15.9554 0.894111C16.0009 0.776167 16.0119 0.647743 15.987 0.523812C15.9622 0.39988 15.9026 0.285548 15.8153 0.194146ZM10.0018 13.4668L8.13968 8.80037L11.3367 5.6072L10.3956 4.66725L7.17189 7.88708L2.5265 6.00051L14.2267 1.78073L10.0018 13.4668Z" fill="#5C6A80"/>
                </svg>
                <h6 className="text-xs font-popins font-normal leading-5.5 text-dark-body-50">Send</h6>
            </a>
        </div>
    </div>
  )
}

export default Articale;