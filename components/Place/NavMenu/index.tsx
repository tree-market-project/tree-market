"use client"
import Slideout from "../Slideout"
import ThemeSwitcher from "../ThemeSwitcher"
import CurrencySwitcher from "../CurrencySwitcher"

const NavMenu = ()=>{
    return(
        <div className="nav-menu hidden lg:flex flex-col justify-stretch content-stretch h-dvh w-[240px] lg:w-[90px] xl:w-1/6">
  <div className="flex h-full flex-col overflow-y-scroll scroller bg-gray-200 pt-6 shadow-xl">
    <div className="flex flex-wrap items-center justify-start gap-4 mx-auto xl:mx-0 xl:mx- xl:px-6">
      <div className="hidden lg:block">
        <img src="https://tree.market/img/icons/treemarket-icon.png" className="w-[24px] mx-auto" />
      </div>
      <div className="close-menu cursor-pointer hidden">
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
      <h2 className="text-base font-semibold leading-6 hidden xl:block" id="slide-over-title">
        Tree.Market
      </h2>
    </div>
    <div className="relative flex flex-1 py-8 px-4 sm:px-6 lg:mx-auto xl:mx-0">
      {/* <!-- Your content -->  */}
      <Slideout/>
      {/* <!-- slideout-content --> */}
    </div>
    <div className="sticky bottom-0 bg-gray-200 shadow-inner">
        <ThemeSwitcher/>
      {/* <!-- theme-switcher --> */}
      <CurrencySwitcher/>
     {/* <!-- currency-switcher --> */}
    </div>{/* <!-- sticky --> */}
  </div>  
</div>
    )
}

export default NavMenu