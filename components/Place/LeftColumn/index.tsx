"use client"
import { useState } from "react"
import Seed from "../Seed"
import Calculator from "../Calculator"
import Trade from "../Trade"
import Complete from "../Complete"

import Checkout from "../Checkout"
import { useCheckoutContext } from "@/contexts/CheckoutContext"

const LeftColumn:React.FC<{tokenAmount:number,setTokenAmount:any,tokenString:string,setTokenString:any}> = ({tokenAmount,setTokenAmount,tokenString,setTokenString})=>{
    const {checkoutStep,setCheckoutStep} = useCheckoutContext()
    
    const [showCalculator,setShowCalculator] = useState(false)
    const handleShowCalculator = ()=>{
        setShowCalculator(!showCalculator)
      }
    return(
     
        <div className="left-col flex flex-col lg:grid lg:col-span-3 xl:col-span-2 h-auto lg:overflow-y-scroll scroller ">
{showCalculator?<Calculator column="left" handleShowCalculator={handleShowCalculator} tokenAmount={tokenAmount} setTokenAmount={setTokenAmount} tokenString={tokenString} setTokenString={setTokenString}/>:""}
      
   <div className="content-container flex-col relative mx-auto w-full lg:hidden px-4 sm:px-6 lg:px-0">
   <div className={`${checkoutStep==0?"hidden lg:block":""} clear-both h-6`}></div>  
  {checkoutStep==1?
  
  <Checkout column="left"/>
 
  :
  checkoutStep==2?
  
  <Trade column="left"/>
  :
  checkoutStep==3?<Complete column="left"/>
  :""} </div>
      {/* <!-- COMPONENT Content Container --> */}
      
      
      <Seed handleShowCalculator={handleShowCalculator}/>
      {/* <!-- content-container --> */}
      
      {/* <!-- // conditional clear-both depending on screen // --> */}
      
      
<div className={`clear-both ${checkoutStep!=0?"h-[250px]":"h-[80px]"} lg:h-[80px]`}></div>


    </div>
    
    )
}

export default LeftColumn