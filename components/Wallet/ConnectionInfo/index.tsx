"use client"

import { useWalletContext } from "@/contexts"
import { useConnectWallet } from "@/hooks/useConnectWallet"
import { useDisonnectWallet } from "@/hooks/useDisconnectWallet"
import { useEffect, useState } from "react"


const ConnectionInfo = ()=>{
  const {activeWallet,worker} = useWalletContext()
  const connectWallet = useConnectWallet()
  const disconnectWallet = useDisonnectWallet()
  const [connected,setConnected] = useState(0)

  useEffect(()=>{
    if(activeWallet?.app=="web"){
      if(worker){
        setConnected(2)
        console.log(worker)
      }else{
        setConnected(0)
      }
      
    }else{
      if(activeWallet?.open){
        setConnected(2)
      }else{
        setConnected(0)
        
      }
    }

  },[activeWallet?.open,activeWallet?.app,worker])

  const handleConnect = async()=>{
    if(!activeWallet){
      return
    }
    if(connected==2){
      setConnected(0)
      disconnectWallet()
    }else{
      setConnected(1)
    connectWallet()
    }
    
  }
    return(
 <>
                {/* <!-- COMPONENT wallet connection info --> */}
               
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-2 justify-start items-center">
                    <h3 className="font-semibold">{connected==2?"Connected":connected==1?"Connecting":"Not Connected"}</h3>
                    <div className={`text-3xl ${connected==2?"text-green-600":connected==1?"text-amber-400 animate-ping":"text-red-600"}`}>&#9737;</div>
                  </div>
                  <div onClick={handleConnect} className="text-sm bg-gray-200 px-2 py-1 shadow-sm shadow-gray-400 rounded-md hover:shadow-inner cursor-pointer">{connected==2?"Disconnect":connected==1?"Reconnect":"Connect"}</div>
                </div>
                {/* <!-- COMPONENT Notification.connection --> */}
                <div className="hidden notification connection flex justify-between gap-2 items-center border-2 border-blue-100 bg-blue-50 px-3 py-1 rounded-sm">
                  <div className="text-sm text-blue-400">                        
                    <p>Select one of the wallet options to connect.</p>
                  </div>
                </div>{/* <!-- notification --> */}
                <div className="hidden connections flex flex-wrap justify-between gap-4">
                  <div className="system flex items-center justify-start gap-2">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13H12.94C12.6 16.1 10.68 18.72 8.00001 20.05C7.97001 21.86 6.34 23.28 4.45001 22.95C3.25001 22.74 2.26001 21.75 2.05001 20.55C1.71001 18.65 3.16001 17 5.00001 17C5.95001 17 6.78 17.45 7.33001 18.14C9.23001 17.11 10.59 15.23 10.91 13H7.81001C7.33001 14.34 5.95001 15.24 4.39001 14.94C3.21001 14.71 2.26001 13.74 2.04001 12.56C1.70001 10.66 3.16001 9 5.00001 9C6.3 9 7.40001 9.84 7.82001 11H10.92C10.6 8.77 9.23001 6.9 7.33001 5.86C6.69001 6.66 5.66001 7.14 4.52001 6.96C3.29001 6.77 2.26001 5.77 2.05001 4.54C1.72001 2.65 3.17001 1 5.00001 1C6.64001 1 7.96 2.31 7.99001 3.95C10.67 5.28 12.59 7.9 12.93 11H18V9.21C18 8.76 18.54 8.54 18.85 8.86L21.64 11.65C21.84 11.85 21.84 12.16 21.64 12.36L18.85 15.15C18.54 15.46 18 15.24 18 14.79V13Z" fill="#4b5563"/>
                      </svg>
                    </div>
                    <div className="bg-gray-200 text-sm px-3 py-1 rounded-lg cursor-default">0</div>
                  </div>
                  <div className="system flex items-center justify-start gap-2">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_14988_30289)">
                          <path d="M10 16V8C10 6.9 10.89 6 12 6H21V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V18H12C10.89 18 10 17.1 10 16ZM13 8C12.45 8 12 8.45 12 9V15C12 15.55 12.45 16 13 16H22V8H13ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" fill="#4b5563"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_14988_30289">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="bg-gray-200 text-sm px-3 py-1 rounded-lg cursor-default">0</div>
                  </div>
                </div>
                <div className="hidden node flex items-center justify-start gap-2">
                  <div className="text-sm">Node</div>
                  <div className="bg-gray-200 text-sm px-3 py-1 rounded-lg cursor-default">undefined</div>
                </div>
              </>
    )
}

export default ConnectionInfo