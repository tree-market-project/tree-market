"use client"

import { useCallback } from "react";
import { useWalletContext } from "@/contexts";
import to from 'await-to-js'

export default function useGetAddressRPC(){
   // const {deroBridgeApiRef} = useWalletContext()

    const getAddressRPC = useCallback(async(deroBridgeApiRef:any)=>{
        if(!deroBridgeApiRef){
            console.log("no ref")
            return ""
        }
        const deroBridgeApi = deroBridgeApiRef.current;
        if(!deroBridgeApi){
            return ""
        }
  
        const [err,res]:[Error|null,any|null] = await to(deroBridgeApi.wallet("get-address",{})) 
        console.log("get-address-error",err)
        console.log("address ",res)
        return res.data.result.address
      },[])

    return getAddressRPC
}