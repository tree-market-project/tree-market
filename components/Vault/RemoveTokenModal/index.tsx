"use client"

import { useWalletContext,useVaultContext } from "@/contexts"
import { wallet } from "@/types"


const RemoveTokenModal:React.FC<{setShow:any}>=({setShow})=>{

    const {activeWallet,walletList,setActiveWallet,setWalletList} = useWalletContext()
    const {selectedToken} = useVaultContext()

    const handleRemoveToken = ()=>{
        if(!activeWallet){
            return
          }
        let newTokenList = JSON.parse(JSON.stringify(activeWallet?.balances))
      newTokenList = newTokenList.filter((token:any)=>token.scid!=selectedToken?.scid)
      let newWallet:wallet = activeWallet
      newWallet.balances = newTokenList
      let newWalletList = walletList.filter((wallet:wallet)=>wallet.name!=activeWallet.name||wallet.address!=activeWallet.address)
      newWalletList.push(newWallet)
      setWalletList(newWalletList)
      setActiveWallet({...activeWallet,balances:newTokenList})
      setShow(false)
    }
return (
<dialog open id="my_modal_removetoken" className="z-50 modal bg-gray-100 rounded-lg ring-1 ring-gray-300 w-11/12 mx-auto max-w-screen-sm shadow-md shadow-gray-400">
    <div className="modal-box relative pb-4">

      <div className="close">
        <div>
          <button onClick={()=>setShow(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
      </div>{/* <!-- modal-action close --> */}

      <div className="modal_content grid gap-4 p-4 md:p-6">

        <h3 className="font-bold text-lg">Remove Token</h3>
        <div className="px-2 py-2 font-medium border-l-4 border-red-600">
          <p className="font-semibold">You are about to remove this token from this browser.</p>
          <p className="text-sm">It will not be removed from your wallet, and you can add it back at any time.</p>
        </div>

      </div>{/* <!-- modal_content --> */}

      <div className="remove-token px-4 pb-4 md:px-6 md:pb-6 float-start">
        <div onClick={handleRemoveToken} className="flex gap-2 items-center bg-cyan-800 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_9997_252389)">
                <path d="M16 16H18C18.55 16 19 16.45 19 17C19 17.55 18.55 18 18 18H16C15.45 18 15 17.55 15 17C15 16.45 15.45 16 16 16ZM16 8H21C21.55 8 22 8.45 22 9C22 9.55 21.55 10 21 10H16C15.45 10 15 9.55 15 9C15 8.45 15.45 8 16 8ZM16 12H20C20.55 12 21 12.45 21 13C21 13.55 20.55 14 20 14H16C15.45 14 15 13.55 15 13C15 12.45 15.45 12 16 12ZM3 18C3 19.1 3.9 20 5 20H11C12.1 20 13 19.1 13 18V8H3V18ZM13 5H11L10.29 4.29C10.11 4.11 9.85 4 9.59 4H6.41C6.15 4 5.89 4.11 5.71 4.29L5 5H3C2.45 5 2 5.45 2 6C2 6.55 2.45 7 3 7H13C13.55 7 14 6.55 14 6C14 5.45 13.55 5 13 5Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_9997_252389">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>Confirm</div>
        </div>
      </div>
    </div>{/* <!-- modal-box --> */}
  </dialog>
  )}

  export default RemoveTokenModal