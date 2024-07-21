"use client"



export default function useGetGasEstimate(){
   

   const getGasEstimate = async (data:any) => {
  
    let fee = ((data.ringsize+1)*30)
    
    return fee
  };

   

    return getGasEstimate
}