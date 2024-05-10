"use client"

import { createContext, useContext,useState,ReactNode } from "react"
import { CheckoutContextType, InvoiceRequestBody } from "../types"
import deroIcon from "@/public/images/currency-icons/dero-icon.png"

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined)

const initialCheckoutState:CheckoutContextType={
    checkoutStep:0,
    setCheckoutStep:()=>{},
    invoice:{
        Quantity:0,
        DonationAmount:"0.00",
        Currency:"",
        SeedOutTXID:"",
        IncomingTXID:"",
        DeroAddress:"",
        Email:"",
        SeedID:"",
        Payments:[],
        Status:"",
        Integrated:"",
        CryptoReceived:"",
        Password:"",
        CompletedTimestamp:""
    },
    setInvoice:()=>{},
    selectedCurrency:{symbol:"dero",name:"Dero",icon:deroIcon,currency:"dero"},
    setSelectedCurrency:()=>{}
}

export const useCheckoutContext = ()=>{
    const context = useContext(CheckoutContext);
    if(!context){
        throw new Error('useCheckoutContext must be used within a CheckoutProvider');
    }
    return context;
}

type CheckoutProviderProps = {
    children: ReactNode;
  };
  
  // Create the provider component
  export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({ children }) => {
    const [checkoutStep, setCheckoutStep] = useState(initialCheckoutState.checkoutStep);
    const [selectedCurrency,setSelectedCurrency] = useState(initialCheckoutState.selectedCurrency)
    const [invoice, setInvoice] = useState<InvoiceRequestBody>(initialCheckoutState.invoice);
  
    const contextValue: CheckoutContextType = {
      checkoutStep,
      setCheckoutStep,
      invoice,
      setInvoice,
      setSelectedCurrency,
      selectedCurrency
    };
  
    return (
      <CheckoutContext.Provider value={contextValue}>
        {children}
      </CheckoutContext.Provider>
    );
  };