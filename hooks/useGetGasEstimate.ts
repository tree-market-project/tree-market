"use client"



export default function useGetGasEstimate(){
   

   const getGasEstimate = async (data:any) => {
  
    let fee = ((data.ringsize+1)*20)
    
    return fee
  };

   

    return getGasEstimate
}