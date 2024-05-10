"use client"

import { ChangeEvent, useState } from "react"
import { useCheckoutContext } from "@/contexts/CheckoutContext"
import updateTokenString from "@/utils/updateTokenString"

const Calculator:React.FC<{column:string,handleShowCalculator:any,tokenAmount:any,setTokenAmount:any,tokenString:string,setTokenString:any}> = ({column,handleShowCalculator,tokenAmount,setTokenAmount,tokenString,setTokenString})=>{
  const {invoice,setInvoice} = useCheckoutContext()
  const [tokenMode,setTokenMode] = useState(false)
  const [donationAmount,setDonationAmount] = useState((invoice.Quantity*2.99).toLocaleString('en-US'))
  
  const addTokens = (increment:number)=>{
    if(!tokenMode){
      increment = parseFloat((increment/2.99).toFixed(5))
    }
   var total = parseFloat(Math.max(0,tokenAmount+increment).toFixed(5)) 
    setTokenAmount(total)
    setDonationAmount((total*2.99).toLocaleString('en-US'))
    updateTokenString(Math.floor(total),setTokenString)
  }

  const handleUSDTChange = (e:ChangeEvent<HTMLInputElement>) =>{
    let input=e.target.value
   let amount = parseFloat(input.replace(/[^\d.-]/g, ''))
   if(amount){
    setDonationAmount(amount.toLocaleString('en-US'))
    setTokenAmount(parseFloat((amount/2.99).toFixed(5)))
    updateTokenString(parseFloat((amount/2.99).toFixed(5)),setTokenString)
   }else{
    setDonationAmount("0")
    setTokenAmount(0)
    setTokenString("")
   }
   
  }

  const handleTokenChange = (e:ChangeEvent<HTMLInputElement>)=>{
    let input = parseFloat(e.target.value)
    if(input){
      setTokenAmount(input)
      setDonationAmount((input*2.99).toLocaleString('en-US'))
      updateTokenString(input,setTokenString)
    }
    else{
      setTokenAmount(0)
      setDonationAmount("0")
      setTokenString("")
    }
   
  }



  const updateInvoice = ()=>{
   setInvoice({...invoice,Quantity:tokenAmount,DonationAmount:(tokenAmount*2.99).toFixed(2)})
  }

    return(
        
        <div className={`calculator-slide-up w-full ${column=="right"?'grid h-full':'fixed bottom-0 left-0 right-0 z-30 bg-gray-100 rounded-t-2xl px-4 sm:px-6 lg:px-8 py-4 max-h-screen overflow-y-scroll scroller lg:hidden'}`}>

          <div className="absolute right-4 top-3 flex p-4 sm:-ml-10 sm:pr-4">
        <button type="button" className="relative rounded-md text-gray-700 hover:text-cyan-800 focus:outline-none">
          <span onClick={handleShowCalculator} className="absolute -inset-2.5"></span>
          <span className="sr-only">Close panel</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className={`flex flex-col gap-4 ${column=="left"?'p-3 bg-gray-100 rounded-2xl shadow-md shadow-gray-400':''}`}>

        <div className="font-medium">Amount</div>
        <div className="border-gray-300 border-t border-b text-center py-3">{tokenString}</div>
        <div className="totals grid grid-cols-2 items-center text-center pb-3 border-b border-gray-300">
          <div onClick={()=>{setTokenMode(false)}} className="currency pt-3 cursor-pointer">
            <div className="text-sm text-gray-700">USDT</div>
            <div className="text-xl sm:text-2xl font-medium text-center">
            <input onChange={handleUSDTChange} type="text" value={"$"+donationAmount} name="donation_amt" id="donation_amt" placeholder="0" className="py-1 bg-transparent focus:border-none focus:ring-0 focus:ring-inset focus:ring-gray-50 px-2 placeholder:text-gray-900 font-semibold text-center w-full"/>
             {/*  <input onChange={handleUSDTChange} type="text" value={(tokenAmount*2.99).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })} name="donation_amt" id="donation_amt" placeholder="0" className="py-1 bg-transparent focus:border-none focus:ring-0 focus:ring-inset focus:ring-gray-50 px-2 placeholder:text-gray-900 font-semibold text-center w-full"/> */}
  </div>
  {!tokenMode && <div className="selected h-[4px] bg-gray-700 w-[60%] rounded-t-lg mx-auto"></div>}
          </div>
          <div onClick={()=>{setTokenMode(true)}} className="currency pt-3 cursor-pointer">
            <div className="text-sm text-gray-700">Tokens</div>
            <div className="text-xl sm:text-2xl font-medium text-center"><input onChange={handleTokenChange} type="text" value={tokenAmount} name="donation_amt" id="donation_amt" placeholder="0" className="py-1 bg-transparent focus:border-none focus:ring-0 focus:ring-inset focus:ring-gray-50 px-2 placeholder:text-gray-900 font-semibold text-center w-full z-10"/></div>
           {tokenMode && <div className="selected h-[4px] bg-gray-700 w-[60%] rounded-t-lg mx-auto"></div>}
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
            <div onClick={()=>{setDonationAmount("0");setTokenAmount(0);setTokenString("")}} className="p-4 cursor-pointer hover:shadow-inner">Clear</div>
          </div> 
        </div>{/* <!-- calculator-buttons --> */}
        <div className="calc-actions flex justify-between items-center gap-6 px-0">
          <div onClick={handleShowCalculator} className="bg-gray-200 px-6 rounded-3xl py-2 cursor-pointer hover:shadow-inner hover:shadow-gray-400">Cancel</div>
          <div onClick={()=>{handleShowCalculator();updateInvoice()}} className="border-2 border-gray-900 px-6 py-2 rounded-xl grow text-center cursor-pointer hover:shadow-inner hover:shadow-gray-400">&#10003; Confirm</div>
        </div>
      </div>
    </div>
    )
}

export default Calculator