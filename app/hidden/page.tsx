"use client"

import { useState } from "react"
import DappHeader from "@/components/Place/DappHeader"
import LeftColumn from "@/components/Place/LeftColumn"
import NavMenu from "@/components/Place/NavMenu"
import RightColumn from "@/components/Place/RightColumn"
import CheckoutStepFooter from "@/components/Place/CheckoutStepFooter"
import { useCheckoutContext } from "@/contexts/CheckoutContext"



export default function LEAF(){
  const {checkoutStep,setCheckoutStep,invoice} = useCheckoutContext()
  const [tokenAmount,setTokenAmount] = useState(0)
  const [tokenString,setTokenString]= useState("")
 
return(
  
    <div className="place main-container-body relative min-h-screen overflow-hidden bg-gray-50">
    <div className="desktop-wrapper grid lg:flex lg:flex-row h-dvh">
<NavMenu/>
    {/* <!-- nav-menu --> */}

<div className="content-wrapper grid xl:w-5/6 h-dvh">
  {/* <!-- COMPONENT dApp Header --> */}
  <DappHeader headerText="Support the Development of Tree.Market"/>{/* <!-- dapp-header --> */}

  
    
    
  <div className="relative lg:grid lg:grid-cols-5 xl:grid-cols-3 gap-4 mx-auto h-dvh w-full px-0 overflow-y-scroll lg:overflow-y-hidden scroller">
    {/* <!-- left-col --> */}
    <LeftColumn tokenAmount={tokenAmount} setTokenAmount={setTokenAmount} tokenString={tokenString} setTokenString={setTokenString}/>
<RightColumn tokenAmount={tokenAmount} setTokenAmount={setTokenAmount} tokenString={tokenString} setTokenString={setTokenString}/>
    

  </div>{/* <!-- right-col --> */}

</div>{/* <!-- content-wrapper --> */}

</div>
{checkoutStep!=0?
        <CheckoutStepFooter column="left"/>:""}
 
 

    </div>
    
)
}