"use client"
import { useWalletContext } from "@/contexts"
import { useState } from "react"
import { useOpenWallet } from "@/hooks/useOpenWallet"
import { useInitializeWorker } from "@/hooks/useInitializeWorker"

const EnterPasswordModal:React.FC<{show:boolean,setShow:any}> = ({show,setShow})=>{
    const {worker,setWorker,activeWallet,walletList,setWalletList}=useWalletContext()
    const openWallet = useOpenWallet()
    const initializeWorker = useInitializeWorker()
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const handleChange = (event:any)=>{
        setPassword(event.target.value)
    }
    const handleOpenWallet=async()=>{
      
      let newWorker:Worker
        if(!worker){
          newWorker = await initializeWorker()
         setWorker(newWorker)
        }else{
          newWorker = worker
        }
        let open = await openWallet(newWorker,activeWallet,password)
        if(open.err){
          setError(open.err)
        }else if(open){
          let newList = [...walletList]
        let index = newList.findIndex(x=>x.address==activeWallet?.address)
        newList[index].open = true
        setWalletList(newList)
        setShow(false)
        }else{
          return
        }
        
    }
    return(<>
        {show&&<dialog open id="my_modal_password" className="z-50 modal w-full h-full overflow-y-scroll bg-gray-300 bg-opacity-50 flex items-center">
    <div className="modal-box relative pb-4 max-h-screen overflow-y-scroll bg-gray-100 rounded-lg ring-1 ring-gray-300 w-11/12 mx-auto max-w-screen-sm shadow-md shadow-gray-400">

      <div className="modal-action">
        <form>
          <button onClick={()=>setShow(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
      </div>{/* <!-- modal-action close --> */}

      <div className="modal_content grid gap-4 p-4 md:p-6">

        <h3 className="font-bold text-lg">Open Wallet</h3>
        <div className="bg-blue-50 text-blue-400 px-2 py-2 shadow-sm shadow-gray-400 rounded-sm">{activeWallet?.name}</div>

        <div className="input-walletpass relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
          <label htmlFor="password" className="text-sm font-semibold px-2">Password</label>
          <input onChange={handleChange} value={password} type="password" name="password" id="password" placeholder="Enter your wallet password" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
        </div>{/* <!-- input-walletpass --> */}

      
      {error&&<div className="notification info flex items-center justify-between bg-red-100 px-3 py-2 rounded-sm gap-2 shadow-sm shadow-gray-400">
          <div className="flex items-start gap-2">
            <div className="pt-1 px-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_9997_251531)">
                  <path d="M2.73001 21.0001H21.26C22.03 21.0001 22.51 20.1701 22.13 19.5001L12.86 3.50006C12.47 2.83006 11.51 2.83006 11.13 3.50006L1.86001 19.5001C1.48001 20.1701 1.96001 21.0001 2.73001 21.0001ZM13 18.0001H11V16.0001H13V18.0001ZM12 14.0001C11.45 14.0001 11 13.5501 11 13.0001V11.0001C11 10.4501 11.45 10.0001 12 10.0001C12.55 10.0001 13 10.4501 13 11.0001V13.0001C13 13.5501 12.55 14.0001 12 14.0001Z" fill="#dc2626"/>
                </g>
                <defs>
                  <clipPath id="clip0_9997_251531">
                    <rect width="24" height="24" fill="#dc2626"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-sm">
              <p className="font-semibold">Error</p>                    
              <p>{error}</p>
            </div>
          </div>
        </div>}
</div>{/* <!-- modal_content --> */}
      <div className="add-wallet px-4 pb-4 md:px-6 md:pb-6 float-start">
        <div onClick={handleOpenWallet} className="bg-cyan-800 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">Open Wallet
      </div>
</div>
    </div>{/* <!-- modal-box --> */}
  </dialog>}
  </>
    )
}

export default EnterPasswordModal