"use client"

import {  useCallback } from "react";
import to from 'await-to-js'

export default function useTransferRPC(){
   // const {deroBridgeApiRef} = useWalletContext()

   const transferRPC = useCallback(async (data:any,deroBridgeApiRef:any) => {
    const deroBridgeApi = deroBridgeApiRef.current;
    if(!deroBridgeApi) return ""
    
    const [err, res]:[Error|null,any|null] = await to(deroBridgeApi.wallet('start-transfer', data));
    console.log(data)
    console.log('useSendTransaction RPC res', res);
    return res.data.result.txid;
  },[]);

   

    return transferRPC
}