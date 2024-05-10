"use client"
import { useWalletContext } from "@/contexts"
import copyToClipboard from "@/utils/copyToClipboard"
import Toaster,{ToasterRef} from "@/components/Place/Toaster"
import { useRef } from "react"

const ActiveWalletBox:React.FC<{toasterRef:any}> = ({toasterRef})=>{
    const {activeWallet} = useWalletContext()
    
    const handleCopyAddress = ()=>{
     copyToClipboard(activeWallet?.address)
     toasterRef.current?.addMessage("Address Copied to Clipboard")
      
    }
    return(
        <>
              {/* <!-- COMPONENT wallet address --> */}
              <div className="address flex justify-between items-center gap-4">
              <div className="flex flex-wrap items-end gap-2">
                  <h3 className="font-semibold">Active Wallet</h3> 
                  <div>[{activeWallet?.name||"Select a wallet"}]</div>
                </div>
                {activeWallet?.open && activeWallet?.address&&<div onClick={handleCopyAddress} className="hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-full p-1 icon cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_14964_31829)">
                      <path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" fill="#44403C"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_14964_31829">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>}
              </div>{/* <!-- address --> */}
              <div className="break-all text-sm text-gray-700">
                {activeWallet?.open && activeWallet?.address}
              </div>
              
            </>
    )
}

export default ActiveWalletBox