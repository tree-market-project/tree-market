"use client"
import QRCode from "qrcode.react"
import { useEffect,useState,useRef } from "react"
import { useCheckoutContext } from "@/contexts/CheckoutContext"
import SelectCurrencySlideout from "../SelectCurrencySlideout"
import checkInvoiceStatus from "@/API/checkInvoiceStatus"
import copyToClipboard from "@/utils/copyToClipboard"
import Image from "next/image"
import Toaster, { ToasterRef } from "../Toaster"


const Trade:React.FC<{column:string}> = ({column})=>{
  const {invoice,setInvoice,selectedCurrency,setSelectedCurrency,checkoutStep,setCheckoutStep} = useCheckoutContext()
  const [elapsedTime, setElapsedTime] = useState<number>(15*60);
  const [selectingCurrency,setSelectingCurrency] = useState(false)
 const toasterRef = useRef<ToasterRef | null>(null);
  const handleCancel = ()=>{
    
    setInvoice({...invoice,Quantity:0,DonationAmount:"0",SeedID:"",Payments:[],Password:""})
    setCheckoutStep(0)
  }
  
  // Function to update the timer display
  const updateTimer = () => {
    if(elapsedTime<=0){
      
      setCheckoutStep(4)
      return "Expired"
    }
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Effect hook to start the timer interval and update the elapsed time
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setElapsedTime(prevElapsedTime => prevElapsedTime - 1);
      
      
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  useEffect(()=>{
    updateInvoice()
  },[elapsedTime])

  const updateInvoice = async()=>{
    if(elapsedTime%40!=0 || !invoice.SeedID){
      
      return
    }
    
    const response = await checkInvoiceStatus(invoice.SeedID)
    const newInvoice = JSON.parse(response)
    setInvoice(newInvoice)
    
    if(newInvoice.Status=="complete"||newInvoice.Status=="unredeemed"){
      setCheckoutStep(3)

    }else if(newInvoice.Status=="expired"){
      setCheckoutStep(4)
    }
    
  }

  const handleSelectCurrency = ()=>{
    if(checkoutStep==4){
      return
    }
    setSelectingCurrency(true)
  }

  const handleCopy = (info:string)=>{
    if(info=="address"){
       copyToClipboard(invoice.Payments?.find(x=>x.symbol.toLowerCase()==selectedCurrency.symbol.toLowerCase()&&x.currency.toLowerCase() == selectedCurrency.currency.toLowerCase())?.payment_address)
    toasterRef.current?.addMessage("Deposit Address Copied to Clipboard")
    }else{
      copyToClipboard(invoice.Payments?.find(x=>x.symbol.toLowerCase()==selectedCurrency.symbol.toLowerCase()&&x.currency.toLowerCase() == selectedCurrency.currency.toLowerCase())?.amount)
      toasterRef.current?.addMessage("Deposit Total Copied to Clipboard")
    }
   
  }

  

 
    return(

          <div className="content-inner grid gap-6">
           
           {/* <!-- COMPONENT Notification.info --> */}
            <div className="notification info flex items-start border-2 border-gray-200 bg-amber-50 p-3 rounded-sm gap-2">
              <div className="pt-1 px-1">
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
              <div className="text-sm">Copy & paste the details below in your wallet to make the transfer.</div>
            </div>{/* <!-- notification --> */}

            {/* <!-- COMPONENT Pending dues --> */}
            <div className="checkout-dues grid bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">
              <div className="total">
                <div className="flex items-center justify-between gap-2 px-2 font-bold">
                  <div>Pending Dues</div>
                  <div className="timer font-medium bg-[#0369A1] flex items-center gap-2 text-sm px-2 py-1 rounded-md text-gray-50">
                    <div className="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g clip-path="url(#clip0_14988_10559)">
                        <path d="M10.5003 0.75H7.50032C7.08782 0.75 6.75032 1.0875 6.75032 1.5C6.75032 1.9125 7.08782 2.25 7.50032 2.25H10.5003C10.9128 2.25 11.2503 1.9125 11.2503 1.5C11.2503 1.0875 10.9128 0.75 10.5003 0.75ZM9.00032 10.5C9.41282 10.5 9.75032 10.1625 9.75032 9.75V6.75C9.75032 6.3375 9.41282 6 9.00032 6C8.58782 6 8.25032 6.3375 8.25032 6.75V9.75C8.25032 10.1625 8.58782 10.5 9.00032 10.5ZM14.2728 5.5425L14.8353 4.98C15.1203 4.695 15.1278 4.2225 14.8353 3.93L14.8278 3.9225C14.5353 3.63 14.0703 3.6375 13.7778 3.9225L13.2153 4.485C12.0528 3.555 10.5903 3 9.00032 3C5.40032 3 2.34032 5.97 2.25032 9.57C2.15282 13.38 5.20532 16.5 9.00032 16.5C12.7353 16.5 15.7503 13.4775 15.7503 9.75C15.7503 8.16 15.1953 6.6975 14.2728 5.5425ZM9.00032 15C6.09782 15 3.75032 12.6525 3.75032 9.75C3.75032 6.8475 6.09782 4.5 9.00032 4.5C11.9028 4.5 14.2503 6.8475 14.2503 9.75C14.2503 12.6525 11.9028 15 9.00032 15Z" fill="#F5F5F4"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_14988_10559">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>{updateTimer()}</div>
                  </div>{/* <!-- timer --> */}
                  <div>{(invoice.Quantity*2.99).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })}</div>
              </div>
              </div>{/* <!-- total --> */}
            </div>{/* <!-- checkout-dues --> */}

            {/* <!-- COMPONENT Donation Method - full --> */}
            <div className="donation-method relative">
              <h3 className="font-medium mb-3">Donation Method</h3>
              <div className="relative grid gap-6 border-2 border-dashed border-gray-400 rounded-lg px-3 sm:px-4 py-4">
          
                <div onClick={handleSelectCurrency} className={`select-method flex items-center justify-between px-2 cursor-${checkoutStep==2?'cursor':'default'}`}>
                  <div className="crypto-select relative rounded-sm ring-0 flex items-center gap-4 py-2">
                    <div className="font-bold">{selectedCurrency.name}</div>
                    <div>
                   {   checkoutStep==2&&<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M5.11973 6.29006L8.99973 10.1701L12.8797 6.29006C13.2697 5.90006 13.8997 5.90006 14.2897 6.29006C14.6797 6.68006 14.6797 7.31006 14.2897 7.70006L9.69973 12.2901C9.30973 12.6801 8.67973 12.6801 8.28973 12.2901L3.69973 7.70006C3.30973 7.31006 3.30973 6.68006 3.69973 6.29006C4.08973 5.91006 4.72973 5.90006 5.11973 6.29006Z" fill="#1C1917"/>
                      </svg>}
                    </div>
                  </div>{/* <!-- crypto-select --> */}
                  <div className="crypto-total flex items-center gap-2">
                    <div className="crypto-icon">
                    <Image width={18} height={18} alt="" src={selectedCurrency.icon}/>
                    
                    </div>
                    <div className="crypto-total font-bold">{invoice.Payments?.find(x=>x.symbol.toLowerCase()==selectedCurrency.symbol.toLowerCase()&&x.currency.toLowerCase() == selectedCurrency.currency.toLowerCase())?.amount}</div>
                  </div>{/* <!-- crypto-total --> */}
                </div>{/* <!-- select-method --> */}

                <div onClick={()=>handleCopy("address")} className={`deposit-address-btn relative px-2 py-3 mx-auto w-full rounded-2xl ${checkoutStep==2?"bg-cyan-700 text-gray-200 cursor-pointer":"bg-[#155E7560] text-gray-100 cursor-default"} text-center leading-tight`}>
                  <div className="text-sm px-2">Tap To Copy Deposit Address</div>
                  <div className="send-address text-sm py-1 px-2 break-all">
                  {invoice.Payments?.find(x=>x.symbol.toLowerCase()==selectedCurrency.symbol.toLowerCase()&&x.currency.toLowerCase() == selectedCurrency.currency.toLowerCase())?.payment_address}
                  </div>
                </div>{/* <!-- deposit-address-btn --> */}

                <div onClick={()=>handleCopy("amount")} className={`deposit-amt-btn relative px-2 py-3 mx-auto w-full rounded-2xl ${checkoutStep==2?"bg-cyan-700 text-gray-200 cursor-pointer":"bg-[#155E7560] text-gray-100 cursor-default"} text-center leading-tight`}>
                  <div className="text-sm px-2">Tap To Copy Total To Be Sent</div>
                  <div className="send-address text-sm py-1 px-2 break-words">
                  {invoice.Payments?.find(x=>x.symbol.toLowerCase()==selectedCurrency.symbol.toLowerCase()&&x.currency.toLowerCase() == selectedCurrency.currency.toLowerCase())?.amount}
                  </div>
                </div>{/* <!-- deposit-amt-btn --> */}
                <div className={`${checkoutStep==4?'hidden ':''} qrcode grid gap-2 bg-gray-200 p-6 sm:p-8 rounded-2xl`}>
  <h4 className="text-center text-sm md:text-base">Scan QR</h4>
  <div className="qr bg-white mx-auto w-auto max-w-[260px] p-4 rounded-xl">
     <QRCode value={invoice.Payments?.find(x=>x.symbol.toLowerCase()==selectedCurrency.symbol.toLowerCase()&&x.currency.toLowerCase() == selectedCurrency.currency.toLowerCase())?.payment_url||""} size={200} renderAs="svg"/> 
  </div>  
</div>

              </div>
            </div>{/* <!-- donation-method --> */}
            
<div onClick={handleCancel} className="btn grid text-center items-center bg-gray-300 rounded-md h-[64px] cursor-pointer">
  <div className="text-lg">Cancel This Order</div>
</div> {/* <!-- Cancel order --> */}
      {selectingCurrency && <SelectCurrencySlideout setSelectingCurrency={setSelectingCurrency}/>}
       <Toaster ref={toasterRef}/>
          </div>
        
    )
}
export default Trade