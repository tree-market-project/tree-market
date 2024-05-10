"use client"

import { useWalletContext } from "@/contexts"
import { wallet } from "@/types"
import { Api,AppInfo,generateAppId } from "dero-xswd-api";

export default function useConnectXSWD(){
  let address=""
   
   const {walletList,setWalletList,setActiveWallet,xswd,setXSWD} = useWalletContext()

   const connectXSWD = async()=>{

    if(!xswd){

    
    const name = "Tree Market";

const appInfo:AppInfo = {
id: await generateAppId(name),
name,
description: `Tree.Market | The Unstoppable Free-Market Ecosystem
100% decentralized, interoperable, and open source point-of-sale solution for an unstoppable P2P economy, without intermediaries.`,
};

const newXswd = new Api(appInfo);



await newXswd.initialize();
setXSWD(newXswd)
address = await getAddressXSWD(newXswd)
console.log("xswd address",address)

   }
  else{
    address = await getAddressXSWD(xswd)
  }
const newWallet:wallet =  {
app:"g45w",
name:"g45w",
connection:"xswd",
address:address,
fileData:null,
password:"",
seed:"",
hexSeed:"",
open:true,
active:true,
balances:[{name:"Dero",symbol:"DERO",scid:"0000000000000000000000000000000000000000000000000000000000000000",decimals:5,iconURL:"/images/currency-icons/dero-icon.png"},{name:"Leaf Token",symbol:"LEAF",scid:"e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4",decimals:5}]
}
setActiveWallet(newWallet)
let newWalletList = walletList.filter(x=>x.connection!="xswd")
newWalletList.push(newWallet)
  setActiveWallet(newWallet)
  setWalletList(newWalletList)

}
return connectXSWD
}

const getAddressXSWD = async(xswd:Api)=>{
  const address:any = await xswd.wallet.GetAddress()
  return address.result.address
}