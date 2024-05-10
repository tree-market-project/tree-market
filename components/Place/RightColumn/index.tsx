"use client"

import { useState } from "react"
import Checkout from "../Checkout"
import CreateCart from "../CreateCart"
import CheckoutStepFooter from "../CheckoutStepFooter"
import Calculator from "../Calculator"
import Trade from "../Trade"
import Complete from "../Complete"
import { InvoiceRequestBody } from "@/types"
import { useCheckoutContext } from "@/contexts/CheckoutContext"
import Expired from "../Expired"
const RightColumn:React.FC<{tokenAmount:number,setTokenAmount:any,tokenString:string,setTokenString:any}> = ({tokenAmount,setTokenAmount,tokenString,setTokenString})=>{
  const {invoice,setInvoice,checkoutStep,setCheckoutStep} = useCheckoutContext()
  const [showCalculator,setShowCalculator] = useState(false)
  

  const handleShowCalculator = ()=>{
    setShowCalculator(!showCalculator)
    setTokenAmount(invoice.Quantity)
  }



return( <div className="right-col relative hidden lg:grid lg:col-span-2 xl:col-span-1 border-l lg:border-r border-gray-400 lg:mr-4 h-dvh px-4 sm:px-6 lg:px-0">
<div className="right-container relative flex flex-col justify-start px-4 py-4 mb-[160px] shadow-gray-400 h-auto overflow-y-scroll scroller">
 {/*  <!-- //// START RIGHT CONTAINER FOR COMPONENTS
   >> This is the area to place the checkout/waiting-confirmation/confirmed/expired screens <<
  //// --> */}
  <div className={`${showCalculator?"hidden":""} content-inner grid gap-6 mb-[70px]`}>
  {checkoutStep==0?
  <div className="checkout-container flex flex-col gap-6 bg-white rounded-2xl p-4 shadow-md shadow-gray-400">
    
  <CreateCart column="right" handleShowCalculator={handleShowCalculator}/>
  </div>
  :
  checkoutStep==1?
  <Checkout column="right"/>
:
checkoutStep ==2 || checkoutStep==4?
<Trade column="right"/>
:
checkoutStep == 3?
<Complete column="right"/>
:
""
}
  </div>
  {/* <!-- checkout-container --> */}

  {/* <!-- //// end RIGHT CONTAINER FOR COMPONENTS //// --> */}

 {/*  <!-- COMPONENT Calculator | right-col/desktop --> */}
 <div className={`${showCalculator?"":"hidden"} calc-wrapper flex flex-col mb-[70px]`}>
        

     <Calculator column="right" handleShowCalculator={handleShowCalculator} tokenAmount={tokenAmount} setTokenAmount={setTokenAmount} tokenString={tokenString} setTokenString={setTokenString} />      
        
        </div>


</div>{/* <!-- right-container --> */}

{/* <!-- COMPONENT Check Out Footer --> */}
<CheckoutStepFooter  column="right" />{/* <!-- stepbystep-footer --> */}

</div>)

}

export default RightColumn