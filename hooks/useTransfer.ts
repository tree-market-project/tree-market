"use client"
import { useWalletContext } from "@/contexts";
import { useTransferWeb } from "./useTransferWeb";
import useTransferRPC from "./useTransferRPC";
import useTransferXSWD from "./useTransferXSWD";

export function useTransfer(){
  const {activeWallet,deroBridgeApiRef} = useWalletContext()
  const transferWeb = useTransferWeb()
  const transferRPC = useTransferRPC()
  const transferXSWD = useTransferXSWD()

  const transfer = async (data:any,worker?:Worker|null):Promise<string> => {
    console.log("transfer ",activeWallet?.connection,data,worker,deroBridgeApiRef)
    switch(activeWallet?.connection){
      case "web":
        if(!worker){
          return ""
        }
        return await transferWeb(worker,data)
      case "rpc":
        return await transferRPC(data,deroBridgeApiRef)
      case "xswd":
        return await transferXSWD(data)
      default:
        return ""
    }
   
  };
    
   
  

   
    return transfer
}