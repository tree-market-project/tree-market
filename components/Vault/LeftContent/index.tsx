"use client"

import LeafPromoBox from "@/components/Common/LeafPromotionBox"
import ActiveWalletBox from "@/components/Wallet/ActiveWalletBox"
import ConnectionInfo from "@/components/Wallet/ConnectionInfo"
import Tokens from "../Tokens"
import { useWalletContext } from "@/contexts"
import ConnectedWallets from "../ConnectedWallets"

const LeftContent:React.FC<{toasterRef:any,setShowEnterPassModal:any,setShowVault:any,setShowAddTokenModal:any,setShowTokenSlideout:any}> = ({toasterRef,setShowEnterPassModal,setShowVault,setShowAddTokenModal,setShowTokenSlideout})=>{
  const {activeWallet} = useWalletContext()
    return(
        <div className="wallet-content">
          {/* <!-- COMPONENT Content Container --> */}
          <div className="clear-both h-8"></div>
          <div className="content-container relative mx-auto w-full px-5 sm:px-6">
            <div className="item-contents flex flex-col gap-6">
              <div className="content-title flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold">
                  My Assets
                </h3>
                </div>
                
                <div onClick={()=>setShowVault(false)} className="flex items-center justify-center gap-2 px-3 py-1 rounded-md ring-1 shadow-sm shadow-gray-400  bg-green-100 ring-gray-600 cursor-pointer hover:shadow-inner hover:shadow-gray-400">
                  <div className="icon">
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
                  <div className="font-medium">Wallet</div>
                </div>
              </div>{/* <!-- content-title --> */}
              
              <div className="description relative">
                <p>View your private assets held in your Dero wallet.</p>
              </div>{/* <!-- description --> */}

              <div className="how-to grid gap-4">

               {/*  <!-- COMPONENT Notification.active wallet --> */}
                <div className="notification active-wallet grid gap-2 bg-blue-50 px-4 py-2 rounded-lg shadow-sm shadow-gray-400">
                  <ActiveWalletBox toasterRef={toasterRef}/>
                </div>{/* <!-- notification --> */}

                <div className="content-section relative grid gap-8">

                 {/*  <!-- COMPONENT Coins/Tokens --> */}
                <Tokens setShowVault={setShowVault} setShowTokenSlideout={setShowTokenSlideout} setShowAddTokenModal={setShowAddTokenModal}/>
                  {/* <!-- coins-tokens --> */}
                  <div className="connected-wallets relative grid gap-4 bg-white w-full mx-auto rounded-lg p-4 shoadow-sm shadow-gray-400 lg:hidden">
                    <h3 className="font-semibold">Connected Wallets</h3>
                    <ConnectedWallets setShowEnterPassModal={setShowEnterPassModal}/>
                  </div>
                
                    {/*  <ConnectionInfo/>  */}
                    
                
                 
                 {/* <!-- container connection --> */}

                  {/* <!-- COMPONENT Promotion --> */}
                  <div className="lg:hidden">
                    <LeafPromoBox/>
                  </div>
                  

                </div>{/* <!-- content-section --> */}
              </div>{/* <!-- how-to --> */}

            </div>{/* <!-- item-contents --> */}
          </div>{/* <!-- content-container --> */}
        </div>
    )
}

export default LeftContent