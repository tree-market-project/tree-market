"use client"
import { useState } from "react";
import { useRecoverFromHex } from "./useRecoverFromHex";
import { useWalletContext,useFastRegistrationContext } from "@/contexts";
import { useRecoverFromSeed } from "./useRecoverFromSeed";
import { useOpenWallet } from "./useOpenWallet";

export function useFastRegister(){
    const {worker,setWorker} = useWalletContext()
    const {workerCount,setWorkerCount,setHashCount,setHashRate,setHashCountTotal,setHashRateTotal,status,setStatus,setWallet,setTxWorker} = useFastRegistrationContext()
    
    const [txHex,setTxHex] = useState("")
    const [address,setAddress] = useState("")
    const [seed,setSeed] = useState("")
    const [kill,setKill] = useState(false)
    const [workerList,setWorkerList] = useState<Worker[]>([])
    const recoverFromHex = useRecoverFromHex()
    const recoverFromSeed = useRecoverFromSeed()
    const openWallet = useOpenWallet()
    const headers= {
        'Content-Type': 'text/javascript',
      }
    
    const workerScriptURL = `worker.js?${new URLSearchParams(headers).toString()}`;

    const updateTotals=(hashRate:number[],hashCount:number[])=>{
      let rateTotal = 0
      let countTotal = 0
      for(let i=0;i<hashCount.length;i++){
        rateTotal += hashRate[i]
        countTotal += hashCount[i]
      }
      setHashCountTotal(countTotal)
      setHashRateTotal(rateTotal)
    }
    
    const initiateWorker = async () => {
        return new Promise((resolve) => {
          const worker = new Worker(workerScriptURL);
          setWorkerList((workers)=>[...workers,worker])
          worker.onmessage = (event) => {
            if (event.data.type === 'initialized') {
              console.log('Worker initialized');
              resolve(worker);
            }
          };
          worker.postMessage({ type: 'initialize' });
        });
      };
      

     const sendTransaction = async (worker:Worker,hex:string) =>{
        worker.postMessage({
          functionName: 'WalletSendTransaction',
          args: ['key','newWallet',hex]
        })
      } 

    const fastRegister = async(threads:number)=>{
      
      let count = 0
        const promises: Promise<void>[] = [];
        let workers:any = []
        

        for (let i = 0; i < threads; i++) {
          if(status=="kill"){
          
            break
          }
          const promise = new Promise<void>((resolve) => {
            if(status ==="kill"){
              resolve();
            }
            initiateWorker().then((worker) => {
              console.log('Worker initialized:', i);
              count++
              setWorkerCount(count)
              workers.push(worker)
              resolve();
            });
          });
          promises.push(promise);
        }
      
        await Promise.all(promises);
        console.log("I've waited: ",workers)
        setWorkerList(workers)
        let initialHashCount = Array.from({length:workers.length}, ()=>0)
        let initialHashRate = Array.from({length:workers.length}, ()=>0)
        setHashCount(initialHashCount)
        setHashRate(initialHashRate)


        setTxWorker(workers[0])
        workers.slice(1).forEach((worker:any,index:number) => {
          console.log("status is ",status)
          if(status=="kill"){
            killWorkers(workers.slice(1))

            return
            
          }
          
             worker.onmessage = (event: any) => {
              console.log("status is ",status)
              if(status=="kill"){
                killWorkers(workers.slice(1))
                return
              }
            console.log('Updated RegistrationStatus_bingo:', event.data[`bingo${index}`]);
            console.log(initialHashCount)
            initialHashCount[index] = event.data[`bingo${index}`].c 
            initialHashRate[index] = event.data[`bingo${index}`].hr
            console.log("hc",initialHashCount)
            console.log("hr",initialHashRate)
            updateTotals(initialHashRate,initialHashCount)
            if(event.data[`bingo${index}`]?.tx){
              setTxHex(event.data[`bingo${index}`].tx.txHex)
            setAddress(event.data[`bingo${index}`].tx.addr)
            setSeed(event.data[`bingo${index}`].tx.wordSeed)
            foundTX(event.data[`bingo${index}`].tx,workers)
            }
            
            

          };

          
          worker.postMessage({
            functionName: 'FastRegister',
            args: [`bingo${index}`],
          });
    })

    const foundTX = async(tx:any,workers:Worker[])=>{
      console.log("found tx: ",tx)
      for(let i=1;i<workers.length;i++){
        workers[i].terminate()
      }
      let newWallet = await recoverFromSeed(workers[0],tx.wordSeed,"newWallet","password")
     
     await openWallet(workers[0],newWallet,"password")
     setTimeout(() => {
      sendTransaction(workers[0],tx.txHex)
      setStatus("complete")
      setWallet(newWallet)
      
     }, 2000);
      

    }

        }

       
    const killWorkers = (workers:Worker[])=>{
      console.log("kill all workers")
      console.log(workerList)
  
      for(let i=0;i<workers.length;i++){
        
        workers[i].terminate()
      }
      setWorkerList([])
      
      setHashRateTotal(0)
    }

    const stop = ()=>{
      console.log(workerList)
      killWorkers(workerList)
      setWorkerCount(0)
      
      setTimeout(()=>{
        console.log("timeout")
        killWorkers(workerList)
      setWorkerCount(0)
      
      },30000)
      killWorkers(workerList)
      setWorkerCount(0)
      
      
    }
          

    return {fastRegister,stop}
}