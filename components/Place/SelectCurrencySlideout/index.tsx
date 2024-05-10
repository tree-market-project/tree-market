"use client"
import CurrencyTile from "../CurrencyTile";

const SelectCurrencySlideout:React.FC<{setSelectingCurrency:any}> = ({setSelectingCurrency})=>{




return(
<div className="slideout-right relative z-40" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
{/*  <!--
   Background backdrop, show/hide based on slide-over state.

   Entering: "ease-in-out duration-500"
     From: "opacity-0"
     To: "opacity-100"
   Leaving: "ease-in-out duration-500"
     From: "opacity-100"
     To: "opacity-0"
 --> */}
 <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

 <div className="fixed inset-0 overflow-hidden">
   <div className="absolute inset-0 overflow-hidden">
     <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
      {/*  <!--
         Slide-over panel, show/hide based on slide-over state.
         Entering: "transform transition ease-in-out duration-500 sm:duration-700"
           From: "translate-x-full"
           To: "translate-x-0"
         Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
           From: "translate-x-0"
           To: "translate-x-full"
       --> */}
       <div className="pointer-events-auto relative w-screen max-w-md">
        {/*  <!--
           Close button, show/hide based on slide-over state.
           Entering: "ease-in-out duration-500"
             From: "opacity-0"
             To: "opacity-100"
           Leaving: "ease-in-out duration-500"
             From: "opacity-100"
             To: "opacity-0"
         --> */}
         <div className="absolute right-0 top-0 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
           <button onClick={()=>setSelectingCurrency(false)} type="button" className="relative rounded-md text-gray-700 hover:text-cyan-800 focus:outline-none">
             <span className="absolute -inset-2.5"></span>
             <span className="sr-only">Close panel</span>
             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
         </div>
         <div className="flex h-full flex-col overflow-y-scroll scroller bg-gray-200 py-6 shadow-xl rounded-l-xl">
           <div className="px-4 sm:px-6">
             <h2 className="leading-6 text-gray-700" id="slide-over-title">
               Select Currency
             </h2>
           </div>
           <div className="relative flex-1 px-4 mt-6">
            {/*  <!-- Your content --> */}
             <h3 className="font-medium px-4 mb-4">Accepted Coins</h3>
             <div className="slideout-content font-normal rounded-xl space-y-2">

              <CurrencyTile icon="" name="Dero" symbol="DERO" setSelectingCurrency={setSelectingCurrency}/>
               {/* <!-- currency-tile dero --> */}
               <CurrencyTile icon="" name="Bitcoin" symbol="BTC" setSelectingCurrency={setSelectingCurrency}/> 
               {/* <!-- currency-tile btc --> */}
                <CurrencyTile icon="" name="Bitcoin Cash" symbol="BCH" setSelectingCurrency={setSelectingCurrency}/> 
               {/* <!-- currency-tile bch --> */}

               

               

              <CurrencyTile icon="" name="Ethereum" symbol="ETH"setSelectingCurrency={setSelectingCurrency}/> 
              {/* <!-- currency-tile eth --> */}

               <CurrencyTile icon="" name="Litecoin" symbol="LTC" setSelectingCurrency={setSelectingCurrency}/> 
            {/* <!-- currency-tile ltc --> */}
              <CurrencyTile icon="" name="Monero" symbol="XMR" setSelectingCurrency={setSelectingCurrency}/> 
              {/* <!-- currency-tile xmr --> */}
             <CurrencyTile icon="" name="Polygon" symbol="MATIC"setSelectingCurrency={setSelectingCurrency}/>
               {/* <!-- currency-tile matic --> */}
               <CurrencyTile icon="" name="Tron" symbol="TRX" setSelectingCurrency={setSelectingCurrency}/>
              {/* <!-- currency-tile trx --> */}
              <CurrencyTile icon="" name="Tether ERC20" symbol="usdtETH" setSelectingCurrency={setSelectingCurrency}/>
              {/* <!-- currency-tile usdt-eth --> */}
              <CurrencyTile icon="" name="" symbol="usdtMATIC" setSelectingCurrency={setSelectingCurrency}/>
              {/* <!-- currency-tile usdt-matic --> */}
              <CurrencyTile icon="" name="" symbol="usdtTRX" setSelectingCurrency={setSelectingCurrency}/>
              {/* <!-- currency-tile usdt-trx --> */}

             </div>{/* <!-- slideout-content --> */}
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
)
        }
        export default SelectCurrencySlideout;