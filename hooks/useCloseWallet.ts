"use client"


export default function useCloseWallet(){
    
    const closeWallet = async(worker:Worker,wallet:any)=>{
        const err:any = await new Promise((resolve) => {
            worker.onmessage = (event) => {
              resolve(event.data.result);
            };
          
            worker.postMessage({ functionName: "CloseWallet", args: [wallet.name] });
          });
          console.log(err)
          if(err.err == null) {
            return true
          }else{
            return false
          }
        
        }
    
    return closeWallet
}
