"use client"

import { createContext, useContext,useState,ReactNode } from "react"
import { VaultContextType} from "@/types"

const VaultContext = createContext<VaultContextType | undefined >(undefined)



const initialVaultState:VaultContextType={
    setSelectedToken:()=>{}
}

export const useVaultContext = ()=>{
    const context = useContext(VaultContext);
    if(!context){
        throw new Error('useVaultContext must be used within a VaultProvider');
    }
    return context;
}

type VaultProviderProps = {
    children: ReactNode;
  };
  
  // Create the provider component
  export const VaultProvider: React.FC<VaultProviderProps> = ({ children }) => {
    const [selectedToken, setSelectedToken] = useState(initialVaultState.selectedToken);
  
    const contextValue: VaultContextType = {
      selectedToken,
      setSelectedToken
    };
  
    return (
      <VaultContext.Provider value={contextValue}>
        {children}
      </VaultContext.Provider>
    );
  };