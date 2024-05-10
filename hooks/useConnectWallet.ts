"use client"
import useConnectRPC from "./useConnectRPC"
import useConnectXSWD from "./useConnectXSWD"
import { useInitializeWorker } from "./useInitializeWorker"
import { useWalletContext } from "@/contexts"


export function useConnectWallet(){
  const {worker,setWorker,activeWallet,deroBridgeApiRef} = useWalletContext()
 const connectRPC = useConnectRPC()
 const connectXSWD = useConnectXSWD()
 const initializeWorker = useInitializeWorker()

  const connectWallet = async () => {
   switch (activeWallet?.app){
    case "web":
      if(!worker){
        let newWorker:Worker = await initializeWorker()
          setWorker(newWorker)
      }
      break
    case "cli":
      connectRPC("cli")
      break
    case "engram":
      connectRPC("engram")
      break
    case "g45w":
      connectXSWD()
      break
    default:
      break
   }
    
  };
    
   
  

   
    return connectWallet
}