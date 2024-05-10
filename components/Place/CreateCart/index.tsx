"use client"
import { useCheckoutContext } from "@/contexts/CheckoutContext"
import { ChangeEvent,useState,useEffect } from "react"
import updateTokenString from "@/utils/updateTokenString"
import getProgress from "@/API/getProgress"

const CreateCart:React.FC<{column:string,handleShowCalculator:any}> = ({column,handleShowCalculator}) =>{
  const {setCheckoutStep,invoice,setInvoice} = useCheckoutContext()
 // const [donationAmount,setDonationAmount] = useState("0")
  const [percentRaised,setPercentRaised]=useState("0")
  const [totalRaised,setTotalRaised] = useState(0)
  
  const handleChangeAmount=(e:ChangeEvent<HTMLInputElement>)=>{
    console.log("input",e.target.value)
    let input=e.target.value
    input = input.replace(/[^\d.-]/g, '')
    if(!input){
      setInvoice({...invoice,DonationAmount:""})
      //setDonationAmount("0")
      return
    }
    console.log("trimmed input",input)
    let amount = parseFloat(input)
    console.log("amount",amount)
   // setInvoice({...invoice,DonationAmount:amount.toLocaleString('en-US')})
    //setDonationAmount(amount.toLocaleString('en-US'))
    setInvoice({...invoice,DonationAmount:amount.toLocaleString('en-US'),Quantity:parseFloat((amount/2.99).toFixed(5))})
  }
/*   const handleChangeAmount = (e:ChangeEvent<HTMLInputElement>)=>{
    let amount =0
    console.log(e.target.value)
    if(e.target.value){
      console.log("float",parseFloat(e.target.value))
      amount = parseFloat(e.target.value)
      if(amount<0){
        amount=0
      }
    }
    
    setInvoice({...invoice,Quantity:amount})
    setTokenAmount(amount)
    updateTokenString(amount,setTokenString)
  } */

  useEffect(()=>{
    updateProgress()
  },[])

  useEffect(()=>{
    return
    const newAmt = (invoice.Quantity*2.99).toFixed(2)
    //setDonationAmount(newAmt)
  },[invoice.Quantity])

  const updateProgress = async()=>{
    const atomicUSDRaised = await getProgress()
    const usdRaised = atomicUSDRaised/10000000
    const usdGoal = 2000000
    const newPercent = Math.floor(usdRaised*100/usdGoal)
    const newPercentString = newPercent.toString()
    setPercentRaised(newPercentString)
    setTotalRaised(usdRaised)
    
  }

  const formatAsCurrency = (amount:string) => {
    // Remove currency symbol ('$') and commas from the amount string
    const numericValue = parseFloat(amount.replace(/[^\d.-]/g, ''));
    // Check if the numericValue is a valid number
    if (!isNaN(numericValue)) {
      // Format the numeric value as USD currency
      return numericValue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    } else {
      // If the amount is invalid or empty, return "Tap to add"
      return "Tap to add";
    }
  };
    return(<div className="space-y-6 pt-2">
    <div className="crowdfunding-goal grid gap-6">
  <div className="flex flex-col gap-4 px-2">
    <div className="total">
      <p className="text-sm">USDT</p>
      <h3 className="text-4xl lg:text-3xl font-bold">{(totalRaised).toLocaleString('en-US',{
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}</h3>
    </div>
    <p className="text-gray-500 text-lg font-semibold">Raised out of USDT 2,000,000 Goal</p>
  </div>  

  <div className="progress_bar relative flex items-center w-full px-2 pb-4">
    <div className="relative w-full rounded-xl bg-gradient-to-l from-gray-300 to-gray-100 h-[20px]">
      <div style={{width:`${percentRaised}%`}} className={`progress flex flex-col justify-center items-center content-start p-2 bg-lime-600 rounded-xl h-[20px]`}>
      </div>
      <div className="break-even absolute flex flex-col top-0 left-[3%]">
        <div className="w-[10px] h-[20px] bg-red-600 ml-12"></div>
        <div className="text-xs mt-2">Founders Break Even</div>
      </div>
    </div>
  </div>{/* <!-- progress_bar --> */}

  <div className="flex flex-col gap-4 px-2">
    <p className="text-sm leading-5">This project will be fully funded if it reaches its goal by Saturday June 15, 2024 @ 3:00 PM EST.</p>
  </div>

</div>{/* <!-- crowdfunding-goal --> */}

    <div className="trade-offer-box w-full ring-2 ring-gray-300 p-4 space-y-6">
      <div className="space-y-2">
        <div  className="input-field relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto rounded-lg bg-gray-100 leading-tight">
          <label htmlFor="qty" className="user-name text-sm px-2">Donation Amount</label>
         {/*  <input onChange={e=>handleChangeAmount(e)} value={invoice.Quantity?formatAsCurrency(invoice.Quantity):"Tap to add"} type="text" name="qty" id="qty" placeholder="Tap to add" className="py-1 bg-transparent focus:border-none focus:ring-0 focus:ring-inset focus:ring-gray-50 px-2 placeholder:text-gray-900 font-semibold w-11/12"/> */}
         <input onChange={e=>handleChangeAmount(e)} value={"$"+invoice.DonationAmount} type="text" name="qty" id="qty" placeholder="Tap to add" className="py-1 bg-transparent focus:border-none focus:ring-0 focus:ring-inset focus:ring-gray-50 px-2 placeholder:text-gray-900 font-semibold w-11/12"/>
          <div onClick={handleShowCalculator} className="absolute inset-y-0 right-4 flex items-center cursor-pointer z-20">
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <path d="M16.5 0.000976562H2.5C1.4 0.000976562 0.5 0.900977 0.5 2.00098V16.001C0.5 17.101 1.4 18.001 2.5 18.001H16.5C17.6 18.001 18.5 17.101 18.5 16.001V2.00098C18.5 0.900977 17.6 0.000976562 16.5 0.000976562ZM11.06 3.53098C11.35 3.24098 11.83 3.24098 12.12 3.53098L13 4.41098L13.88 3.53098C14.17 3.24098 14.65 3.24098 14.94 3.53098C15.23 3.82098 15.23 4.30098 14.94 4.59098L14.06 5.47098L14.94 6.35098C15.23 6.64098 15.23 7.12098 14.94 7.41098C14.65 7.70098 14.17 7.70098 13.88 7.41098L13 6.54098L12.12 7.42098C11.83 7.71098 11.35 7.71098 11.06 7.42098C10.77 7.13098 10.77 6.65098 11.06 6.36098L11.94 5.48098L11.06 4.60098C10.76 4.30098 10.76 3.82098 11.06 3.53098ZM4.5 4.72098H8C8.41 4.72098 8.75 5.06098 8.75 5.47098C8.75 5.88098 8.41 6.22098 8 6.22098H4.5C4.09 6.22098 3.75 5.88098 3.75 5.47098C3.75 5.06098 4.09 4.72098 4.5 4.72098ZM8.25 13.001H7V14.251C7 14.661 6.66 15.001 6.25 15.001C5.84 15.001 5.5 14.661 5.5 14.251V13.001H4.25C3.84 13.001 3.5 12.661 3.5 12.251C3.5 11.841 3.84 11.501 4.25 11.501H5.5V10.251C5.5 9.84098 5.84 9.50098 6.25 9.50098C6.66 9.50098 7 9.84098 7 10.251V11.501H8.25C8.66 11.501 9 11.841 9 12.251C9 12.661 8.66 13.001 8.25 13.001ZM14.75 14.251H11.25C10.84 14.251 10.5 13.911 10.5 13.501C10.5 13.091 10.84 12.751 11.25 12.751H14.75C15.16 12.751 15.5 13.091 15.5 13.501C15.5 13.911 15.16 14.251 14.75 14.251ZM14.75 11.751H11.25C10.84 11.751 10.5 11.411 10.5 11.001C10.5 10.591 10.84 10.251 11.25 10.251H14.75C15.16 10.251 15.5 10.591 15.5 11.001C15.5 11.411 15.16 11.751 14.75 11.751Z" fill="#1C1917"/>
  </svg>
</div>
        </div>{/* <!-- input-field --> */}
        <p className="hidden lg:block text-xs text-center">🌿 You will receive {invoice.Quantity}  LEAF Tokens.</p>
      </div>
  {column=="left"?    <div onClick={()=>setCheckoutStep(1)}className="checkout-btn space-y-2">
          <div className="btn bg-[#3E7A57] text-white text-center text-sm px-4 py-3 rounded-lg uppercase hover:shadow-md shadow-gray-400 cursor-pointer">Proceed to Check Out | {(invoice.Quantity*2.99).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })}</div>
        <p className="text-xs text-center">🌿 You will receive {invoice.Quantity} LEAF Tokens.</p>
      </div>:""}
      <div className="section-dues-content relative items-start mx-auto w-full">
        <div className="donation-types flex flex-wrap flex-col items-center justify-center space-y-3 w-full px-4 rounded-md">
          <div className="heading text-center font-medium">
            Donations and dues accepted in the following currencies
          </div>
          <div className="types flex flex-wrap items-center justify-start gap-3 cursor-default">
            <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">DERO</div>
            <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">XMR</div>
            <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">USDT</div>
            <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">BTC</div>
            <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">ETH</div>
            <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">LTC</div>
            <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">BCH</div>
            
            <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">TRON</div>
            <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">MATIC</div>
          </div>
        </div>
      </div>{/* <!-- section-dues-content --> */}
    </div>{/* <!-- trade-offer-box --> */}
  </div>)
}
export default CreateCart