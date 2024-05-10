"use client"

import { useWalletContext } from "@/contexts"
import useCloseWallet from "@/hooks/useCloseWallet"
import { useState } from "react"

const RenameWalletModal:React.FC<{show:boolean,setShow:any}>=({show,setShow})=>{
    const {activeWallet,setActiveWallet,walletList,setWalletList} = useWalletContext()
    const [name,setName] = useState("")

    const handleNameChange = (event:any)=>{
        setName(event?.target.value)
    }

    const handleRename = ()=>{
        if(!activeWallet?.address){
            return
        }

        let newWallet = activeWallet
        let newList = [...walletList]
        newList = newList.filter(wallet=>wallet.address!=activeWallet.address)
        localStorage.removeItem(`wallet-${activeWallet.name}`)
        newWallet.name = name
        newWallet.open=false
        newList.push(newWallet)
        setActiveWallet(newWallet)
        setWalletList(newList)
        localStorage.setItem(`wallet-${newWallet.name}`,JSON.stringify(newWallet))
        setShow(false)
        


    }
return(
    <dialog open id="my_modal_rename" className="z-50 modal w-full h-full overflow-y-scroll bg-gray-300 bg-opacity-50 flex items-center">
    <div className="modal-box relative pb-4 max-h-screen overflow-y-scroll bg-gray-100 rounded-lg ring-1 ring-gray-300 w-11/12 mx-auto max-w-screen-sm shadow-md shadow-gray-400">

      <div className="modal-action">
        <div>
          <button onClick={()=>setShow(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
      </div>{/* <!-- modal-action close --> */}

      <div className="modal_content grid gap-4 p-4 md:p-6">

        <h3 className="font-bold text-lg">Rename Wallet</h3>
        <div className="px-2 py-2 font-semibold border-l-4 border-cyan-800">Change the name of the wallet file</div>

        <div className="input-walletpass relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
          <label htmlFor="hexseed" className="text-sm font-semibold px-2">New Wallet Name</label>
          <input value={name} onChange={handleNameChange} type="text" name="hexseed" id="hexseed" placeholder="current_wallet_name" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
        </div>{/* <!-- input-walletpass --> */}

      </div>{/* <!-- modal_content --> */}

      <div className="rename-wallet px-4 pb-4 md:px-6 md:pb-6 float-start">
        <div onClick={handleRename} className="flex gap-2 items-center bg-cyan-800 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
              <path d="M5.99989 10.1701L2.52989 6.70007C2.13989 6.31007 1.50989 6.31007 1.11989 6.70007C0.729893 7.09007 0.729893 7.72007 1.11989 8.11007L5.29989 12.2901C5.68989 12.6801 6.31989 12.6801 6.70989 12.2901L17.2899 1.71007C17.6799 1.32007 17.6799 0.690068 17.2899 0.300068C16.8999 -0.0899316 16.2699 -0.0899316 15.8799 0.300068L5.99989 10.1701Z" fill="white"/>
            </svg>
          </div>
          <div>Rename</div>
        </div>
</div>
    </div>{/* <!-- modal-box --> */}
  </dialog>
)
}

export default RenameWalletModal