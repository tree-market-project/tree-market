"use client"
import { useWalletContext } from "@/contexts";


export function useTransferWeb(){
  const {activeWallet} = useWalletContext()

  const transferWeb = async (worker:Worker,data:any):Promise<string> => {
    let txid=""
    if (!activeWallet?.open) return "";
    
      const wasmData = {
        Transfers: data.transfers,
        SC_Code: '',
        scid: data.scid,
        SC_RPC: data.sc_rpc,
        Ringsize: data.ringsize,
        Fees: data.fees,
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
            JSON.stringify(wasmData),
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