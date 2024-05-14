"use client"
import { useTransfer } from "./useTransfer"
import { useWalletContext } from "@/contexts"


export function useMintDeroID(){
    const transfer = useTransfer()
    const {worker} = useWalletContext()

    const mintDeroID = async()=>{
        const response = await fetch('/contracts/deroID.bas');
        const text = await response.text();
        const sc = btoa(text);
        const data:any = {ringsize:2,sc:sc,sc_rpc:[{name:"entrypoint",datatype:"S",value:"Initialize"}]}
        const txid = await transfer(data,worker||null)
        return txid;
    }

    return mintDeroID
}
