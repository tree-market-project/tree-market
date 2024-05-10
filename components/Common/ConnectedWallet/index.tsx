"use client"
import { useWalletContext } from "@/contexts"
import { wallet } from "@/types"

const ConnectedWallet:React.FC<{handleOpenCloseWallet:any,handleSelectIntegratedWallet:any,index:number,wallet:wallet}>=({handleOpenCloseWallet,handleSelectIntegratedWallet,index,wallet})=>{
    const {activeWallet} = useWalletContext()

    return(
        <div onClick={()=>handleSelectIntegratedWallet(index)} key={index} className={`single-field relative flex items-center justify-between gap-4 px-3 py-3 ring-1 ${activeWallet&&activeWallet?.address==wallet.address&&activeWallet?.connection==wallet.connection?"ring-green-600":"ring-gray-200"} mx-auto w-full rounded-lg bg-gray-${activeWallet&&activeWallet?.address==wallet.address&&activeWallet?.connection==wallet.connection?"200":"100"} ${activeWallet&&activeWallet?.address==wallet.address&&activeWallet?.connection==wallet.connection?"":"hover:bg-gray-200"} leading-tight cursor-default`}>
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="font-medium text-sm">{wallet.name}</div>
                         {wallet.open&& <div className="text-gray-500 text-sm">{`${wallet.address.substring(0,7)}...${wallet.address.substring(wallet.address.length-7)}`}</div>}
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className={`text-xs ${wallet.open?"text-green-700":""}`}>{wallet.open?"OPEN":"closed"}</div>
                          <div onClick={()=>{handleOpenCloseWallet(wallet.open)}} className="text-sm px-2 py-1 bg-gray-50 ring-1 ring-gray-300 rounded-md cursor-pointer shadow-sm shadow-gray-400">{wallet.open?
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <g clip-path="url(#clip0_9997_252746)">
                                <path d="M12.5 7.7C12.22 7.42 11.78 7.42 11.5 7.7L8.00004 11.2L4.50004 7.7C4.22004 7.42 3.78004 7.42 3.50004 7.7C3.22004 7.98 3.22004 8.42 3.50004 8.7L7.00004 12.2L3.50004 15.7C3.22004 15.98 3.22004 16.42 3.50004 16.7C3.78004 16.98 4.22004 16.98 4.50004 16.7L8.00004 13.2L11.5 16.7C11.78 16.98 12.22 16.98 12.5 16.7C12.78 16.42 12.78 15.98 12.5 15.7L9.00004 12.2L12.5 8.7C12.78 8.42 12.78 7.98 12.5 7.7ZM19 1H9.00004C7.90004 1 7.00004 1.9 7.00004 3V5C7.00004 5.55 7.45004 6 8.00004 6C8.55004 6 9.00004 5.55 9.00004 5V4H19V20H9.00004V19C9.00004 18.45 8.55004 18 8.00004 18C7.45004 18 7.00004 18.45 7.00004 19V21C7.00004 22.1 7.90004 23 9.00004 23H19C20.1 23 21 22.1 21 21V3C21 1.9 20.1 1 19 1Z" fill="#4b5563"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_9997_252746">
                                  <rect width="24" height="24" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_9997_252749)">
                              <path d="M19 1H9C7.9 1 7 1.9 7 3V5C7 5.55 7.45 6 8 6C8.55 6 9 5.55 9 5V4H19V20H9V19C9 18.45 8.55 18 8 18C7.45 18 7 18.45 7 19V21C7 22.1 7.9 23 9 23H19C20.1 23 21 22.1 21 21V3C21 1.9 20.1 1 19 1ZM10.8 11V9.5C10.8 8.1 9.4 7 8 7C6.6 7 5.2 8.1 5.2 9.5V11C4.6 11 4 11.6 4 12.2V15.7C4 16.4 4.6 17 5.2 17H10.7C11.4 17 12 16.4 12 15.8V12.3C12 11.6 11.4 11 10.8 11ZM9.5 11H6.5V9.5C6.5 8.7 7.2 8.2 8 8.2C8.8 8.2 9.5 8.7 9.5 9.5V11Z" fill="#4b5563"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_9997_252749">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>}</div>
                        </div>
                      </div>
    )
}

export default ConnectedWallet