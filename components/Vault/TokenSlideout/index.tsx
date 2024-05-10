"use client"

import { useVaultContext,useWalletContext } from "@/contexts"
import formatBalance from "@/utils/formatBalance"
import { useTransfer } from "@/hooks/useTransfer"
import { useState } from "react"
import { useGetBalance } from "@/hooks/useGetBalance"
import copyToClipboard from "@/utils/copyToClipboard"
import { wallet } from "@/types"

const TokenSlideout:React.FC<{toasterRef:any,setShowRemoveTokenModal:any,setShowTransfer:any,setShow:any}> = ({toasterRef,setShowRemoveTokenModal,setShowTransfer,setShow})=>{
    const {selectedToken,setSelectedToken} = useVaultContext()
    const {worker,activeWallet,setActiveWallet,walletList,setWalletList} = useWalletContext()
    const transfer = useTransfer()
    const getBalance = useGetBalance()
    const [loading,setLoading] = useState(false)

    const handleCopySCID = () =>{
      copyToClipboard(selectedToken?.scid)
      toasterRef.current?.addMessage("SCID Copied to Clipboard")
    }

    const handleRemoveToken = () =>{
      if(!activeWallet){
        return
      }
      setShowRemoveTokenModal(true)
      return
      
    }

    const handleTransfer = async ()=>{
      setShowTransfer(true)
     
    }

    const handleRefreshBalance = async ()=>{
      if(!selectedToken ||!activeWallet){
        return
      }
      setLoading(true)
      let newBalance = await getBalance(selectedToken?.scid,worker)
      
      let newBalances = [...activeWallet.balances]
      let index = newBalances.findIndex(x=>x.scid == selectedToken.scid)
      newBalances[index].balance=newBalance
      console.log(newBalance)
      setSelectedToken({...selectedToken,balance:newBalance})
      setActiveWallet({...activeWallet,balances:newBalances})
      setLoading(false)
    }

    return(
        <div className=" slideout-right relative z-40" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    {/* <!--
      Background backdrop, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          {/* <!--
            Slide-over panel, show/hide based on slide-over state.
            Entering: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-full"
              To: "translate-x-0"
            Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-0"
              To: "translate-x-full"
          --> */}
          <div className="pointer-events-auto relative w-screen max-w-md">
           {/*  <!--
              Close button, show/hide based on slide-over state.
              Entering: "ease-in-out duration-500"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "ease-in-out duration-500"
                From: "opacity-100"
                To: "opacity-0"
            --> */}
            <div className="absolute right-0 top-0 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
              <button onClick={()=>setShow(false)} type="button" className="relative rounded-md text-gray-700 hover:text-cyan-800 focus:outline-none">
                <span className="absolute -inset-2.5"></span>
                <span className="sr-only">Close panel</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex h-full flex-col overflow-y-scroll bg-gray-200 py-6 shadow-xl rounded-l-xl">
              <div className="px-4 sm:px-6">
                <h2 className="leading-6 text-gray-700" id="slide-over-title">
                  Token Details
                </h2>
              </div>
              <div className="relative flex-1 px-4 mt-6">
               {/*  <!-- Your content --> */}
                <div className="flex items-center justify-between gap-4 mb-4 px-2">
                  <div className="title flex gap-2">
                    <h3 className="font-medium">Balance</h3>
                    <div onClick={handleRefreshBalance} className={`refresh cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-full p-1${loading?" animate-spin":""}`}>
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
                    </div>
                  </div>
                  <div className="icon hidden img">
                    <img src="https://digitalbanjare.com/img/icons/currency/dero-icon.png" className="w-[33px]" />
                  </div>{/* <!-- icon --> */}
                  {selectedToken?.scid=="e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4"?<>🌿</>

                :<img src={selectedToken?.iconURL} className="w-[20px]" />}
                </div>
                <div className="slideout-content font-normal rounded-xl space-y-6">
                  
                  <div className="flex items-center justify-between gap-4 font-medium bg-gray-50 w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">
                    <div className="title">
                      <h3 className="font-medium">{selectedToken?.name}</h3>
                      <p className="text-sm font-light">{selectedToken?.symbol}</p>
                    </div>
                    <div className={`${loading?"animate-pulse":""}`}>{formatBalance(activeWallet?.balances?.find(token=>token.scid==selectedToken?.scid))}</div>
                  </div>

                  <div className="token-details grid gap-2 text-sm break-all ring-1 ring-gray-400 px-4 pt-5 pb-4 bg-gray-100 shadow-inner shadow-gray-400 rounded-sm">
                    <div className="hidden">
                      <span className="font-semibold">Type:</span> Token <span className="font-xs bg-blue-100 text-blue-500 px-2 py-[2px] rounded-xl">Private</span>
                    </div>
                    <div className="hidden">
                      <span className="font-semibold">Max Supply:</span> --
                    </div>
                    <div className="hidden">
                      <span className="font-semibold">Circulating Supply:</span> <span className="bg-green-100 text-green-900 px-2 py-[2px] rounded-xl">21294</span>
                    </div>
                    <div>
                      <span className="font-semibold">Symbol:</span> {selectedToken?.symbol}
                    </div>
                    <div>
                      <span className="font-semibold">Decimals:</span> {selectedToken?.decimals}
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="font-semibold">SCID:</span> {selectedToken?.scid}
                      </div>
                      <div onClick={handleCopySCID} className="icon cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-full p-1">
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
                      </div>
                    </div>
                  </div>{/* <!-- token-details --> */}

                  <div onClick={handleRemoveToken} className="btn flex text-center items-center justify-between gap-4 px-4 py-3 bg-gray-200 ring-1 ring-gray-600 rounded-md cursor-pointer">
                    <div className="">Remove Token</div>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_9997_254483)">
                          <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" fill="black"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_9997_254483">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="clear-both h-[70px]"></div>

                </div>{/* <!-- slideout-content --> */}

                <div className="absolute bottom-0 left-0 right-0 mx-auto w-11/12 inline-block">
                  <div onClick={handleTransfer} className="btn flex text-center items-center justify-center gap-4 bg-[#3E7A57] rounded-md h-[64px] cursor-pointer">
                    <div className="text-lg text-gray-50">Transfer Token</div>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_15354_2482)">
                          <path d="M3.4 20.4L20.85 12.92C21.66 12.57 21.66 11.43 20.85 11.08L3.4 3.60002C2.74 3.31002 2.01 3.80002 2.01 4.51002L2 9.12002C2 9.62002 2.37 10.05 2.87 10.11L17 12L2.87 13.88C2.37 13.95 2 14.38 2 14.88L2.01 19.49C2.01 20.2 2.74 20.69 3.4 20.4Z" fill="#f9fafb"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_15354_2482">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default TokenSlideout