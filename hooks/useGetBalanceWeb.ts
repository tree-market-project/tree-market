"use client"
import { useWalletContext } from "@/contexts";


export function useGetBalanceWeb(){
  const {activeWallet} = useWalletContext()

  const getBalanceWeb = async (worker:Worker,scid:string):Promise<number> => {
    if (!activeWallet?.open) return 0;
  console.log("useGetBal: ",scid,activeWallet.name)
    return new Promise((resolve, reject) => {
      worker.onmessage = (event) => {
        const tx = event.data;
        
        if(tx[`bal${scid+activeWallet?.name}`]){
          
        resolve(tx[`bal${scid+activeWallet?.name}`].matureBalance);}
      };
  
      worker.postMessage({
        functionName: "WalletGetBalance",
        args: ["bal"+scid+activeWallet?.name,activeWallet?.name, scid]
      });
    });
  };
    
   
  

   
    return getBalanceWeb
}