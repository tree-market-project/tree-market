"use client"
import useConnectRPC from "./useConnectRPC"
import useConnectXSWD from "./useConnectXSWD"
import { useInitializeWorker } from "./useInitializeWorker"
import { useWalletContext } from "@/contexts"


export function useDisonnectWallet(){
  const {worker,setWorker,activeWallet,setActiveWallet,setDeroBridgeApiRef,walletList,setWalletList,xswd,setXSWD} = useWalletContext()
 const connectRPC = useConnectRPC()
 const connectXSWD = useConnectXSWD()
 const initializeWorker = useInitializeWorker()

  const disconnectWallet = async () => {
let newWalletList = walletList.filter(wallet=>wallet.app==activeWallet?.app)
      for(let wallet of newWalletList){
        wallet.open=false
      }
      newWalletList = newWalletList.concat(walletList.filter(wallet=>wallet.app!=activeWallet?.app))
      setWalletList(newWalletList)

   switch (activeWallet?.app){
    case "web":
      if(!worker){
        console.log("no worker")
        break
      }
      console.log("disconnecting web",worker)
      
      worker.terminate()
      setWorker(null)
      break
    case "cli":
      setDeroBridgeApiRef(null)
      break
    case "engram":
      setDeroBridgeApiRef(null)
      break
    case "g45w":
      xswd?.close()
      setXSWD(null)
      break
    default:
      break
   }
   
    
  };
    
   
  

   
    return disconnectWallet
}