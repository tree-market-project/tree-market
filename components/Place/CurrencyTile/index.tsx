"use client"
import Image from "next/image";
import dero from "@/public/images/currency-icons/dero-icon.png"
import eth from "@/public/images/currency-icons/eth-icon.png"
import btc from "@/public/images/currency-icons/btc-icon.png"
import bch from "@/public/images/currency-icons/bch-icon.png"
import xmr from "@/public/images/currency-icons/xmr-icon.png"
import ltc from "@/public/images/currency-icons/ltc-icon.png"
import matic from "@/public/images/currency-icons/matic-icon.png"
import trx from "@/public/images/currency-icons/trx-icon.png"


import getCurrencyData from "@/utils/getCurrencyData";
import { useCheckoutContext } from "@/contexts/CheckoutContext";

const CurrencyTile: React.FC<{name:string,symbol:string,icon:string, setSelectingCurrency:any}> = ({name,symbol,icon,setSelectingCurrency})=>{
  const {setSelectedCurrency} = useCheckoutContext()
  const currency = getCurrencyData(symbol)
  
    return(
        <div onClick={()=>{setSelectingCurrency(false);setSelectedCurrency(currency)}}  className="currency-tile relative flex items-center justify-between gap-2 w-full bg-gray-50 px-3 py-4 mx-auto rounded-lg shadow-sm shadow-gray-400 text-gray-700 cursor-pointer hover:shadow-inner hover:shadow-gray-300">
                 <div className="currency-info flex items-center gap-2">
                   <div className="icon">
                    <Image width={24} height={24} alt={currency?.symbol} src={currency.icon}/>
                   
                   </div>{/* <!-- icon --> */}
                   <div className="name">
                     <div className="product-name text-sm font-medium">{currency?.name}</div>
                     <div className="category-name text-xs text-gray-700">{currency?.symbol}</div>
                   </div>
                 </div>{/* <!-- currency-info --> */}
               </div>
    )
}
export default CurrencyTile