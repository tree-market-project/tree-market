"use client"

import { createContext, useContext,useState,ReactNode } from "react"
import { FastRegistrationContextType} from "@/types"

const FastRegistrationContext = createContext<FastRegistrationContextType | undefined >(undefined)

const initialFastRegistrationState:FastRegistrationContextType={
    workerCount:0,
    setWorkerCount:()=>{},
    hashCount:[],
    setHashCount:()=>{},
    hashRate:[],
    setHashRate:()=>{},
    hashCountTotal:0,
    setHashCountTotal:()=>{},
    hashRateTotal:0,
    setHashRateTotal: ()=>{},
    status:"idle",
    setStatus:()=>{},
    wallet:null,
    setWallet:()=>{},
    txWorker:null,
    setTxWorker:()=>{}

}

export const useFastRegistrationContext = ()=>{
    const context = useContext(FastRegistrationContext);
    if(!context){
        throw new Error('useFastRegistrationContext must be used within a FastRegistrationProvider');
    }
    return context;
}

type FastRegistrationProviderProps = {
    children: ReactNode;
  };
  
  // Create the provider component
  export const FastRegistrationProvider: React.FC<FastRegistrationProviderProps> = ({ children }) => {
    const [workerCount, setWorkerCount] = useState(initialFastRegistrationState.workerCount);
    const [hashCount,setHashCount] = useState(initialFastRegistrationState.hashCount)
    const [hashRate,setHashRate] = useState(initialFastRegistrationState.hashRate)
    const [hashRateTotal,setHashRateTotal] = useState(initialFastRegistrationState.hashRateTotal)
    const [hashCountTotal,setHashCountTotal] = useState(initialFastRegistrationState.hashCountTotal)
    const [status,setStatus] = useState(initialFastRegistrationState.status)
    const [wallet,setWallet] = useState(initialFastRegistrationState.wallet)
    const [txWorker,setTxWorker] = useState(initialFastRegistrationState.txWorker)
  
    const contextValue: FastRegistrationContextType = {
      workerCount,
      setWorkerCount,
      hashCount,
      setHashCount,
      hashRate,
      setHashRate,
      hashRateTotal,
      setHashRateTotal,
      hashCountTotal,
      setHashCountTotal,
      status,
      setStatus,
      wallet,
      setWallet,
      txWorker,
      setTxWorker
    };
  
    return (
      <FastRegistrationContext.Provider value={contextValue}>
        {children}
      </FastRegistrationContext.Provider>
    );
  };