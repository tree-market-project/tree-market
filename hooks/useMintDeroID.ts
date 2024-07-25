"use client"
import { DeroID, wallet } from "@/types"
import { useTransfer } from "./useTransfer"
import { useWalletContext,useProfileContext } from "@/contexts"

const code = 'RnVuY3Rpb24gSW5pdGlhbGl6ZSgpIFVpbnQ2NCAxMCBJRiBFWElTVFMoIk9XTkVSIikgVEhFTiBHT1RPIDkwIDIwIFNUT1JFKCJPV05FUiIsQUREUkVTU19TVFJJTkcoU0lHTkVSKCkpKSAzMCBTRU5EX0FTU0VUX1RPX0FERFJFU1MoU0lHTkVSKCksMSxTQ0lEKCkpIDQwIFNUT1JFKCJuYW1lIiwiRGVyb0lEIikgNTAgU1RPUkUoInN5bWJvbCIsIkRlcm9JRCIpIDYwIFNUT1JFKCJkZWNpbWFscyIsMCkgOTAgUkVUVVJOIDAgRW5kIEZ1bmN0aW9uIEZ1bmN0aW9uIFVwZGF0ZVZhcihrZXkgU3RyaW5nLCB2YWx1ZSBTdHJpbmcsIHQgU3RyaW5nKSBVaW50NjQgNSBJRiBub3RPd25lcigpIFRIRU4gR09UTyA5MCAxMCBJRiB0ID09ICJVIiBUSEVOIEdPVE8gMzAgMjAgU1RPUkUoa2V5LHZhbHVlKSAyNSBSRVRVUk4gMCAzMCBTVE9SRShrZXksQVRPSSh2YWx1ZSkpIDM1IFJFVFVSTiAwIDkwIFJFVFVSTiAxIEVuZCBGdW5jdGlvbiBGdW5jdGlvbiBEZWxWYXIoa2V5IFN0cmluZykgVWludDY0IDUgSUYgbm90T3duZXIoKSBUSEVOIEdPVE8gOTAgMTAgREVMRVRFKGtleSkgMjAgUkVUVVJOIDAgOTAgUkVUVVJOIDEgRW5kIEZ1bmN0aW9uIEZ1bmN0aW9uIERlcG9zaXQoYXNzZXQgU3RyaW5nKSBVaW50NjQgMTAgYWRkKCJ0cmVhc3VyeSIrYXNzZXQsQVNTRVRWQUxVRShIRVhERUNPREUoYXNzZXQpKSkgMjAgUkVUVVJOIDAgRW5kIEZ1bmN0aW9uIEZ1bmN0aW9uIFdpdGhkcmF3KGFzc2V0IFN0cmluZywgYW1vdW50IFVpbnQ2NCkgVWludDY0IDEwIElGIG5vdE93bmVyKCkgVEhFTiBHT1RPIDkwIDIwIFNFTkRfQVNTRVRfVE9fQUREUkVTUyhTSUdORVIoKSxhbW91bnQsSEVYREVDT0RFKGFzc2V0KSkgMzAgUkVUVVJOIDAgOTAgUkVUVVJOIDEgRW5kIEZ1bmN0aW9uIEZ1bmN0aW9uIG5vdE93bmVyKCkgVWludDY0IDEwIElGIFNJR05FUigpID09IEFERFJFU1NfUkFXKExPQUQoIk9XTkVSIikpIFRIRU4gR09UTyA5MCAyMCBJRiBBU1NFVFZBTFVFKFNDSUQoKSkgPT0gMSBUSEVOIEdPVE8gODAgMzAgUkVUVVJOIDEgODAgU0VORF9BU1NFVF9UT19BRERSRVNTKFNJR05FUigpLDEsU0NJRCgpKSA5MCBSRVRVUk4gMCBFbmQgRnVuY3Rpb24gRnVuY3Rpb24gYWRkKGsgU3RyaW5nLCB2IFVpbnQ2NCkgVWludDY0IDEwIElGIEVYSVNUUyhrKSBUSEVOIEdPVE8gMzAgMTUgU1RPUkUoayx2KSAyMCBSRVRVUk4oTE9BRChrKSkgMzAgU1RPUkUoayxMT0FEKGspK3YpIDM1IFJFVFVSTiBMT0FEKGspIEVuZCBGdW5jdGlvbg=='

export function useMintDeroID(){
    const transfer = useTransfer()
    const {worker,activeWallet,setActiveWallet,walletList,setWalletList} = useWalletContext()
    const {profiles,setProfiles} = useProfileContext()

    const mintDeroID = async()=>{
        const response = await fetch('/contracts/deroID.bas');
        const text = await response.text();
        const sc = btoa(text);
        const data:any = {ringsize:2,scid:"",sc:sc,sc_rpc:[{name:"SC_ACTION",datatype:"U",value:1},{name:"SC_CODE",datatype:"S",value:text},{name:"entrypoint",datatype:"S",value:"Initialize"}]}
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
