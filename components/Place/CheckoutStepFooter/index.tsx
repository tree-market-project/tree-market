"use client"
import { useState,useEffect } from "react"
import { InvoiceRequestBody } from "@/types"
import { useCheckoutContext } from "@/contexts/CheckoutContext"
import newTreeInvoice from "@/API/newTreeInvoice"

const CheckoutStepFooter:React.FC<{column:string}> = ({column})=>{
  const {invoice,setInvoice,checkoutStep,setCheckoutStep} = useCheckoutContext()
  const handleGetInvoice = async()=>{
    const response = await newTreeInvoice(invoice)
    setInvoice(JSON.parse(response))
    console.log(response)
  }
    const handleNextStep = ()=>{
      if(checkoutStep==1){
        handleGetInvoice()
      }
      
      if(checkoutStep==4){
        setInvoice({...invoice,SeedID:"",Payments:[],DonationAmount:"0",Quantity:0,Password:""})
        setCheckoutStep(1)
        return
      }
      if(checkoutStep==3){
        setInvoice({...invoice,SeedID:"",Payments:[],DonationAmount:"0",Quantity:0,Password:""})
        setCheckoutStep(0)
        return
      }
        setCheckoutStep(checkoutStep+1)
    }
    const [elapsedTime, setElapsedTime] = useState<number>(15*60);
  const totalTime: number = 15 * 60; // 15 minutes in seconds

  // Function to update the timer display
  const updateTimer = () => {
    
    if(elapsedTime<=0){
      return "expired"
    }
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Effect hook to start the timer interval and update the elapsed time
  useEffect(() => {
    if(checkoutStep!=2){
      return
    }
    const timerInterval = setInterval(() => {
      setElapsedTime(prevElapsedTime => prevElapsedTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [checkoutStep]);
    return(
        <div className={`${column=="right"?"stepbystep-footer absolute bottom-[64px] right-0 w-full h-[160px] bg-gray-50 z-20":"stepbystep-footer fixed bottom-0 w-full h-[160px] bg-gray-50 lg:hidden"}`}>
  <div className="flowsteps relative grid items-center h-[80px] bg-gray-100 px-2 sm:px-0 border-t border-gray-300 shadow-inner shadow-gray-300">
    {checkoutStep==3?//complete
    <div className="flex items-center justify-center gap-2 text-sm sm:text-base lg:text-sm 2xl:text-base">
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <g clip-path="url(#clip0_14855_29706)">
        <path d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM12.5 20C8.09 20 4.5 16.41 4.5 12C4.5 7.59 8.09 4 12.5 4C16.91 4 20.5 7.59 20.5 12C20.5 16.41 16.91 20 12.5 20ZM16.38 8.29L10.5 14.17L8.62 12.29C8.23 11.9 7.6 11.9 7.21 12.29C6.82 12.68 6.82 13.31 7.21 13.7L9.8 16.29C10.19 16.68 10.82 16.68 11.21 16.29L17.8 9.7C18.19 9.31 18.19 8.68 17.8 8.29C17.41 7.9 16.77 7.9 16.38 8.29Z" fill="#14532D"/>
      </g>
      <defs>
        <clipPath id="clip0_14855_29706">
          <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
        </clipPath>
      </defs>
    </svg>
  </div>
  <div className="received-timestamp">
    Transfer Received | {invoice.CompletedTimestamp}
  </div>
</div>:
    <div className="flow-container flex justify-evenly gap-1 mx-auto w-full lg:max-w-screen-md items-center text-center cursor-default">
      <div className="step1 flex flex-col justify-evenly gap-1 text-cyan-800">
      <div className="step-icon mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_14844_106859)">
            <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 3C1 3.55 1.45 4 2 4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H18C18.55 17 19 16.55 19 16C19 15.45 18.55 15 18 15H7L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.54 2.57C4.38 2.22 4.02 2 3.64 2H2C1.45 2 1 2.45 1 3ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="#0C4A6E"/>
          </g>
          <defs>
            <clipPath id="clip0_14844_106859">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
        <div className="text-xs sm:text-sm">Check Out</div>
      </div>
      <div className="interstep-icon text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <g clip-path="url(#clip0_14844_106862)">
            <path d="M19.833 9.5C18.803 9.5 17.933 10.12 17.543 11H14.623C14.233 10.12 13.363 9.5 12.333 9.5C11.303 9.5 10.433 10.12 10.043 11H7.12301C6.73301 10.12 5.86301 9.5 4.83301 9.5C3.45301 9.5 2.33301 10.62 2.33301 12C2.33301 13.38 3.45301 14.5 4.83301 14.5C5.86301 14.5 6.73301 13.88 7.12301 13H10.043C10.433 13.88 11.303 14.5 12.333 14.5C13.363 14.5 14.233 13.88 14.623 13H17.543C17.933 13.88 18.803 14.5 19.833 14.5C21.213 14.5 22.333 13.38 22.333 12C22.333 10.62 21.213 9.5 19.833 9.5Z" fill="black" fill-opacity="0.1"/>
          </g>
          <defs>
            <clipPath id="clip0_14844_106862">
              <rect width="24" height="24" fill="white" transform="translate(0.333008)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={`step2 flex flex-col justify-evenly gap-1 text-${checkoutStep>1?"cyan-800":"gray-400"}`}>
        <div className="step-icon mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 8H6C7.1 8 8 7.1 8 6V2C8 0.9 7.1 0 6 0H2C0.9 0 0 0.9 0 2V6C0 7.1 0.9 8 2 8ZM2 2H6V6H2V2Z" fill={`${checkoutStep>1?"#0C4A6E":"#57534E"}`}/>
            <path d="M2 18H6C7.1 18 8 17.1 8 16V12C8 10.9 7.1 10 6 10H2C0.9 10 0 10.9 0 12V16C0 17.1 0.9 18 2 18ZM2 12H6V16H2V12Z" fill={`${checkoutStep>1?"#0C4A6E":"#57534E"}`}/>
            <path d="M10 2V6C10 7.1 10.9 8 12 8H16C17.1 8 18 7.1 18 6V2C18 0.9 17.1 0 16 0H12C10.9 0 10 0.9 10 2ZM16 6H12V2H16V6Z" fill={`${checkoutStep>1?"#0C4A6E":"#57534E"}`}/>
            <path d="M18 17.5V16.5C18 16.22 17.78 16 17.5 16H16.5C16.22 16 16 16.22 16 16.5V17.5C16 17.78 16.22 18 16.5 18H17.5C17.78 18 18 17.78 18 17.5Z" fill={`${checkoutStep>1?"#0C4A6E":"#57534E"}`}/>
            <path d="M10 10.5V11.5C10 11.78 10.22 12 10.5 12H11.5C11.78 12 12 11.78 12 11.5V10.5C12 10.22 11.78 10 11.5 10H10.5C10.22 10 10 10.22 10 10.5Z" fill={`${checkoutStep>1?"#0C4A6E":"#57534E"}`}/>
            <path d="M13.5 12H12.5C12.22 12 12 12.22 12 12.5V13.5C12 13.78 12.22 14 12.5 14H13.5C13.78 14 14 13.78 14 13.5V12.5C14 12.22 13.78 12 13.5 12Z" fill={`${checkoutStep>1?"#0C4A6E":"#57534E"}`}/>
            <path d="M10 14.5V15.5C10 15.78 10.22 16 10.5 16H11.5C11.78 16 12 15.78 12 15.5V14.5C12 14.22 11.78 14 11.5 14H10.5C10.22 14 10 14.22 10 14.5Z" fill={`${checkoutStep>1?"#0C4A6E":"#57534E"}`}/>
            <path d="M12.5 18H13.5C13.78 18 14 17.78 14 17.5V16.5C14 16.22 13.78 16 13.5 16H12.5C12.22 16 12 16.22 12 16.5V17.5C12 17.78 12.22 18 12.5 18Z" fill={`${checkoutStep>1?"#0C4A6E":"#57534E"}`}/>
            <path d="M14.5 16H15.5C15.78 16 16 15.78 16 15.5V14.5C16 14.22 15.78 14 15.5 14H14.5C14.22 14 14 14.22 14 14.5V15.5C14 15.78 14.22 16 14.5 16Z" fill={`${checkoutStep>1?"#0C4A6E":"#57534E"}`}/>
            <path d="M15.5 10H14.5C14.22 10 14 10.22 14 10.5V11.5C14 11.78 14.22 12 14.5 12H15.5C15.78 12 16 11.78 16 11.5V10.5C16 10.22 15.78 10 15.5 10Z" fill={`${checkoutStep>1?"#0C4A6E":"#57534E"}`}/>
            <path d="M16.5 14H17.5C17.78 14 18 13.78 18 13.5V12.5C18 12.22 17.78 12 17.5 12H16.5C16.22 12 16 12.22 16 12.5V13.5C16 13.78 16.22 14 16.5 14Z" fill={`${checkoutStep>1?"#0C4A6E":"#57534E"}`}/>
          </svg>
        </div>
        <div className="text-xs sm:text-sm">Trade</div>
      </div>
      <div className="interstep-icon text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <g clip-path="url(#clip0_14844_106862)">
            <path d="M19.833 9.5C18.803 9.5 17.933 10.12 17.543 11H14.623C14.233 10.12 13.363 9.5 12.333 9.5C11.303 9.5 10.433 10.12 10.043 11H7.12301C6.73301 10.12 5.86301 9.5 4.83301 9.5C3.45301 9.5 2.33301 10.62 2.33301 12C2.33301 13.38 3.45301 14.5 4.83301 14.5C5.86301 14.5 6.73301 13.88 7.12301 13H10.043C10.433 13.88 11.303 14.5 12.333 14.5C13.363 14.5 14.233 13.88 14.623 13H17.543C17.933 13.88 18.803 14.5 19.833 14.5C21.213 14.5 22.333 13.38 22.333 12C22.333 10.62 21.213 9.5 19.833 9.5Z" fill="black" fill-opacity="0.1"/>
          </g>
          <defs>
            <clipPath id="clip0_14844_106862">
              <rect width="24" height="24" fill="white" transform="translate(0.333008)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="step3 flex flex-col justify-evenly gap-1 text-gray-400">
        <div className="step-icon mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.334 0H2.33398C1.23398 0 0.333984 0.9 0.333984 2V16C0.333984 17.1 1.23398 18 2.33398 18H18.334C19.434 18 20.334 17.1 20.334 16V2C20.334 0.9 19.434 0 18.334 0ZM7.33398 14H4.33398C3.78398 14 3.33398 13.55 3.33398 13C3.33398 12.45 3.78398 12 4.33398 12H7.33398C7.88398 12 8.33398 12.45 8.33398 13C8.33398 13.55 7.88398 14 7.33398 14ZM7.33398 10H4.33398C3.78398 10 3.33398 9.55 3.33398 9C3.33398 8.45 3.78398 8 4.33398 8H7.33398C7.88398 8 8.33398 8.45 8.33398 9C8.33398 9.55 7.88398 10 7.33398 10ZM7.33398 6H4.33398C3.78398 6 3.33398 5.55 3.33398 5C3.33398 4.45 3.78398 4 4.33398 4H7.33398C7.88398 4 8.33398 4.45 8.33398 5C8.33398 5.55 7.88398 6 7.33398 6ZM17.034 8.12L13.864 11.29C13.474 11.68 12.834 11.68 12.444 11.29L11.034 9.87C10.644 9.48 10.644 8.85 11.034 8.46C11.424 8.07 12.054 8.07 12.444 8.46L13.154 9.17L15.624 6.7C16.014 6.31 16.644 6.31 17.034 6.7L17.044 6.71C17.424 7.1 17.424 7.74 17.034 8.12Z" fill="#57534E"/>
          </svg>
        </div>
        <div className="text-xs sm:text-sm">Done</div>
      </div>
    </div>

    }
  </div>{/* <!-- flowsteps --> */}


  <div className="footer-inner h-[80px] relative grid items-stretch gap-4 content-center px-4 border-t border-gray-300 ">
  
         { checkoutStep==2? 
         <div className="flex gap-3 items-center justify-center h-[64px] cursor-default">
              <div className="text-lg font-normal">Awaiting Transfer</div>
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
            </div>
            : checkoutStep == 3?
            <div onClick={handleNextStep} className="btn grid text-center items-center bg-gray-300 rounded-md h-[64px] cursor-pointer">
  <div className="text-gray-900 2xl:text-lg">Close</div>
</div>

            :
            <div onClick={handleNextStep} className="btn grid text-center items-center bg-[#3E7A57] rounded-md h-[64px] cursor-pointer">
            <div className="text-lg text-gray-50">{checkoutStep==0?"Proceed to Check Out | "+(invoice?.Quantity*2.99).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  }): checkoutStep==1?
  "Proceed to Trade"
:"Try Again"}</div>
          </div>
            
            }
          
    
  </div>{/* <!-- footer-inner --> */}
</div>
    )
}
export default CheckoutStepFooter