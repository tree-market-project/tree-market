"use client"
import { useWalletContext } from "@/contexts";
import { useGetBalanceWeb } from "./useGetBalanceWeb";
import { useGetBalanceRPC } from "./useGetBalanceRPC";
import { useGetBalanceXSWD } from "./useGetBalanceXSWD";
import { MutableRefObject } from "react";


export function useGetBalance(){
  const {activeWallet,deroBridgeApiRef} = useWalletContext()
  const getBalanceWeb = useGetBalanceWeb()
  const getBalanceRPC = useGetBalanceRPC()
  const getBalanceXSWD = useGetBalanceXSWD()

  const getBalance = async (scid:string,worker?:Worker|null):Promise<number> => {
    if (!activeWallet?.open) return 0;
   switch (activeWallet.connection){
    case "web":
      if(!worker){
        return 0
      }
      return await getBalanceWeb(worker,scid)
    case "rpc":
      return await getBalanceRPC(scid,deroBridgeApiRef)
    case "xswd":
      return await getBalanceXSWD(scid)
    default:
      return 0
   }
    
  };
    
   
  

   
    return getBalance
}