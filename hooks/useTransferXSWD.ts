"use client"
import { useWalletContext } from "@/contexts";


export default function useTransferXSWD(){
   const {xswd} = useWalletContext()

   const transferXSWD = async (data:any) => {
    let transferData = {transfers:data.transfers,ringsize:data.ringsize}
    console.log(transferData)
    
    const result:any = await xswd?.wallet.transfer(transferData)
    console.log('useSendTransaction XSWD res', result);
    return result.result.txid
  };

   

    return transferXSWD
}