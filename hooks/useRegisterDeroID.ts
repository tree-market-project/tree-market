"use client"
import { useTransfer } from "./useTransfer"

export function useRegisterDeroID(){
    const transfer = useTransfer()
    const dns = "842363cc33439116ad02d20d36ddb5200efb11a05a6c34377557bc03003cedf4"
    const registry = "ead31b12a6e5565cf24247ce8414e9e476c56d3b45358a5e4b7345053923c6da"

    const registerDeroID = async (name:string, scid:string) =>{
        const data:any = {
            scid:registry,
            sc_rpc:[{name:"entrypoint",datatype:"S",value:"Register"},{name:"name",datatype:"S",value:name},{name:"key",datatype:"S",value:scid},{name:"owner",datatype:"S",value:""},{name:"transferCost",datatype:"U",value:1},{name:"data",datatype:"S",value:scid},{name:"datatype",datatype:"S",value:"DeroID"}],
            transfers:[{scid:dns,burn:1000}]
        }
        const txid = await transfer(data)
        return txid

    }
    return registerDeroID
}