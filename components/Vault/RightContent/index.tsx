"use client"

import LeafPromoBox from "@/components/Common/LeafPromotionBox"
import ConnectionInfo from "@/components/Wallet/ConnectionInfo"
import ConnectedWallets from "../ConnectedWallets"

const RightContent:React.FC<{setShowEnterPassModal:any}> = ({setShowEnterPassModal})=>{
    return(
        <div className="content-inner grid gap-6 mb-[70px]">

            <div className="hidden right-col-container relative flex flex-col gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-gray-400">
              {/* <!-- COMPONENT wallet connection info --> */}
              <ConnectionInfo/>
            </div>{/* <!-- right-col-container connection --> */}

            {/* <!-- COMPONENT Connected Wallets --> */}
            <div className="integrated-wallets relative grid gap-4 bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">     
                    <h3 className="font-semibold">Connected Wallets</h3>
                    <div className="dero-wallet grid gap-4">
                    <ConnectedWallets setShowEnterPassModal={setShowEnterPassModal}/>
                        </div>
                    </div>
           
            {/* <!-- connected-wallets --> */}

            {/* <!-- COMPONENT Promotion --> */}
            <LeafPromoBox/>
            {/* <!-- promo-container donate --> */}

          </div>
    )
}

export default RightContent