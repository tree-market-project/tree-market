"use client"
import { useTransfer } from "./useTransfer"

export function useRegisterWalletName(){
    const transfer = useTransfer()
    const registry = "0000000000000000000000000000000000000000000000000000000000000001"

    const registerWalletName = async (name:string) =>{
        const data:any = {
            scid:registry,
            ringsize:2,
            sc_rpc:[{name:"entrypoint",datatype:"S",value:"Register"},{name:"name",datatype:"S",value:name}]
        }
        const txid = await transfer(data)
        return txid

    }
    return registerWalletName
}