"use client"
import { useWalletContext } from "@/contexts";



export function useGetBalanceXSWD(){
  const {activeWallet,xswd} = useWalletContext()

  const getBalanceXSWD = async (scid:string)=>{
    const balance:any = await xswd?.wallet.GetBalance({scid:scid})
    console.log("xswd get bal",balance)
    
    
    return balance.result.balance
  }
  return getBalanceXSWD
   
  };
    
   
  

   
    
