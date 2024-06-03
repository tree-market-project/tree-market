"use client"
import { useWalletContext } from "@/contexts";


export function useTransferWeb(){
  const {activeWallet,worker} = useWalletContext()
  const backupWorker = worker

  const transferWeb = async (worker:Worker|undefined|null,data:any):Promise<string> => {
    let txid=""
    if(!worker){
      worker = backupWorker
    }
    if (!activeWallet?.open) return "";
    
      const wasmData = {
        Transfers: data.transfers||[{destination:"dero1qyy5mspp05h430wzs60jg2chlj9mec8uxznyrwk7xztadlku0ccggqq6lct08",amount:0}],
        SC_Code: data.sc,
        SC_ID: data.scid||"",
        SC_RPC: data.sc_rpc,
        Ringsize: data.ringsize,
        Fees: data.fees||10000,
      };

      let fileData = JSON.parse(activeWallet.fileData);
     
    

      let asyncKey = 'tx';
      const tx :any= await new Promise((resolve) => {
        worker.onmessage = (event) => {
          resolve(event.data);
        };

        worker.postMessage({
          functionName: 'WalletTransfer',
          args: [
            'key',
            activeWallet.name,
            JSON.stringify(data),
          ],
        });
      });
      
      console.log('TX', tx);
      console.log('wasmData', wasmData);
      txid=tx.key.txId

      const interval = setInterval(async () => {
        if (tx) {
          clearInterval(interval);
          console.log(tx);
          //txid = tx.key.txId

          let asyncKey2 = 'sent';
          // const send = window.WalletSendTransaction("sent", state.walletList[0].hexSeed, window[asyncKey].txHex)
          const send = await new Promise((resolve) => {
            worker.onmessage = (event) => {
              resolve(event.data);
            };

            worker.postMessage({
              functionName: 'WalletSendTransaction',
              args: [
                'key',
                activeWallet.name,
                tx.key.txHex,
              ],
            });
          });
          console.log('send', send);
          //console.log("window[asyncKey2]",window[asyncKey2])
        }
      }, 100); // check every 100ms
    return txid
  };
    
   
  

   
    return transferWeb
}