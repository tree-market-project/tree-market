"use client"

import CreateCart from "../CreateCart";

const CheckoutContainer: React.FC<{handleShowCalculator:any}> = ({handleShowCalculator})=>{
    return(
        <div className="lg:hidden checkout-container flex flex-col gap-6">
        <CreateCart column={"left"} handleShowCalculator={handleShowCalculator}/>
      </div>
    )
}

export default CheckoutContainer;