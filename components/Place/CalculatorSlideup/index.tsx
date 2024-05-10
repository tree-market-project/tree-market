"use client"

import { useState } from "react"
import { useCheckoutContext } from "@/contexts/CheckoutContext"
import updateTokenString from "@/utils/updateTokenString"

const CalculatorSlideup:React.FC<{handleShowCalculator:any,tokenAmount:number,setTokenAmount:any,tokenString:string,setTokenString:any}> = ({handleShowCalculator,tokenAmount,setTokenAmount,tokenString,setTokenString})=>{
  const {invoice,setInvoice} = useCheckoutContext()
  
  
  const addTokens = (increment:number)=>{
   var total = Math.max(0,tokenAmount+increment) 
    setTokenAmount(total)
    updateTokenString(total,setTokenString)
  }

 

  const updateInvoice = ()=>{
    setInvoice({...invoice,Quantity:tokenAmount})
   }


    return(
        <div className="calculator-slide-up w-full fixed bottom-0 left-0 right-0 z-30 bg-gray-100 rounded-t-2xl px-4 sm:px-6 lg:px-8 py-4 max-h-screen overflow-y-scroll scroller lg:hidden">
{/*different here*/}
    <div className="absolute right-4 top-0 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
           <button type="button" className="relative rounded-md text-gray-700 hover:text-cyan-800 focus:outline-none">
        <span onClick={handleShowCalculator} className="absolute -inset-2.5"></span>
        <span className="sr-only">Close panel</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    {/*same til here*/}
    <div className="flex flex-col gap-4">
{/*different here*/}

      <div className="font-medium">Amount</div>
      <div className="border-gray-300 border-t border-b text-center py-3">{tokenString}</div>
      <div className="totals grid grid-cols-2 items-center text-center pb-3 border-b border-gray-300">
        <div className="currency pt-3 cursor-pointer">
          <div className="text-sm text-gray-700">USDT</div>
          <div className="text-xl sm:text-2xl font-medium text-center">
            <input type="text" value={(tokenAmount*2.99).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })} name="donation_amt" id="donation_amt" placeholder="0" className="py-1 bg-transparent focus:border-none focus:ring-0 focus:ring-inset focus:ring-gray-50 px-2 placeholder:text-gray-900 font-semibold text-center w-full"/></div>
  <div className="selected h-[4px] bg-gray-700 w-[60%] rounded-t-lg mx-auto"></div>
        </div>
        <div className="currency pt-3 cursor-pointer">
          <div className="text-sm text-gray-700">Tokens</div>
          <div className="text-xl sm:text-2xl font-medium text-center">
            <input type="text" value={tokenAmount} name="donation_amt" id="donation_amt" placeholder="0" className="py-1 bg-transparent focus:border-none focus:ring-0 focus:ring-inset focus:ring-gray-50 px-2 placeholder:text-gray-900 font-semibold text-center w-full z-10"/></div>
<div className="selected h-[4px] bg-gray-700 w-[60%] rounded-t-lg mx-auto"></div>
          
        </div>
      </div>{/* <!-- totals --> */}
      <div className="calculator-buttons border-2 border-gray-300 rounded-xl bg-gray-200">
          <div className="calc-row grid grid-cols-2 items-center content-center text-center border-b-2 border-gray-300">
            <div onClick={()=>addTokens(-1)} className="border-r border-gray-400 p-4 cursor-pointer hover:shadow-inner">-1</div>
            <div onClick={()=>addTokens(1)} className="p-4 cursor-pointer hover:shadow-inner">+1</div>
          </div>
          <div className="calc-row grid grid-cols-2 items-center content-center text-center border-b-2 border-gray-300">
            <div onClick={()=>addTokens(-10)} className="border-r border-gray-400 p-4 cursor-pointer hover:shadow-inner">-10</div>
            <div onClick={()=>addTokens(10)} className="p-4 cursor-pointer hover:shadow-inner">+10</div>
          </div>
          <div className="calc-row grid grid-cols-2 items-center content-center text-center border-b-2 border-gray-300">
            <div onClick={()=>addTokens(-25)} className="border-r border-gray-400 p-4 cursor-pointer hover:shadow-inner">-25</div>
            <div onClick={()=>addTokens(25)} className="p-4 cursor-pointer hover:shadow-inner">+25</div>
          </div>
          <div className="calc-row grid grid-cols-2 items-center content-center text-center border-b-2 border-gray-300">
            <div onClick={()=>addTokens(-100)} className="border-r border-gray-400 p-4 cursor-pointer hover:shadow-inner">-100</div>
            <div onClick={()=>addTokens(100)} className="p-4 cursor-pointer hover:shadow-inner">+100</div>
          </div> 
          <div className="calc-row grid grid-cols-2 items-center content-center text-center border-b-2 border-gray-300">
            <div onClick={()=>addTokens(-1000)} className="border-r border-gray-400 p-4 cursor-pointer hover:shadow-inner">-1000</div>
            <div onClick={()=>addTokens(1000)} className="p-4 cursor-pointer hover:shadow-inner">+1000</div>
          </div>
          <div className="calc-row grid items-center content-center text-center">
            <div onClick={()=>{setTokenAmount(0);setTokenString("")}} className="p-4 cursor-pointer hover:shadow-inner">Clear</div>
          </div> 
        </div>{/* <!-- calculator-buttons --> */}
      <div className="calc-actions flex justify-between items-center gap-6 px-0">
        <div onClick={handleShowCalculator} className="bg-gray-200 px-6 rounded-3xl py-2 cursor-pointer hover:shadow-lg">Cancel</div>
        <div onClick={()=>{handleShowCalculator();updateInvoice()}} className="border-2 border-gray-900 px-6 py-2 rounded-xl grow text-center cursor-pointer hover:shadow-lg">&#10003; Confirm</div>
      </div>
    </div>
  </div>
    )
}
export default CalculatorSlideup