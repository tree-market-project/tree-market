"use client"
import { DeroID, wallet } from "@/types"
import { useTransfer } from "./useTransfer"
import { useWalletContext,useProfileContext } from "@/contexts"


export function useMintDeroID(){
    const transfer = useTransfer()
    const {worker,activeWallet,setActiveWallet,walletList,setWalletList} = useWalletContext()
    const {profiles,setProfiles} = useProfileContext()

    const mintDeroID = async()=>{
        const response = await fetch('/contracts/deroID.bas');
        const text = await response.text();
        const sc = btoa(text);
        const data:any = {ringsize:2,sc:sc,sc_rpc:[{name:"entrypoint",datatype:"S",value:"Initialize"}]}
        const txid = await transfer(data,worker||null)
        let newWallet :wallet= JSON.parse(JSON.stringify(activeWallet))
        newWallet.balances.push({name:"deroID",scid:txid,balance:1,symbol:"deroID",iconURL:"https://digitalbanjare.com/img/wallet/deroweb-icon.png"})
        setActiveWallet(newWallet)
        let index = walletList.findIndex(wallet=>wallet.active)
        let newList = walletList
        walletList[index] = newWallet
        setWalletList(newList)
        if(activeWallet?.app == "web"){
            let storedWallet =JSON.parse(JSON.stringify(newWallet))
        storedWallet.open= false
        storedWallet.active=false
        localStorage.setItem(`wallet-${newWallet.name}`,JSON.stringify(storedWallet))
        }

        let newProfile:DeroID = {address:activeWallet?.address,scid:txid}
        let newProfiles = profiles
        newProfiles.push(newProfile)
        setProfiles(newProfiles)
        localStorage.setItem(`profile-${txid}`, JSON.stringify(newProfile))
        
        return txid;
    }

    return mintDeroID
}
