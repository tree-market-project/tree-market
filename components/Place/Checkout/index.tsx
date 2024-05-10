"use client"
import { useCheckoutContext } from "@/contexts/CheckoutContext"
import { useState,ChangeEvent,useRef} from "react"
import SelectCurrencySlideout from "../SelectCurrencySlideout"
import Image from "next/image"
import { useCheckDeroAddress } from "@/hooks/useCheckDeroAddress"


const Checkout:React.FC<{column:string}> = ({column})=>{
  const {invoice,setInvoice,selectedCurrency} = useCheckoutContext()
  const [redeemLater,setRedeemLater] = useState(false)
  const [error,setError] = useState(false)
  const [selectingCurrency,setSelectingCurrency] = useState(false)
  const [deroAddress,setDeroAddress] = useState("")
  const [registered,setRegistered] = useState(false)
  
  const [cryptoAmount,setCryptoAmount] = useState("")
  const checkDeroAddress = useCheckDeroAddress()
  let currentRequest = 0
  const handleChangeAddress=async (e:ChangeEvent<HTMLInputElement>)=>{
    setError(false)
    setRegistered(false)
    setDeroAddress(e.target.value)

    currentRequest++;
    const requestNumber = currentRequest

    let addressObject = await checkDeroAddress(e.target.value) 
    if(requestNumber === currentRequest){
     
      if(addressObject.registered){
      setRegistered(true)
      setInvoice({...invoice,DeroAddress:addressObject.address})
      setError(false)
    }else{
      setError(true)
      setRegistered(false)
    }
    }else{
      return
    }
    
    
  }

  const debounce = (func: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout> | null;
  
    return (...args: any[]) => {
      clearTimeout(timeoutId!);
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };
  
  // Debounce the handleChangeAddress function with a delay of 300 milliseconds
  const debouncedHandleChangeAddress = useRef(debounce(handleChangeAddress, 300)).current;
  
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDeroAddress(e.target.value)
    debouncedHandleChangeAddress(e);
  };

    return(
       
          <div className="content-inner grid gap-6">

           {/*  <!-- COMPONENT Check Out Items --> */}
            <div className="checkout-items grid gap-4 bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">     
              <h3 className="font-medium">Items</h3>
              <div className="item-tile relative grid grid-flow-col gap-4 items-center w-full bg-gray-100 px-3 py-3 ring-1 ring-gray-900/5 mx-auto rounded-lg cursor-default">
                <div className="cat-name">
                  <div className="category-name text-xs text-gray-700">Collectibles</div>
                  <div className="item-name font-medium">LEAF Token</div>
                </div>
                <div className="grid grid-flow-col gap-6 items-center justify-end">
                  <div className="quantity relative pr-1 rounded-sm ring-0 flex items-center text-gray-800 cursor-default">
                    x
                    <div className="h-full inline-block px-2 py-2">
                      {invoice.Quantity}
                    </div>
                    <div>
                     
                    </div>
                  </div>{/* <!-- quantity --> */}
                  <div className="price">
                    <div className="category-name font-medium">$2.99</div>
                  </div>
                </div>
              </div>{/* <!-- item-tile --> */}

              <div className="total divide-y-2 divide-dashed divide-gray-400">
                <div className="flex justify-center">
                </div>
                <div className="flex justify-between px-2 font-bold pt-4">
                  <div>Total After Dues</div>
                  <div>{(invoice.Quantity*2.99).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })}</div>
              </div>
              </div>{/* <!-- total --> */}
            </div>{/* <!-- checkout-items --> */}

            {/* <!-- COMPONENT Receiving Method --> */}
            <div className="receiving-method grid gap-4 bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">     
              <h3 className="font-medium">Receiving Method</h3>

                <div className="receiving-selector border-b">
                  <div className="grid grid-cols-2 text-center">
                    <div onClick={()=>setRedeemLater(false)} className="text-cyan-700 font-medium cursor-pointer">
                      <div className="py-8">Dero Wallet</div>
                      {!redeemLater && <div className={`selected h-[4px] bg-cyan-800 w-24 rounded-t-lg mx-auto`}></div>}
                    </div>
                    <div onClick={()=>setRedeemLater(true)} className="text-cyan-700 font-medium cursor-pointer">
                      <div className="py-8">Redeem Later</div>
                    { redeemLater&& <div className={`selected h-[4px] bg-cyan-800 w-24 rounded-t-lg mx-auto`}></div>}
                    </div>
                  </div>
                </div>{/* <!-- receiving-selector --> */}

                {redeemLater?
                <div className="save-details grid gap-4">
                  {/* <!-- COMPONENT Notification.info --> */}
                  <div className="notification info flex items-start border-2 border-gray-200 bg-amber-50 p-3 rounded-sm gap-2">
                    <div className="px-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_14775_469299)">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z" fill="#94A3B8"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_14775_469299">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="text-sm grid gap-4">
                      <p>You will be provided a unique <b>One-Time-Password (OTP)</b> upon checkout confirmation. Please make sure you store it safely along with the following information; <b>Receipt ID</b>, <b>Currency used</b>, and the <b>exact amount you sent</b>.</p>
                      <p>You will need it to claim your Tokens afterwards.</p>
                    </div>
                  </div>{/* <!-- notification.info --> */}
                  <div className="save-confirmation grid grid-flow-col justify-start items-center gap-3 mx-auto w-full px-2">
                    <input id="agree_risk" type="checkbox" value="" className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2"/>
                    <label htmlFor="agree_risk" className="checkbox text-sm font-medium">I understand the risks of losing this data, and I wish to proceed.</label>
                  </div>{/* <!-- save-confirmation --> */}
                </div>
                :<div className="dero-address grid gap-4">
                  <div className="shipping-form grid gap-3">
                    <div className="input-field relative grid items-center px-2 py-3 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg bg-gray-200 leading-tight">
                      <label htmlFor="address" className="user-name text-xs px-2">Dero Address for Token Deposit</label>
                      <input onChange={handleInput} type="test" name="address" id="address" value={deroAddress}placeholder="Tap to add" className="py-1 bg-transparent font-medium focus:border-none focus:ring-0 focus:ring-inset focus:ring-gray-50 px-2 placeholder:text-gray-900"/>{registered&&<div className="absolute inset-y-0 right-4 flex items-center text-2xl font-bold cursor-pointer z-20 text-green-700">&#10003;</div>}
                    </div>{/* <!-- input-field --> */}
                    {error?<div className="text-sm text-red-600 px-4">Address Unregistered</div>:""}
                  </div>{/* <!-- shipping-form --> */}
                  <div className="address-confirmation grid grid-flow-col justify-start items-center gap-3 mx-auto w-full px-2">
                    <input id="agree_address" type="checkbox" value="" className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2"/>
                    <label htmlFor="agree_address" className="checkbox text-sm font-medium">I have double-checked that this is the correct address to receive the offerings.</label>
                  </div>{/* <!-- address-confirmation --> */}
                </div>}{/* <!-- dero-address --> */}

                

            </div>{/* <!-- receiving-method --> */}

            {/* <!-- COMPONENT Check Out Method - base --> */}
            <div className="donation-method relative">
              <h3 className="font-medium mb-3">Donation Method</h3>
              <div onClick={()=>setSelectingCurrency(true)} className="relative grid gap-6 border-2 border-dashed border-gray-400 rounded-lg px-3 sm:px-4 py-4 cursor-pointer">
          
                <div className="select-method flex items-center justify-between px-2">
                  <div className="crypto-select relative rounded-sm ring-0 flex items-center gap-4 py-2">
                    <div className="font-bold">{selectedCurrency?.name}</div>
                    <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M5.11973 6.29006L8.99973 10.1701L12.8797 6.29006C13.2697 5.90006 13.8997 5.90006 14.2897 6.29006C14.6797 6.68006 14.6797 7.31006 14.2897 7.70006L9.69973 12.2901C9.30973 12.6801 8.67973 12.6801 8.28973 12.2901L3.69973 7.70006C3.30973 7.31006 3.30973 6.68006 3.69973 6.29006C4.08973 5.91006 4.72973 5.90006 5.11973 6.29006Z" fill="#1C1917"/>
                      </svg> 
                    </div>
                  </div>{/* <!-- crypto-select --> */}
                  <div className="crypto-total flex items-center gap-2">
                    <div className="crypto-icon">
                      <Image width={18} height={18} alt="" src={selectedCurrency.icon}/>
                    
                    </div>
                    <div className="crypto-total font-bold">{cryptoAmount}</div>
                  </div>{/* <!-- crypto-total --> */}
                </div>{/* <!-- select-method --> */}

              </div>
            </div>{/* <!-- donation-method --> */}
{selectingCurrency&&<SelectCurrencySlideout setSelectingCurrency={setSelectingCurrency}/>}
          </div>
       
    )
}
export default Checkout