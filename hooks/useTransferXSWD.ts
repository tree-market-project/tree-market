"use client"
import { useWalletContext } from "@/contexts";


export default function useTransferXSWD(){
   const {xswd} = useWalletContext()

   const transferXSWD = async (data:any) => {
    /* let transferData = {transfers:data.transfers,ringsize:data.ringsize}
    console.log(transferData) */
   
    //data.sc_rpc.push({name:"SC_ACTION",datatype:"U",value:1})
     console.log("transferxswd data",data)
    const result:any = await xswd?.wallet.transfer(data)
    console.log('useSendTransaction XSWD res', result);
    return result.result.txid
  };

   

    return transferXSWD
}