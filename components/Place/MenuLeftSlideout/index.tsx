"use client"
import Link from "next/link";
import { useRef,useEffect } from "react"

const MenuLeftSlideout:React.FC<{setVisible:any}> = ({setVisible})=>{
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(menuRef.current)
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        console.log("hello")
        setVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setVisible]);


return( <div className="slideout-left relative z-40" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
{/*  <!--
   Background backdrop, show/hide based on slide-over state.

   Entering: "ease-in-out duration-500"
     From: "opacity-0"
     To: "opacity-100"
   Leaving: "ease-in-out duration-500"
     From: "opacity-100"
     To: "opacity-0"
 --> */}
 <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

 <div className="fixed inset-0 overflow-hidden">
   <div  className="absolute inset-0 overflow-hidden">
     <div   ref={menuRef} className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
       {/* <!--
         Slide-over panel, show/hide based on slide-over state.
         Entering: "transform transition ease-in-out duration-500 sm:duration-700"
           From: "translate-x-full"
           To: "translate-x-0"
         Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
           From: "translate-x-0"
           To: "translate-x-full"
       --> */}
       <div className="pointer-events-auto relative w-screen max-w-md">
        {/*  <!--
           Close button, show/hide based on slide-over state.
           Entering: "ease-in-out duration-500"
             From: "opacity-0"
             To: "opacity-100"
           Leaving: "ease-in-out duration-500"
             From: "opacity-100"
             To: "opacity-0"
         --> */}
         <div className="absolute right-4 top-0 -ml-8 flex pr-2 pt-4 sm:pr-4">
           <img src="https://tree.market/img/icons/treemarket-icon.png" className="w-[30px] mx-auto" />
         </div>
         <div className="flex h-full flex-col overflow-y-scroll scroller bg-gray-200 pt-6 shadow-xl rounded-r-xl">
           <div className="flex flex-wrap items-center justify-start gap-4 px-4 sm:px-6">
             <div onClick={()=>setVisible(false)} className="close-menu cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <g clip-path="url(#clip0_14988_18037)">
                   <path d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" fill="black"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_14988_18037">
                     <rect width="24" height="24" fill="white"/>
                   </clipPath>
                 </defs>
               </svg>
             </div>
             <h2 className="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">
               Tree.Market
             </h2>
           </div>
           <div className="relative flex flex-1 py-8 px-4 sm:px-6">
             {/* <!-- Your content -->  */}
             <div className="slideout-content grid gap-12 font-normal">

               <div className="menu-items grid gap-8">
                 <Link href="/place">
                 <div onClick={()=>setVisible(false)} className="menu-item relative flex items-center justify-start gap-4 cursor-pointer">
                   <div className="menu-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <g clip-path="url(#clip0_14988_30275)">
                         <path d="M10.0006 19.0002V14.0002H14.0006V19.0002C14.0006 19.5502 14.4506 20.0002 15.0006 20.0002H18.0006C18.5506 20.0002 19.0006 19.5502 19.0006 19.0002V12.0002H20.7006C21.1606 12.0002 21.3806 11.4302 21.0306 11.1302L12.6706 3.60021C12.2906 3.26021 11.7106 3.26021 11.3306 3.60021L2.97059 11.1302C2.63059 11.4302 2.84059 12.0002 3.30059 12.0002H5.00059V19.0002C5.00059 19.5502 5.45059 20.0002 6.00059 20.0002H9.00059C9.55059 20.0002 10.0006 19.5502 10.0006 19.0002Z" fill="black"/>
                       </g>
                       <defs>
                         <clipPath id="clip0_14988_30275">
                           <rect width="24" height="24" fill="white"/>
                         </clipPath>
                       </defs>
                     </svg>
                   </div>
                   <div className="menu-name leading-6 font-normal gap-2">
                     Home
                   </div>
                 </div>
                 </Link>

                 <div className="menu-item relative flex items-center justify-start gap-4 cursor-default text-gray-400">
                   <div className="menu-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <g clip-path="url(#clip0_14988_26924)">
                         <path d="M4.9991 6H18.9991C19.5491 6 19.9991 5.55 19.9991 5C19.9991 4.45 19.5491 4 18.9991 4H4.9991C4.4491 4 3.9991 4.45 3.9991 5C3.9991 5.55 4.4491 6 4.9991 6ZM20.1591 7.8C20.0691 7.34 19.6591 7 19.1791 7H4.8191C4.3391 7 3.9291 7.34 3.8391 7.8L2.8391 12.8C2.7191 13.42 3.1891 14 3.8191 14H3.9991V19C3.9991 19.55 4.4491 20 4.9991 20H12.9991C13.5491 20 13.9991 19.55 13.9991 19V14H17.9991V19C17.9991 19.55 18.4491 20 18.9991 20C19.5491 20 19.9991 19.55 19.9991 19V14H20.1791C20.8091 14 21.2791 13.42 21.1591 12.8L20.1591 7.8ZM11.9991 18H5.9991V14H11.9991V18Z" fill="#A8A29E"/>
                       </g>
                       <defs>
                         <clipPath id="clip0_14988_26924">
                           <rect width="24" height="24" fill="white"/>
                         </clipPath>
                       </defs>
                     </svg>
                   </div>
                   <div className="menu-name leading-6 font-normal gap-2">
                     Tree Marketplace
                   </div>
                 </div>

                 <div className="menu-item relative flex items-center justify-start gap-4 cursor-default text-gray-400">
                   <div className="menu-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <g clip-path="url(#clip0_14988_28965)">
                         <path d="M4 20H20C21.1 20 22 19.1 22 18C22 16.9 21.1 16 20 16H4C2.9 16 2 16.9 2 18C2 19.1 2.9 20 4 20ZM4 17H6V19H4V17ZM2 6C2 7.1 2.9 8 4 8H20C21.1 8 22 7.1 22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6ZM6 7H4V5H6V7ZM4 14H20C21.1 14 22 13.1 22 12C22 10.9 21.1 10 20 10H4C2.9 10 2 10.9 2 12C2 13.1 2.9 14 4 14ZM4 11H6V13H4V11Z" fill="#A8A29E"/>
                       </g>
                       <defs>
                         <clipPath id="clip0_14988_28965">
                           <rect width="24" height="24" fill="white"/>
                         </clipPath>
                       </defs>
                     </svg>
                   </div>
                   <div className="menu-name leading-6 font-normal gap-2">
                     Catalog
                   </div>
                 </div>

                 <div className="menu-item relative flex items-center justify-start gap-4 cursor-default text-gray-400">
                   <div className="menu-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <g clip-path="url(#clip0_14988_28399)">
                         <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM17 14H7C6.45 14 6 13.55 6 13C6 12.45 6.45 12 7 12H17C17.55 12 18 12.45 18 13C18 13.55 17.55 14 17 14ZM17 11H7C6.45 11 6 10.55 6 10C6 9.45 6.45 9 7 9H17C17.55 9 18 9.45 18 10C18 10.55 17.55 11 17 11ZM17 8H7C6.45 8 6 7.55 6 7C6 6.45 6.45 6 7 6H17C17.55 6 18 6.45 18 7C18 7.55 17.55 8 17 8Z" fill="#A8A29E"/>
                       </g>
                       <defs>
                         <clipPath id="clip0_14988_28399">
                           <rect width="24" height="24" fill="white"/>
                         </clipPath>
                       </defs>
                     </svg>
                   </div>
                   <div className="menu-name leading-6 font-normal gap-2">
                     Messaging
                   </div>
                 </div>

                 <Link href="/wallet"> 
          <div className="menu-item relative flex items-center justify-start gap-4 cursor-pointer">
            <div className="menu-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_14988_30289)">
                  <path d="M10 16V8C10 6.9 10.89 6 12 6H21V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V18H12C10.89 18 10 17.1 10 16ZM13 8C12.45 8 12 8.45 12 9V15C12 15.55 12.45 16 13 16H22V8H13ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_14988_30289">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="menu-name leading-6 font-normal gap-2 lg:hidden xl:block">
              Wallet
            </div>
          </div>
          </Link>
                <Link href="/vault">
                 <div className="menu-item relative flex items-center justify-start gap-4 cursor-pointer">
                   <div className="menu-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <g clip-path="url(#clip0_14988_16008)">
                         <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM17 20H7C6.45 20 6 19.55 6 19V11C6 10.45 6.45 10 7 10H17C17.55 10 18 10.45 18 11V19C18 19.55 17.55 20 17 20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" fill="black"/>
                       </g>
                       <defs>
                         <clipPath id="clip0_14988_16008">
                           <rect width="24" height="24" fill="white"/>
                         </clipPath>
                       </defs>
                     </svg>
                   </div>
                   <div className="menu-name leading-6 font-normal gap-2 lg:hidden xl:block">
                     Vault
                   </div>
                 </div>
                </Link>
                
                 <div className="menu-item relative flex items-center justify-start gap-4 cursor-default text-gray-400">
                   <div className="menu-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                       <path d="M11 7H7C6.45 7 6 6.55 6 6C6 5.45 6.45 5 7 5H11C11.55 5 12 5.45 12 6C12 6.55 11.55 7 11 7Z" fill="#A8A29E"/>
                       <path d="M11 10H7C6.45 10 6 9.55 6 9C6 8.45 6.45 8 7 8H11C11.55 8 12 8.45 12 9C12 9.55 11.55 10 11 10Z" fill="#A8A29E"/>
                       <path d="M16.5 1.5L15 0L13.5 1.5L12 0L10.5 1.5L9 0L7.5 1.5L6 0L4.5 1.5L3 0V14H1C0.45 14 0 14.45 0 15V17C0 18.66 1.34 20 3 20H15C16.66 20 18 18.66 18 17V0L16.5 1.5ZM12 18H3C2.45 18 2 17.55 2 17V16H5H9H12V18ZM16 17C16 17.55 15.55 18 15 18C14.45 18 14 17.55 14 17V15C14 14.45 13.55 14 13 14H11H9H5V3H16V17Z" fill="#A8A29E"/>
                       <path d="M14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5C13.4477 5 13 5.44772 13 6C13 6.55228 13.4477 7 14 7Z" fill="#A8A29E"/>
                       <path d="M14 10C14.5523 10 15 9.55228 15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9C13 9.55228 13.4477 10 14 10Z" fill="#A8A29E"/>
                     </svg>
                   </div>
                   <div className="menu-name leading-6 font-normal gap-2">
                     History
                   </div>
                 </div>
                <Link href="/profile">
                 <div className="menu-item relative flex items-center justify-start gap-4 cursor-default text-gray-400">
                   <div className="menu-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <g clip-path="url(#clip0_14988_22383)">
                         <path d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V17C20 14.34 14.67 13 12 13Z" fill="#A8A29E"/>
                       </g>
                       <defs>
                         <clipPath id="clip0_14988_22383">
                           <rect width="24" height="24" fill="white"/>
                         </clipPath>
                       </defs>
                     </svg>
                   </div>
                   <div className="menu-name leading-6 font-normal gap-2">
                     Profile
                   </div>
                 </div>
                 </Link>

                 <div className="menu-item relative flex items-center justify-start gap-4 cursor-default text-gray-400">
                   <div className="menu-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <g clip-path="url(#clip0_14988_28354)">
                         <path d="M19.4308 12.98C19.4708 12.66 19.5008 12.34 19.5008 12C19.5008 11.66 19.4708 11.34 19.4308 11.02L21.5408 9.37C21.7308 9.22 21.7808 8.95 21.6608 8.73L19.6608 5.27C19.5408 5.05 19.2708 4.97 19.0508 5.05L16.5608 6.05C16.0408 5.65 15.4808 5.32 14.8708 5.07L14.4908 2.42C14.4608 2.18 14.2508 2 14.0008 2H10.0008C9.75082 2 9.54082 2.18 9.51082 2.42L9.13082 5.07C8.52082 5.32 7.96082 5.66 7.44082 6.05L4.95082 5.05C4.72082 4.96 4.46082 5.05 4.34082 5.27L2.34082 8.73C2.21082 8.95 2.27082 9.22 2.46082 9.37L4.57082 11.02C4.53082 11.34 4.50082 11.67 4.50082 12C4.50082 12.33 4.53082 12.66 4.57082 12.98L2.46082 14.63C2.27082 14.78 2.22082 15.05 2.34082 15.27L4.34082 18.73C4.46082 18.95 4.73082 19.03 4.95082 18.95L7.44082 17.95C7.96082 18.35 8.52082 18.68 9.13082 18.93L9.51082 21.58C9.54082 21.82 9.75082 22 10.0008 22H14.0008C14.2508 22 14.4608 21.82 14.4908 21.58L14.8708 18.93C15.4808 18.68 16.0408 18.34 16.5608 17.95L19.0508 18.95C19.2808 19.04 19.5408 18.95 19.6608 18.73L21.6608 15.27C21.7808 15.05 21.7308 14.78 21.5408 14.63L19.4308 12.98ZM12.0008 15.5C10.0708 15.5 8.50082 13.93 8.50082 12C8.50082 10.07 10.0708 8.5 12.0008 8.5C13.9308 8.5 15.5008 10.07 15.5008 12C15.5008 13.93 13.9308 15.5 12.0008 15.5Z" fill="#A8A29E"/>
                       </g>
                       <defs>
                         <clipPath id="clip0_14988_28354">
                           <rect width="24" height="24" fill="white"/>
                         </clipPath>
                       </defs>
                     </svg>
                   </div>
                   <div className="menu-name leading-6 font-normal gap-2">
                     Settings
                   </div>
                 </div>

               </div>{/* <!-- menu-items --> */}

               <div className="links flex flex-col gap-8 text-gray-500 text-sm">
                 <p><a href="https://tree.market/privacy" target="_blank">Privacy</a></p>
                 <p><a href="https://discord.gg/5kfGBRF8EP" target="_blank">Feedback</a></p>
                 <p><a href="https://discord.gg/5kfGBRF8EP" target="_blank">Contact Us</a></p>
               </div>{/* <!-- links --> */}

             </div>{/* <!-- slideout-content --> */}
           </div>
           <div className="sticky bottom-0 bg-gray-200 shadow-inner">
             <div className="theme-switcher hidden flex items-center justify-between border-t border-b border-gray-300 px-4 py-2 min-h-[70px]">
               <div className="text-sm sm:text-base font-medium">Theme</div>
               <label className="inline-flex items-center cursor-pointer">
                 <input type="checkbox" value="" className="sr-only peer" />
                 <div className="relative w-[3.75rem] h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-gray-400 dark:peer-focus:ring-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-['\263E'] peer-checked:after:content-['\2600'] after:text-center after:absolute after:top-[2px] after:start-[2px] after:bg-green-100 after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-800"></div>
               </label>
             </div>{/* <!-- theme-switcher --> */}
             <div className="currency-switcher flex items-center justify-between px-4 py-2 gap-4 min-h-[70px]">
               <div className="text-sm sm:text-base font-medium">Display Currency</div>
               <div className="currency-select relative flex items-center justify-end gap-3 cursor-pointer">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M23.9783 11.9969C23.9783 18.5916 18.6326 23.9372 12.038 23.9372C5.44357 23.9372 0.0976562 18.5916 0.0976562 11.9969C0.0976562 5.40243 5.44357 0.0566406 12.038 0.0566406C18.6326 0.0566406 23.9783 5.40243 23.9783 11.9969Z" fill="#1BA27A"/>
                   <path d="M17.6422 6.07764H6.33594V8.80719H10.6243V12.8191H13.3538V8.80719H17.6422V6.07764Z" fill="white"/>
                   <path d="M12.0144 13.2466C8.46695 13.2466 5.59089 12.6851 5.59089 11.9925C5.59089 11.2999 8.46683 10.7384 12.0144 10.7384C15.5619 10.7384 18.4378 11.2999 18.4378 11.9925C18.4378 12.6851 15.5619 13.2466 12.0144 13.2466ZM19.227 12.2015C19.227 11.3084 15.9978 10.5845 12.0144 10.5845C8.03113 10.5845 4.80176 11.3084 4.80176 12.2015C4.80176 12.9881 7.30576 13.6433 10.6238 13.7885V19.5478H13.3532V13.7908C16.6968 13.6501 19.227 12.9921 19.227 12.2015Z" fill="white"/>
                 </svg>
                 <div className="crypto-select relative rounded-sm ring-0 flex items-center gap-2 py-2">
                   <div>USDT</div>
                   <div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                       <path d="M5.11973 6.29006L8.99973 10.1701L12.8797 6.29006C13.2697 5.90006 13.8997 5.90006 14.2897 6.29006C14.6797 6.68006 14.6797 7.31006 14.2897 7.70006L9.69973 12.2901C9.30973 12.6801 8.67973 12.6801 8.28973 12.2901L3.69973 7.70006C3.30973 7.31006 3.30973 6.68006 3.69973 6.29006C4.08973 5.91006 4.72973 5.90006 5.11973 6.29006Z" fill="#1C1917"/>
                     </svg>
                   </div>
                 </div>{/* <!-- crypto-select --> */}
               </div>{/* <!-- currency-select --> */}
             </div>{/* <!-- currency-switcher --> */}
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>)
}

export default MenuLeftSlideout