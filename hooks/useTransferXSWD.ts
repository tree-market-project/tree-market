"use client"
import { useWalletContext } from "@/contexts";


export default function useTransferXSWD(){
   const {xswd} = useWalletContext()

   const transferXSWD = async (data:any) => {
    /* let transferData = {transfers:data.transfers,ringsize:data.ringsize}
    console.log(transferData) */
   
    /* data.sc_rpc.push({name:"SC_ACTION",datatype:"U",value:0})
    data.sc_rpc.push({name:"SC_ID",datatype:"H",value:"ead31b12a6e5565cf24247ce8414e9e476c56d3b45358a5e4b7345053923c6da"})
     */ console.log("transferxswd data",data)
    const result:any = await xswd?.wallet.transfer(data)
    console.log('useSendTransaction XSWD res', result);
    return result.result.txid
  };

   

    return transferXSWD
}