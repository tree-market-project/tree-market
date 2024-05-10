"use client"
import { balance } from "@/types"

function formatBalance(balance:balance|undefined){
  if(!balance || !balance?.balance){
    return 0
  }
  if(!balance?.decimals){
        
    return balance.balance
  }
  else{
    
    
    let atomic = balance.balance
    
    return atomic/Math.pow(10,balance.decimals)
  }
      
}

export default formatBalance;