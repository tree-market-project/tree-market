"use client"
import { useTransfer } from "./useTransfer"

export function useEditDeroID(){
    const transfer = useTransfer()
    
    

    const editDeroID = async (key:string, value:string,t:string, scid:string) =>{
        const data:any = {
            scid:scid,
            ringsize:2,
            sc_rpc:[{name:"entrypoint",datatype:"S",value:"UpdateVar"},{name:"key",datatype:"S",value:key},{name:"value",datatype:"S",value:value},{name:"t",datatype:"S",value:t}]
        }
        const txid = await transfer(data)
        return txid

    }
    return editDeroID
}