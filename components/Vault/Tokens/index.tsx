"use client"

import { useWalletContext,useVaultContext } from "@/contexts"
import { useGetBalance } from "@/hooks/useGetBalance"
import { useInitializeWorker } from "@/hooks/useInitializeWorker"
import { balance } from "@/types"
import { useEffect, useState } from "react"
import formatBalance from "@/utils/formatBalance"
import Link from "next/link"

const Tokens:React.FC<{setShowVault:any,setShowAddTokenModal:any,setShowTokenSlideout:any}> = ({setShowVault,setShowAddTokenModal,setShowTokenSlideout})=>{
    const {activeWallet,setActiveWallet,worker,setWorker} = useWalletContext()
    const {setSelectedToken} = useVaultContext()
    const getBalance = useGetBalance()
    const initializeWorker = useInitializeWorker()
    const [loading,setLoading] = useState(false)

   /*  useEffect(()=>{
        if(activeWallet?.open){
          setTimeout(()=>{
            handleGetBalance()
          },2000)
          
        }
        
    },[worker,activeWallet?.open]) */

    const handleGetBalance = async () => {
      setLoading(true)
      let newWorker
      if(activeWallet?.app=="web"){
      if (!worker) {
        newWorker = await initializeWorker();
        setWorker(newWorker);
      } else {
        newWorker = worker;
      }
      }
      
    
     
    
      if (!activeWallet?.balances) {
        return;
      }
    
      let newWallet = { ...activeWallet }; // Create a shallow copy of activeWallet
    
      for (let token of activeWallet.balances) {
        let balance = await getBalance(token.scid,newWorker||null);
        token.balance = balance;
        console.log(token);
    
        // Update newWallet with the updated balance for the current token
        newWallet.balances = newWallet.balances.map((t) =>
          t.scid === token.scid ? { ...t, balance } : t
        );
    
        // Update the activeWallet state after each balance is updated
        //setActiveWallet(newWallet);
      }
      setActiveWallet(newWallet);
      console.log(newWallet.balances)
      setLoading(false)
      
    };
    
    
       
    

    const handleSelectToken = (token:balance)=>{
        setShowTokenSlideout(true)
        setSelectedToken(token)
    }

   
   

    return(
        <div className="coins-tokens relative grid gap-4 bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">
            <div className="flex items-center justify-between gap-4">     
                    <h3 className="font-semibold">Tokens</h3>
                    {activeWallet?.open&&<div onClick={handleGetBalance} className={`refresh cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-full p-1${loading?" animate-spin":""}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <g clip-path="url(#clip0_9997_254553)">
                            <path d="M17.65 6.34999C16.02 4.71999 13.71 3.77999 11.17 4.03999C7.50002 4.40999 4.48002 7.38999 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.43999 8.26002 5.99999 12 5.99999C13.66 5.99999 15.14 6.68999 16.22 7.77999L14.71 9.28999C14.08 9.91999 14.52 11 15.41 11H19C19.55 11 20 10.55 20 9.99999V6.40999C20 5.51999 18.92 5.06999 18.29 5.69999L17.65 6.34999Z" fill="#111827"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_9997_254553">
                              <rect width="24" height="24" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>}
                      </div>
                    <div className="dero-wallet grid gap-4">

                    {activeWallet?.open&&activeWallet?.balances?.map((balance,index)=>
                    <div onClick={()=>handleSelectToken(balance)} key={index} className="single-item relative flex items-center justify-between gap-4 px-3 py-3 ring-1 ring-gray-200 mx-auto w-full rounded-lg bg-gray-100 hover:bg-gray-200 leading-tight cursor-pointer">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="icon">
                            {balance.scid=="e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4"?<>🌿</>

                :<img src={balance.iconURL} className="w-[20px]" />}
                          </div>{/* <!-- icon --> */}
                          <div className="font-medium">{balance.symbol}</div>
                        </div>
                        
                        <div className="flex gap-2 items-center">
                          <div className={`font-semibold ${loading?"animate-pulse":""}`}>
                            {formatBalance(balance)}</div>
                        </div>
                      </div>
                    )}

                    {!activeWallet?.open&&
                     /* <!-- COMPONENT Notification.not connected --> */
                     <div className="notification connect flex items-center border-2 border-gray-200 bg-amber-50 px-3 py-1 rounded-sm gap-2">
                       <div className="px-1">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                           <g clip-path="url(#clip0_14775_469299)">
                           <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z" fill="#94A3B8"/>
                           </g>
                           <defs>
                           <clipPath id="clip0_14775_469299">
                           <rect width="24" height="24" fill="white"/>
                           </clipPath>
                           </defs>
                         </svg>
                       </div>
                       <div className="text-sm">                        
                         <p>Wallet not detected. <Link className={"underline"} href="/wallet">Connect a wallet</Link> to view your Dero assets.</p>
                       </div>
                     </div>/* <!-- notification --> */
                    }

                      

                      

                      <div className="clear-both"></div>

                      <div className="buttons flex w-full items-center justify-end gap-4">
                        
                      {activeWallet?.open&&<div className="action-button">
                        <button onClick={()=>setShowAddTokenModal(true)} className="add-wallet flex items-center gap-2 ring-1 ring-gray-900 px-4 py-2 rounded-md text-center text-sm cursor-pointer shadow-sm shadow-gray-400 hover:shadow-inner hover:shadow-gray-400">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M10 5C9.45 5 9 5.45 9 6V9H6C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11H9V14C9 14.55 9.45 15 10 15C10.55 15 11 14.55 11 14V11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H11V6C11 5.45 10.55 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#111827"/>
                            </svg>
                          </div>
                          <div>Add Token</div>
                        </button>
                      </div>}{/* <!-- add-wallet --> */}

                      </div>{/* <!-- buttons --> */}

                    </div>{/* <!-- dero-wallet --> */}
                  </div>
    )
}

export default Tokens