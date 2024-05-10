"use client"
import { useWalletContext } from "@/contexts";
import { useCallback } from "react";
import to from 'await-to-js'


export function useGetBalanceRPC(){
  const {activeWallet} = useWalletContext()

  const getBalanceRPC = useCallback(async (scid:string,deroBridgeApiRef:any)=>{
    if(!deroBridgeApiRef){
      return 0
    }
    const deroBridgeApi = deroBridgeApiRef.current;
    if(!deroBridgeApi){
      return 0
    }

    const [err,res]:[Error|null,any|null] = await to(deroBridgeApi.wallet("get-balance",{"scid":scid})) 
        console.log("get-address-error",err)
        console.log("balance ",scid,res)
        return res.data.result.balance
  },[])
    
  return getBalanceRPC
   
  };
    
   
  

   
    
