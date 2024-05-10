"use client"

import { createContext, useContext,useState,ReactNode } from "react"
import { WalletContextType, wallet } from "@/types"

const WalletContext = createContext<WalletContextType | undefined >(undefined)

function getWalletItemsFromLocalStorage() {
  const walletItems:wallet[] = [];
  if(typeof window == 'undefined'){
    return walletItems
  }
  
  const pattern = /^wallet-/;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (pattern.test(key||"")) {
      const walletItem:wallet = JSON.parse(localStorage.getItem(key||"")||"");
      walletItems.push(walletItem);
    }
  }

  return walletItems;
}



const walletList = getWalletItemsFromLocalStorage();

const initialWalletState:WalletContextType={
    worker:null,
    setWorker:()=>{},
    activeWallet:null,
    setActiveWallet:()=>{},
    walletList:walletList,
    setWalletList:()=>{},
    deroBridgeApiRef:null,
    setDeroBridgeApiRef:()=>{},
    setXSWD:()=>{},

}

export const useWalletContext = ()=>{
    const context = useContext(WalletContext);
    if(!context){
        throw new Error('useWalletContext must be used within a WalletProvider');
    }
    return context;
}

type WalletProviderProps = {
    children: ReactNode;
  };
  
  // Create the provider component
  export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
    const [activeWallet, setActiveWallet] = useState(initialWalletState.activeWallet);
    const [walletList,setWalletList] = useState(initialWalletState.walletList)
    const [worker,setWorker] = useState(initialWalletState.worker)
    const [deroBridgeApiRef,setDeroBridgeApiRef] = useState(initialWalletState.deroBridgeApiRef)
    const [xswd,setXSWD] = useState(initialWalletState.xswd)
  
    const contextValue: WalletContextType = {
      worker,
      setWorker,
      activeWallet,
      setActiveWallet,
      walletList,
      setWalletList,
      deroBridgeApiRef,
      setDeroBridgeApiRef,
      xswd,
      setXSWD
    };
  
    return (
      <WalletContext.Provider value={contextValue}>
        {children}
      </WalletContext.Provider>
    );
  };