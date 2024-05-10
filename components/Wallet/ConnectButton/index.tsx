"use client"

import { Api,AppInfo,generateAppId } from "dero-xswd-api";
import { useGetAddress } from "@/hooks/useGetAddress";
import { useWalletContext } from "@/contexts"
// @ts-ignore
import DeroBridgeApi from "dero-rpc-bridge-api"
import { useCallback, useRef, useState } from "react";
import to from 'await-to-js'
import { wallet } from "@/types";


interface DeroRPCType {
  init: () => Promise<void>;
}

const ConnectButton = ()=>{
  const {activeWallet,setActiveWallet} = useWalletContext()
  const getAddress = useGetAddress()
  const deroBridgeApiRef = useRef();
  const [worker,setWorker]:any = useState(null)

    const connectXSWD = async()=>{
        const name = "Tree Market";

const appInfo:AppInfo = {
  id: await generateAppId(name),
  name,
  description: `Tree.Market | The Unstoppable Free-Market Ecosystem
  100% decentralized, interoperable, and open source point-of-sale solution for an unstoppable P2P economy, without intermediaries.`,
};

const xswd = new Api(appInfo);



await xswd.initialize();
const newWallet:wallet = {
  app:"g45w",
  name:"g45w",
  connection:"xswd",
  address:"",
  fileData:null,
  password:"",
  seed:"",
  hexSeed:"",
  open:false,
  active:false,
  balances:[{name:"Dero",symbol:"DERO",scid:"0000000000000000000000000000000000000000000000000000000000000000",decimals:5,iconURL:"/images/currency-icons/dero-icon.png"},{name:"Leaf Token",symbol:"LEAF",scid:"e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4",decimals:5}]
}
setActiveWallet(newWallet)
getAddressXSWD(xswd)
    }

    const getAddressXSWD = async(xswd:Api)=>{
      const address = await xswd.wallet.GetAddress()
      console.log("address ",address)
    }

    const connectRPC = async()=>{
      deroBridgeApiRef.current = new DeroBridgeApi()
      const deroBridgeApi = deroBridgeApiRef.current
      if(deroBridgeApi !== undefined){
        const deroRPCApi = deroBridgeApi as DeroRPCType
       
      if (deroRPCApi){
        const [err] = await to(deroRPCApi.init())
         if (err){
        console.log("ERR",err)
      }else {
        console.log("Success!")
      }
      }
    }
    const newWallet:wallet ={
      app:"Engram",
      connection:"rpc",
      name:"Engram",
      address:"",
      fileData:null,
      seed:"",
      hexSeed:"",
      password:"",
      active:false,
      open:false,
      balances:[{name:"Dero",symbol:"DERO",scid:"0000000000000000000000000000000000000000000000000000000000000000",decimals:5,iconURL:"/images/currency-icons/dero-icon.png"}]
    }
      setActiveWallet(newWallet)
    }

/*     const getAddressRPC = useCallback(async()=>{
      const deroBridgeApi = deroBridgeApiRef.current;

      const [err,res] = await to(deroBridgeApi.wallet("get-address",{}))
      console.log("get-address-error",err)
      console.log("address ",res)
    }) */

    const initiateWorker = async ()=> {
        
        const worker = new Worker('worker.js');
       worker.postMessage({ type: 'initialize' });

        getAddress()
       console.log(window)
       setWorker(worker)
    }

    const recoverFromSeed = async () => {
      const walletInfo :any = await new Promise((resolve)=>{
        worker.onmessage = (event:any) =>{
          resolve(event.data.result)
        }
        worker.postMessage({
          functionName: 'RecoverWalletFromSeed',
          args: ["password","mammal bumper system occur arena mews bounced cowl sulking seeded bulb masterful trash reheat rodent natural lordship tribal neither keyboard safety morsel soothe semifinal mammal"]
        });
      });
      const arrayBuffer = new Uint8Array(walletInfo.value.fileData).slice();
    const decoder = new TextDecoder();
    const jsonString = decoder.decode(arrayBuffer);
    const jsonObject = JSON.parse(jsonString);
    const fileData = JSON.stringify(jsonObject);
    let wallet = walletInfo.value
    wallet.name = "wallet"
    wallet.fileData=fileData
    wallet.open = false
    wallet.balances=[{name:"Dero",scid:"0000000000000000000000000000000000000000000000000000000000000000",decimals:5,iconURL:"/images/currency-icons/dero-icon.png"}]

    
    worker.postMessage({
      functionName:"OpenWallet",
      args:[wallet.name,"password",wallet.fileData,true]
    })


    }

    const fastRegistration = async () => {
      // Set up the event listener once to capture updates from the worker
      worker.onmessage = (event: any) => {
        console.log('Updated RegistrationStatus_bingo:', event.data.bingo);
      };
    
      // Send the initial message to trigger the FastRegister function
      worker.postMessage({
        functionName: 'FastRegister',
        args: ['bingo'],
      });
    };

    const sendTransaction = async () =>{
      worker.postMessage({
        functionName: 'WalletSendTransaction',
        args: ['key','wallet',"010000012157a33c8edd44b6da1085858f2d3260d3223430f74c183d8c9e3439083052d700279234b6aa751ff3a550866dae22c895589b9fd97ecf39a94bcc7fb12b2951fb013f302398a3c8436f6247aaea7c00c2bc3dd9a1403b68b8cfe126d7f85467ae"]
      })
    }

    const logWorkerSelf = async ()=>{
      console.log(worker)
    }
   
      

    return(
        <>
        <div onClick={connectXSWD} className="px-6 py-2 bg-slate-200 rounded-full cursor-pointer hover:shadow-md">
        Connect xswd
      </div>
      <div onClick={initiateWorker} className="px-6 py-2 bg-slate-200 rounded-full cursor-pointer hover:shadow-md">
        initiate wasm
      </div>
      <div onClick={recoverFromSeed} className="px-6 py-2 bg-slate-200 rounded-full cursor-pointer hover:shadow-md">
        recover from seed
      </div>
      <div onClick={fastRegistration} className="px-6 py-2 bg-slate-200 rounded-full cursor-pointer hover:shadow-md">
        Fast Registration
      </div>
      <div onClick={sendTransaction} className="px-6 py-2 bg-slate-200 rounded-full cursor-pointer hover:shadow-md">
        send Registration
      </div>
      <div onClick={logWorkerSelf} className="px-6 py-2 bg-slate-200 rounded-full cursor-pointer hover:shadow-md">
  log worker self      </div>
      


      <div onClick={connectRPC} className="px-6 py-2 bg-slate-200 rounded-full cursor-pointer hover:shadow-md">
        Connect RPC
      </div>
      <h4>{activeWallet && activeWallet.connection}</h4>
        </>
        )
}


export default ConnectButton