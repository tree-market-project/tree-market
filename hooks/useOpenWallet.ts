"use client"


export function useOpenWallet(){
  
    
   
      const openWallet = async (worker:Worker,wallet:any,password:string) => {
        if(!worker){
          return false
        }

        const err:any = await new Promise((resolve) => {
          worker.onmessage = (event) => {
            resolve(event.data.result);
          };
        
          worker.postMessage({ functionName: "OpenWallet", args:[wallet.name,password,wallet.fileData,true]  });
        });
        
        if(err?.err){
          console.log(err)
          return err
        }else{
          return true
        }
        
       
        
        
  
      
  
  
      }

   
    return openWallet
}