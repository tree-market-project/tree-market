"use client"
import { useWalletContext } from "@/contexts"

export function useRecoverFromSeed(){
  const {walletList,setWalletList} = useWalletContext()
    
   
      const recoverFromSeed = async (worker:Worker,seed:string,name:string,password:string) => {
        console.log("let's recover ",seed,name,password)
        if(!worker){
          console.log("no worker")
          return
        }
        const walletInfo :any = await new Promise((resolve)=>{
          worker.onmessage = (event:any) =>{
            resolve(event.data.result)
          }
          worker.postMessage({
            functionName: 'RecoverWalletFromSeed',
            args: [password,seed]
          });
        });
        const arrayBuffer = new Uint8Array(walletInfo.value.fileData).slice();
      const decoder = new TextDecoder();
      const jsonString = decoder.decode(arrayBuffer);
      const jsonObject = JSON.parse(jsonString);
      const fileData = JSON.stringify(jsonObject);
      let wallet = walletInfo.value
      wallet.name = name
      wallet.fileData=fileData
      wallet.open = false
      wallet.app="web"
      wallet.connection="web"
      wallet.active="false"
      wallet.balances=[{name:"Dero",symbol:"DERO",scid:"0000000000000000000000000000000000000000000000000000000000000000",decimals:5,iconURL:"/images/currency-icons/dero-icon.png"},{name:"Leaf Token",symbol:"LEAF",scid:"e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4",decimals:5}]
     /*  let storedWallet = {...wallet}
      storedWallet.seed=""
      storedWallet.hexSeed=""
      localStorage.setItem(`wallet-${name}`,JSON.stringify(storedWallet))
          setWalletList([...walletList,storedWallet]) */
  
      console.log('recover from Seed - walletInfo', walletInfo);
      return wallet
  
  
      }

   
    return recoverFromSeed
}