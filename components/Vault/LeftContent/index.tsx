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