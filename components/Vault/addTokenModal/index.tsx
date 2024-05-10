"use client"
import { useWalletContext } from "@/contexts"
import { wallet } from "@/types"
import { useState } from "react"
import getToken from "@/API/getTokenData"

const AddTokenModal:React.FC<{setShow:any}> = ({setShow})=>{
    const {activeWallet,setActiveWallet,walletList,setWalletList} = useWalletContext()
    const [scid,setSCID] = useState("")

    const handleChangeSCID = (event:any)=>{
        setSCID(event.target.value)
    }

    const handleAddToken = async()=>{
      setShow(false)
      let token = await getToken(scid)
      if(typeof token === 'string'){
        return
      }
        let newWallet = activeWallet
        let newList = [...walletList]
        let index = walletList.findIndex(wallet=>wallet.address==activeWallet?.address)
        //TO-DO: get token name
        newWallet?.balances?.push(token)
        setActiveWallet(newWallet)
        if(newWallet){
          newList[index] = newWallet
          setWalletList(newList)
          let storedWalletString = localStorage.getItem(`wallet-${newWallet.name}`)
          if(storedWalletString){
            let storedWallet = JSON.parse(storedWalletString)
            storedWallet.balances.push(token)
            localStorage.setItem(`wallet-${newWallet.name}`,JSON.stringify(storedWallet))
          }


        }
        

    }
    return(
        <dialog open id="my_modal_newtoken" className="z-50 modal w-full h-full overflow-y-scroll bg-gray-300 bg-opacity-50 flex items-center">
        <div className="modal-box relative pb-4 max-h-screen overflow-y-scroll bg-gray-100 rounded-lg ring-1 ring-gray-300 w-11/12 mx-auto max-w-screen-sm shadow-md shadow-gray-400">

      <div className="modal-action">
        <div>
          <button onClick={()=>setShow(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
      </div>{/* <!-- modal-action close --> */}

      <div className="modal_content grid gap-4 p-4 md:p-6">

        <h3 className="font-bold text-lg">Add Token</h3>
        <div className="bg-blue-50 text-blue-400 text-sm px-2 py-2 shadow-sm shadow-gray-400 rounded-sm">Enter the SCID for the Dero asset you would like to diaplay.</div>

        <div className="input-walletpass relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
          <label htmlFor="newtoken" className="text-sm font-semibold px-2">Token SCID</label>
          <input onChange={handleChangeSCID} value={scid} type="text" name="newtoken" id="newtoken" placeholder="e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
        </div>{/* <!-- input-walletpass --> */}

      </div>{/* <!-- modal_content --> */}

      <div className="add-wallet px-4 pb-4 md:px-6 md:pb-6 float-start">
        <div onClick={handleAddToken} className="bg-cyan-800 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">Add to Wallet
      </div>
</div>
    </div>{/* <!-- modal-box --> */}
  </dialog>
    )
}

export default AddTokenModal