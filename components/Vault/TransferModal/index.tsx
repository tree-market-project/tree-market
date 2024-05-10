"use client"
import { useVaultContext,useWalletContext } from "@/contexts"
import formatBalance from "@/utils/formatBalance"
import { useState,useRef,ChangeEvent} from "react"
import { useTransfer } from "@/hooks/useTransfer"
import { useCheckDeroAddress } from "@/hooks/useCheckDeroAddress"
import useGetGasEstimate from "@/hooks/useGetGasEstimate"

const TransferModal:React.FC<{setShow:any}> = ({setShow})=>{
    const {worker,activeWallet} = useWalletContext()
    const {selectedToken} = useVaultContext()
    const checkDeroAddress = useCheckDeroAddress()
    const transfer = useTransfer()
    const getGasEstimate = useGetGasEstimate()
    const [step,setStep] = useState(0)
    const [registered,setRegistered] = useState(false)
    const [destination,setDestination] = useState("")
    const [error,setError] = useState(false)
    const [fees,setFees] = useState("0")
    const [total,setTotal] = useState("")
    let currentRequest = 0
    const initialState = {
        transfers:[
            {
                amount: 0,
                destination: "",
                scid:selectedToken?.scid
            }
        ],
        scid:"",
        sc_rpc:[],
        comment: "",
        destinationPort: 0,
        ringsize: 2,
        signer:activeWallet?.address
      };

        const [formData, setFormData] = useState(initialState);

        const [txid,setTXID] = useState("")
      

        const handleChangeAmount = (e:any)=>{
           
            let newTransfers = [...formData.transfers]
            
            
            
            newTransfers[0].amount=e.target.value
            setFormData((prevData)=>({
                ...prevData,
                transfers:newTransfers
            }))
        }

        const handleChangeDestination = async (e:any)=>{
          setError(false)
          setRegistered(false)
          currentRequest++
          const requestNumber = currentRequest
           
            let newTransfers = [...formData.transfers]
            
            newTransfers[0].destination=e.target.value
            setFormData((prevData)=>({
                ...prevData,
                transfers:newTransfers
            }))

            let addressObj = await checkDeroAddress(e.target.value)
            console.log(addressObj)
            if(requestNumber===currentRequest){
              if(addressObj.registered){
              setRegistered(true)
              setDestination(addressObj.address)
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
        const debouncedHandleChangeAddress = useRef(debounce(handleChangeDestination, 300)).current;
        
        const handleDestinationInput = (e: ChangeEvent<HTMLInputElement>) => {
          let newTransfers = [...formData.transfers]
            
            newTransfers[0].destination=e.target.value
            setFormData((prevData)=>({
                ...prevData,
                transfers:newTransfers
            }))
          debouncedHandleChangeAddress(e);
        };

        const handleChange = (e:any) => {
          const { name, value } = e.target;
          
          setFormData((prevData) => ({
            ...prevData,
            [name]: value
          }));
        };

        const handleTransfer = async()=>{
            
            setStep(2)
            
let data = JSON.parse(JSON.stringify(formData));

if (selectedToken?.decimals && data.transfers.length > 0) {
  
  data.transfers[0].amount *= Math.pow(10, selectedToken.decimals);
  data.transfers[0].amount = Math.ceil(data.transfers[0].amount)
  data.transfers[0].destination = destination
}
        data.ringsize = parseInt(data.ringsize)
        data.fees = Math.ceil(parseFloat(fees)*Math.pow(10,5))

      
            let newTXID = await transfer(data,worker)
           console.log("txid",newTXID)
            setTXID(newTXID) 


        }

        const handleGetGas = async()=>{
          setStep(1)
          let data = JSON.parse(JSON.stringify(formData));
          data.ringsize = parseInt(data.ringsize)

          let fee = await getGasEstimate(data)
          let newTotal= (Math.pow(10,-5)*fee+ parseFloat(data.transfers[0].amount)).toFixed(5)
          setFees((Math.pow(10,-5)*fee).toFixed(5))
          setTotal(newTotal)
        }

    return(
        <dialog open id="my_modal_transfer" className="z-50 modal w-full h-full overflow-y-scroll bg-gray-300 bg-opacity-50 flex items-center">
        <div className="modal-box relative pb-4 max-h-screen overflow-y-scroll bg-gray-100 rounded-lg ring-1 ring-gray-300 w-11/12 mx-auto max-w-screen-sm shadow-md shadow-gray-400">

      <div className="modal-action">
        <div>
          <button onClick={()=>setShow(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
      </div>{/* <!-- modal-action close --> */}

      <div className="modal_content grid gap-4 p-4 md:p-6">

        <h3 className="font-bold text-lg">Transfer Asset</h3>

        <div className="flex items-center justify-between gap-4 font-medium bg-gray-50 w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">
          <div className="flex items-center gap-2">
            <div className="icon">
            {selectedToken?.scid=="e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4"?<>🌿</>

:<img src={selectedToken?.iconURL} className="w-[20px]" />}
            </div>{/* <!-- icon --> */}
            <div className="title">
              <h3 className="font-medium">{selectedToken?.name}</h3>
              <p className="text-xs font-light">{`${selectedToken?.scid.substring(0,7)} ... ${selectedToken?.scid.substring(selectedToken?.scid.length-7)}`}</p>
            </div>
          </div>
          <div className="balance">

            <h3 className="font-medium">{formatBalance(selectedToken)}</h3>
            <p className="text-xs font-light">Balance</p>
          </div>
        </div>

       {/*  <!-- step 1 - enter tx info --> */}
        {step==0&&<div className="transfer-form grid gap-4">

          <div className="input-transferamt relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
            <label htmlFor="amount" className="text-sm font-semibold px-2">Amount <span className="font-normal">({selectedToken?.symbol})</span></label>
            <input onChange={handleChangeAmount} value={formData.transfers[0].amount} type="text" name="amount" id="amount" placeholder="0.00000" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
          </div>{/* <!-- input-transferamt --> */}

          <div className="flex flex-1 flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="input-address relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
              <label htmlFor="destination" className="text-sm font-semibold px-2">Wallet Address / Name</label>
              <input onChange={handleDestinationInput} value={formData.transfers[0].destination} type="text" name="destination" id="destination" placeholder="Tap to Add" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 w-11/12"/>
              {registered&&<div className="absolute inset-y-0 right-4 flex items-center text-2xl font-bold cursor-pointer z-20 text-green-700">&#10003;</div>}
            </div>{/* <!-- input-address --> */}

            <div className="ringsize relative flex sm:flex-col items-center justify-between px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full sm:w-[110px] rounded-lg">
              <div className="text-sm sm:text-xs font-semibold px-2">Ring Size</div>
              <select onChange={handleChange} value={formData.ringsize} id="ringsize" name="ringsize" className="text-center h-full inline-block rounded-md border-0 bg-transparent text-gray-500 px-2 py-2">
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
                {activeWallet?.connection!="rpc" && <><option value="16">16</option>
                <option value="32">32</option>
                <option value="64">64</option>
                <option value="128">128</option></>}
              </select>
            </div>{/* <!-- ringsize --> */}
          </div>
          {error?<div className="text-sm text-red-600 px-4">Address Unregistered</div>:""}

          {/* <div className="input-comment relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
            <label htmlFor="comment" className="job-post text-sm font-semibold px-2">Comment <span className="font-thin">(Optional)</span></label>
            <textarea name="comment" id="comment" placeholder="The comment is natively encrypted" className="py-1 bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 h-20"/>
          </div> */}{/* <!-- input-comment --> */}

          {/* <div className="input-port relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
            <label htmlFor="port" className="text-sm font-semibold px-2">Destination Port <span className="font-thin">(Optional)</span></label>
            <input type="text" name="port" id="port" placeholder="" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
          </div> */}{/* <!-- input-address --> */}

        </div>}{/* <!-- transfer-form --> */}

        {/* <!-- step 2 - build payload --> */}
        <div className="hidden build-payload grid gap-6">
                   
          <div className="payload-info grid gap-2 text-sm break-all ring-1 ring-gray-400 px-4 py-3 bg-gray-100 shadow-inner shadow-gray-400 rounded-sm">
            <h4 className="font-semibold">Params</h4>
            <div className="text-gray-600 break-all">
              
            </div>
          </div>{/* <!-- payload-info --> */}

        <div className="working-msg grid px-2 py-1 border-l-4 border-cyan-800">
          <div className="font-semibold text-sm">Working</div>
          <div className="text-sm text-gray-600">Building payload <span className="animate-ping">...</span></div>
        </div>

        </div>{/* <!-- build-payload --> */}

        {/* <!-- step 3 - send payload --> */}
        {step==1&&<div className="send-payload grid gap-6">
                   
          <div className="hidden payload-info grid gap-2 text-sm break-all ring-1 ring-gray-400 px-4 py-3 bg-gray-100 shadow-inner shadow-gray-400 rounded-sm">
            <h4 className="font-semibold">Params</h4>
            <div className="text-gray-600 break-all">
              
            </div>
          </div>{/* <!-- payload-info --> */}

        <div className="hidden txid grid px-2 py-1 border-l-4 border-cyan-800">
          <div className="font-semibold text-sm">TXID</div>
          <div className="text-sm break-all text-gray-600">
            {txid}
          </div>
        </div>

        <div className="txfee flex items-center justify-between gap-4 px-2 py-1 border-l-4 border-cyan-800">
          <div>
            <div className="font-medium">You will send</div>
            <div className="text-cyan-800 font-bold">
              { total} DERO
            </div>
          </div>
         { activeWallet?.app!="g45w"&&<div className="border border-gray-400 bg-gray-50 px-3 py-2 rounded-md">
            <div className="font-semibold text-xs">TX Fees</div>
            <div className="text-sm break-all text-cyan-800">
              {fees}
            </div>
          </div>}
        </div>

        </div>}{/* <!-- send-payload --> */}

        {/* <!-- step 4 - send payload --> */}
       {step==2&&txid&& <div className="send-payload grid gap-6 ">
                   
          <div className="hidden payload-info grid gap-2 text-sm break-all ring-1 ring-gray-400 px-4 py-3 bg-gray-100 shadow-inner shadow-gray-400 rounded-sm">
            <h4 className="font-semibold">Params</h4>
            <div className="text-gray-600 break-all">
              
            </div>
          </div>{/* <!-- payload-info --> */}

        <div className="txid grid px-2 py-1 border-l-4 border-cyan-800">
          <div className="font-semibold text-sm">TXID</div>
          <div className="text-sm break-all text-gray-600">
            {txid}
          </div>
        </div>

        <div className="txfee flex items-center justify-between gap-4 px-2 py-1 border-l-4 border-cyan-800">
          <div>
            <div className="font-medium">You sent</div>
            <div className="text-cyan-800 font-bold">
              {formData.transfers[0].amount} DERO
            </div>
          </div>
          {activeWallet?.app!="g45w"&&<div className="border border-gray-400 bg-gray-50 px-3 py-2 rounded-md">
            <div className="font-semibold text-xs">TX Fees</div>
            <div className="text-sm break-all text-cyan-800">
              {fees}
            </div>
          </div>}
        </div>

        </div>}{/* <!-- send-payload --> */}

        {/* <!-- COMPONENT Notification.new wallet error --> */}
        <div className="hidden notification info flex items-center justify-between bg-red-100 px-3 py-2 rounded-sm gap-2 shadow-sm shadow-gray-400">
          <div className="flex items-start gap-2">
            <div className="pt-1 px-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_9997_251531)">
                  <path d="M2.73001 21.0001H21.26C22.03 21.0001 22.51 20.1701 22.13 19.5001L12.86 3.50006C12.47 2.83006 11.51 2.83006 11.13 3.50006L1.86001 19.5001C1.48001 20.1701 1.96001 21.0001 2.73001 21.0001ZM13 18.0001H11V16.0001H13V18.0001ZM12 14.0001C11.45 14.0001 11 13.5501 11 13.0001V11.0001C11 10.4501 11.45 10.0001 12 10.0001C12.55 10.0001 13 10.4501 13 11.0001V13.0001C13 13.5501 12.55 14.0001 12 14.0001Z" fill="#dc2626"/>
                </g>
                <defs>
                  <clipPath id="clip0_9997_251531">
                    <rect width="24" height="24" fill="#dc2626"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-sm">
              <p className="font-semibold">Error</p>                    
              <p>encoding/hex: odd length hex string</p>
            </div>
          </div>
        </div>{/* <!-- notification --> */}

      </div>{/* <!-- modal_content --> */}
      {/* <!-- BTN state 1 --> */}
     

      {/* <!-- BTN state 2 --> */}
      <div className="hidden creating-tx px-4 pb-4 md:px-6 md:pb-6 float-start">
        <div className="flex gap-2 items-center bg-cyan-800 bg-opacity-50 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-wait">
          <div className="icon animate-spin">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
              <path d="M8 3.00003V1.21003C8 0.760031 7.46 0.540031 7.15 0.860031L4.35 3.65003C4.15 3.85003 4.15 4.16003 4.35 4.36003L7.14 7.15003C7.46 7.46003 8 7.24003 8 6.79003V5.00003C11.31 5.00003 14 7.69003 14 11C14 11.79 13.85 12.56 13.56 13.25C13.41 13.61 13.52 14.02 13.79 14.29C14.3 14.8 15.16 14.62 15.43 13.95C15.8 13.04 16 12.04 16 11C16 6.58003 12.42 3.00003 8 3.00003ZM8 17C4.69 17 2 14.31 2 11C2 10.21 2.15 9.44003 2.44 8.75003C2.59 8.39003 2.48 7.98003 2.21 7.71003C1.7 7.20003 0.84 7.38003 0.57 8.05003C0.2 8.96003 0 9.96003 0 11C0 15.42 3.58 19 8 19V20.79C8 21.24 8.54 21.46 8.85 21.14L11.64 18.35C11.84 18.15 11.84 17.84 11.64 17.64L8.85 14.85C8.54 14.54 8 14.76 8 15.21V17Z" fill="#f9fafb"/>
            </svg>
          </div>
          <div>Building Transaction</div>
        </div>
      </div>
      
      {/* <!-- BTN state 3 --> */}
     { step==0&&activeWallet?.app!="g45w"&&
        <div className="build-tx px-4 pb-4 md:px-6 md:pb-6 float-start">
        <div onClick={handleGetGas} className="flex gap-2 items-center bg-cyan-800 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_9997_251496)">
                <path d="M16.95 10.23L11.29 15.89C10.9 16.28 10.27 16.28 9.88 15.89L7.05 13.06C6.66 12.67 6.66 12.04 7.05 11.65C7.44 11.26 8.07 11.26 8.46 11.65L10.58 13.77L15.53 8.82001C15.92 8.43001 16.55 8.43001 16.94 8.82001C17.34 9.21001 17.34 9.84001 16.95 10.23ZM4 12C4 9.67001 5.02 7.58001 6.62 6.12001L8.15 7.65001C8.46 7.96001 9 7.74001 9 7.29001V3.00001C9 2.72001 8.78 2.50001 8.5 2.50001H4.21C3.76 2.50001 3.54 3.04001 3.86 3.35001L5.2 4.70001C3.24 6.52001 2 9.11001 2 12C2 16.75 5.32 20.73 9.76 21.75C10.39 21.89 11 21.42 11 20.77C11 20.3 10.67 19.9 10.21 19.79C6.66 18.98 4 15.8 4 12ZM22 12C22 7.25001 18.68 3.27001 14.24 2.25001C13.61 2.11001 13 2.58001 13 3.23001C13 3.70001 13.33 4.10001 13.79 4.21001C17.34 5.02001 20 8.20001 20 12C20 14.33 18.98 16.42 17.38 17.88L15.85 16.35C15.54 16.04 15 16.26 15 16.71V21C15 21.28 15.22 21.5 15.5 21.5H19.79C20.24 21.5 20.46 20.96 20.14 20.65L18.8 19.3C20.76 17.48 22 14.89 22 12Z" fill="#f9fafb"/>
              </g>
              <defs>
                <clipPath id="clip0_9997_251496">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>Build Transaction</div>
        </div>
      </div>}
      { (step==1||(step==0&&activeWallet?.app=="g45w"))&&<div className="send-tx px-4 pb-4 md:px-6 md:pb-6 float-start">
        <div onClick={handleTransfer} className="flex gap-2 items-center bg-cyan-800 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_15354_2482)">
                <path d="M3.4 20.4L20.85 12.92C21.66 12.57 21.66 11.43 20.85 11.08L3.4 3.60002C2.74 3.31002 2.01 3.80002 2.01 4.51002L2 9.12002C2 9.62002 2.37 10.05 2.87 10.11L17 12L2.87 13.88C2.37 13.95 2 14.38 2 14.88L2.01 19.49C2.01 20.2 2.74 20.69 3.4 20.4Z" fill="#f9fafb"/>
              </g>
              <defs>
                <clipPath id="clip0_15354_2482">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>Send Transaction</div>
        </div>
      </div>}

      {/* <!-- BTN state 4 --> */}
     {step==2 && !txid && <div className="send-tx px-4 pb-4 md:px-6 md:pb-6 float-start">
        <div className="flex gap-2 items-center bg-cyan-800 bg-opacity-50 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-wait">
          <div className="icon animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_15354_2482)">
                <path d="M3.4 20.4L20.85 12.92C21.66 12.57 21.66 11.43 20.85 11.08L3.4 3.60002C2.74 3.31002 2.01 3.80002 2.01 4.51002L2 9.12002C2 9.62002 2.37 10.05 2.87 10.11L17 12L2.87 13.88C2.37 13.95 2 14.38 2 14.88L2.01 19.49C2.01 20.2 2.74 20.69 3.4 20.4Z" fill="#f9fafb"/>
              </g>
              <defs>
                <clipPath id="clip0_15354_2482">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>Sending Transaction</div>
        </div>
      </div>}

      {/* <!-- BTN state 5 --> */}
     { step==2&&txid&&<div className="send-tx px-4 pb-4 md:px-6 md:pb-6 float-start">
      <a href={`https://explorer.dero.io/tx/${txid}`} target="_blank">
        <div className="flex gap-2 items-center bg-cyan-800 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 16L13 12V8.81999C14.35 8.32999 15.26 6.92999 14.93 5.35999C14.68 4.17999 13.7 3.23999 12.51 3.03999C10.63 2.72999 9 4.16999 9 5.99999C9 7.29999 9.84 8.39999 11 8.81999V12L7 16H4C3.45 16 3 16.45 3 17V20C3 20.55 3.45 21 4 21H7C7.55 21 8 20.55 8 20V17.95L12 13.75L16 17.95V20C16 20.55 16.45 21 17 21H20C20.55 21 21 20.55 21 20V17C21 16.45 20.55 16 20 16H17Z" fill="#f9fafb"/>
            </svg>
          </div>
          <div>View On Block Explorer</div>
        </div>
        </a>
      </div>}

    </div>{/* <!-- modal-box --> */}
  </dialog>
    )
}

export default TransferModal