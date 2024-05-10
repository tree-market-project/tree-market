"use client"

import LeafPromoBox from "@/components/Common/LeafPromotionBox"
import DownloadLinks from "../DownloadLinks"
import Systems from "../Systems"
import ConnectionInfo from "../ConnectionInfo"
import ActiveWalletBox from "../ActiveWalletBox"
import { useWalletContext } from "@/contexts"
import getWalletAppData from "@/utils/getWallAppData"
import { WalletApp } from "@/types"

const RightContent:React.FC<{toasterRef:any,app:string|null}> = ({toasterRef,app})=>{
  const {activeWallet} = useWalletContext()
  const walletApp:WalletApp|null = getWalletAppData(app)
    return(
        <div className="content-inner grid gap-6 mb-[70px]">

        <div className="heading text-xl font-bold py-2">
          <h2>{walletApp?.name||"Select a wallet"}</h2>
        </div>
        {activeWallet&&<div className="right-col-container relative flex flex-col gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-gray-400">
        <ConnectionInfo/>
        </div>}
        {/* <!-- right-col-container connection --> */}
        {activeWallet?.address&&<div className="right-col-container flex flex-col gap-3 bg-blue-50 rounded-2xl p-4 shadow-sm shadow-gray-400">
              <ActiveWalletBox toasterRef={toasterRef}/>
            </div>}{/* <!-- right-col-container address --> */}

         {/*  <!-- COMPONENT wallet systems info --> */}
         {activeWallet?.app&&<div className="right-col-container flex flex-col gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-gray-400">
          <Systems app={app}/>{/* <!-- systems --> */}
          </div>}
       {/* <!-- right-col-container systems --> */}
       {walletApp?.downloads&&<div className="right-col-container flex flex-col gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-gray-400">
        <DownloadLinks app={app}/>
        </div>}
        {/* <!-- right-col-container download-links --> */}

        

              
              <LeafPromoBox/>
              {/* <!-- promo-container donate --> */}
              

    </div>
    )
}

export default RightContent