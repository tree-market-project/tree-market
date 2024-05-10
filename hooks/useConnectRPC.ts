"use client"

import { useRef } from "react"
import { useWalletContext } from "@/contexts"
import { wallet } from "@/types"
import useGetAddressRPC from "./useGetAddressRPC"


// @ts-ignore
import DeroBridgeApi from "dero-rpc-bridge-api"
import to from 'await-to-js'

interface DeroRPCType {
    init: () => Promise<void>;
  }

export default function useConnectRPC(){
    const deroBridgeApiRef = useRef()
    const getAddressRPC = useGetAddressRPC()
   const {walletList,setWalletList,setActiveWallet,setDeroBridgeApiRef} = useWalletContext()

    const connectRPC = async(app:string)=>{
        deroBridgeApiRef.current = new DeroBridgeApi()
        const deroBridgeApi = deroBridgeApiRef.current
        setDeroBridgeApiRef(deroBridgeApiRef)
        if(deroBridgeApi !== undefined){
          const deroRPCApi = deroBridgeApi as DeroRPCType
         
        if (deroRPCApi){
          const [err] = await to(deroRPCApi.init())
           if (err){
          console.log("ERR",err)
        }else {
          console.log("Success!")
        }
        }
      }
       const address = await getAddressRPC(deroBridgeApiRef)
      const newWallet:wallet ={
        app: app,
        connection:"rpc",
        name:app,
        address:address,
        fileData:null,
        seed:"",
        hexSeed:"",
        password:"",
        active:true,
        open:true,
        balances:[{name:"Dero",symbol:"DERO",scid:"0000000000000000000000000000000000000000000000000000000000000000",decimals:5,iconURL:"/images/currency-icons/dero-icon.png"},{name:"Leaf Token",symbol:"LEAF",scid:"e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4",decimals:5}]
      }
      
      let newWalletList = walletList.filter(x=>x.connection!="rpc")
      newWalletList.push(newWallet)
        setActiveWallet(newWallet)
        setWalletList(newWalletList)
      }
return connectRPC
}