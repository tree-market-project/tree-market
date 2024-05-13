"use client"
import { useCheckoutContext } from "@/contexts/CheckoutContext"
import MenuLeftSlideout from "../MenuLeftSlideout"
import { useState } from "react"

const DappHeader:React.FC<{headerText:string}> = ({headerText})=>{
  const {checkoutStep,setCheckoutStep} = useCheckoutContext()
  const [menuVisible,setMenuVisible] = useState(false)
    return(
        <div className="dapp-header relative grid grid-flow-col h-[64px] px-2 sm:px-4 shadow-md">
    <div className="header-left justify-self-start grid grid-flow-col items-center">
{menuVisible&& <MenuLeftSlideout setVisible={setMenuVisible}/>}
     {
     headerText == "Wallet"?
     <>
     <div onClick={()=>setMenuVisible(true)} className="menu-icon px-4 py-2 cursor-pointer justify-self-start text-4xl lg:hidden">&#8801;</div>
       <div className="menu-icon px-4 py-2 cursor-pointer justify-self-start text-4xl hidden lg:block">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
           <g clip-path="url(#clip0_14988_30289)">
           <path d="M10 16V8C10 6.9 10.89 6 12 6H21V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V18H12C10.89 18 10 17.1 10 16ZM13 8C12.45 8 12 8.45 12 9V15C12 15.55 12.45 16 13 16H22V8H13ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" fill="#4b5563"/>
           </g>
           <defs>
           <clipPath id="clip0_14988_30289">
             <rect width="24" height="24" fill="white"/>
           </clipPath>
           </defs>
         </svg>
       </div>
       </>
    :headerText=="Profile"?
    <>
    <div className="menu-icon px-4 py-2 cursor-pointer justify-self-start text-4xl lg:hidden">&#8801;</div>
        <div className="menu-icon px-4 py-2 cursor-pointer justify-self-start text-4xl hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_14988_22383)">
              <path d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V17C20 14.34 14.67 13 12 13Z" fill="#4b5563"/>
            </g>
            <defs>
              <clipPath id="clip0_14988_22383">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
    </>
    :headerText=="Vault"?
  <>
  <div onClick={()=>setMenuVisible(true)} className="menu-icon px-4 py-2 cursor-pointer justify-self-start text-4xl lg:hidden">&#8801;</div>
  <div className="menu-icon px-4 py-2 cursor-pointer justify-self-start text-4xl hidden lg:block">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_14988_16008)">
        <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM17 20H7C6.45 20 6 19.55 6 19V11C6 10.45 6.45 10 7 10H17C17.55 10 18 10.45 18 11V19C18 19.55 17.55 20 17 20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" fill="#4b5563"/>
      </g>
      <defs>
        <clipPath id="clip0_14988_16008">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </div>
</>
     :checkoutStep==0?
     <div onClick={()=>setMenuVisible(true)} className="menu-icon px-4 py-2 cursor-pointer justify-self-start text-4xl lg:hidden">&#8801;</div> 
     :
     <div onClick={()=>setCheckoutStep(Math.max(checkoutStep-1,0))} className="menu-icon px-4 py-2 cursor-pointer justify-self-start text-4xl lg:hidden"><img src="https://tree.market/img/icons/chevron-left-icon.png" className="w-[24px]" /></div>}

      <div className="user-names justify-self-start">
        <div className="profile-name font-semibold text-sm">{headerText} <span className="text-sm text-gray-600 font-light">alpha</span></div>
      </div>{/* <!-- user-names --> */}
    </div>{/* <!-- header-left --> */}
    {headerText=="Vault"?""
    :headerText=="Wallet"?""
    :
      <div className="header-right grid justify-self-end items-center text-center">
     { checkoutStep==0?<div className="px-2 cursor-pointer lg:hidden">
        <img src="https://tree.market/img/icons/treemarket-icon.png" className="w-[30px] mx-auto" />
      </div>:""}
      <div className={`px-4 cursor-default text-sm font-medium py-1 rounded-lg ${checkoutStep==0?"hidden lg:block bg-[#a0b4cf40] text-cyan-900":checkoutStep==1?"text-cyan-900 bg-[#a0b4cf40]":checkoutStep==2?"text-cyan-900 bg-[#a0b4cf40]":checkoutStep==3?"text-green-900 bg-green-100":""}`}>
        {
        checkoutStep==0?
        "Marketplace"
      :checkoutStep==1?
    "Check Out"
    :checkoutStep==2?
    "Awaiting"
  :checkoutStep==3?
  "Done"
  :""
}
      </div>
    </div>}{/* <!-- header-right --> */}
  </div>
    )
}
export default DappHeader