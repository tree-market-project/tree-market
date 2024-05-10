"use client"


export function useRecoverFromDisk(){
  
    const recoverFromDisk = async (worker:Worker,file:string,name:string,pass:string)=>{
        
        const walletInfo :any= await new Promise((resolve) => {
          worker.onmessage = (event) => {
            resolve(event.data.result);
          };
        
          worker.postMessage({ functionName: "RecoverWalletFromDisk", args: [pass, file] });
        });
        
        if(walletInfo.err){
          return walletInfo
        }
        const arrayBuffer = new Uint8Array(walletInfo.value.fileData).slice();
        const decoder = new TextDecoder();
        const jsonString = decoder.decode(arrayBuffer);
        const jsonObject = JSON.parse(jsonString);
        const fileData=JSON.stringify(jsonObject)
        
        
       
        
        
        let wallet = walletInfo.value
        wallet.name=name
        wallet.fileData=fileData
        wallet.open=false
        wallet.app="web"
        wallet.active="false"
        wallet.connection="web"
        wallet.balances=[{name:"Dero",symbol:"DERO",scid:"0000000000000000000000000000000000000000000000000000000000000000",decimals:5,iconURL:"/images/currency-icons/dero-icon.png"},{name:"Leaf Token",symbol:"LEAF",scid:"e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4",decimals:5}]
           
        

        return wallet
          
          

    }

    return recoverFromDisk
}

