"use client"

import { Modal } from "@/components/Common/Modal"
import { useState } from "react"
import { useRegisterDeroID } from "@/hooks/useRegisterDeroID"
import { useSearchParams } from "next/navigation"

const RegisterDeroIDModal:React.FC<{setShow:any}> = ({setShow}) =>{
  const [step,setStep] = useState(0)
  const [txid,setTXID] = useState("")
  const registerDeroID = useRegisterDeroID()
  const [name,setName] = useState("")
  const searchParams = useSearchParams()
  const scid = searchParams.get("scid")
  const scidStr = Array.isArray(scid)?scid[0]:scid||''

  const handleChangeName = (e:any)=>{
    setName(e.target.value)
  }

  const register = async ()=>{
    if(!scid){
      return
    }
    setStep(1)
    const txid = await registerDeroID(name,scidStr)
    setTXID(txid)
  }
    return(
        <Modal setShow={setShow} id="register-deroid">
            <div className="modal_content grid gap-4 p-4 md:p-6">

<h3 className="font-bold text-lg">Register DeroID Name</h3>
{/* <!-- COMPONENT Notification.info --> */}
<div className="notification info flex items-center border-2 border-gray-200 bg-amber-50 p-3 rounded-sm gap-2">
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
  <div className="text-sm">Add a unique name to your DeroID. This name is case insensitive, so once it is registered it cannot be used by anyone else.</div>
</div>{/* <!-- notification.info --> */}

<div className="input-deroidname relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
  <label htmlFor="newname" className="text-sm font-semibold px-2">DeroID Name</label>
  <input disabled={step!=0} value={name} onChange={handleChangeName} type="text" name="newname" id="newname" placeholder="ex: TreeMarket" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
</div>{/* <!-- input-deroidname --> */}

<div className="txfee grid gap-3 px-2 py-1 border-l-4 border-cyan-800">
  <div className="amount flex flex-wrap items-center justify-between gap-2">
    <div className="font-medium text-sm">Amount Due</div>
    <div className="text-sm text-right">
      1 DNS
    </div>
  </div>
  {/* <div className="tx-fee flex flex-wrap items-center justify-between gap-2">
    <div className="font-medium text-sm">Network Fee</div>
    <div className="text-sm text-right">
      0.00080 DERO
    </div>
  </div> */}
  <div className="swapinfo w-full flex items-center justify-between gap-2">
    <div className="font-bold">You will send</div>
    <div>&#8594;</div>
    <div className="font-bold text-right">1 DNS</div>
  </div>
</div>

</div>{/* <!-- modal_content --> */}

{/* <!-- BTN state 1 --> */}
{step==0 && <div onClick={register} className="register-name px-4 pb-4 md:px-6 md:pb-6 float-start">
<div className="flex gap-2 items-center bg-cyan-800 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">
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
  <div>Register DeroID Name</div>
</div>
</div>}

{/* <!-- BTN state 2 --> */}
{step==1&&!txid&&<div className="send-tx px-4 pb-4 md:px-6 md:pb-6 float-start">
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

{/* <!-- BTN state 3 --> */}
{txid&&<a href={`https://explorer.dero.io/tx/${txid}`} target="_blank" className="tx-confirmed px-4 pb-4 md:px-6 md:pb-6 float-start">
<div className="flex gap-2 items-center bg-cyan-800 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M17 16L13 12V8.81999C14.35 8.32999 15.26 6.92999 14.93 5.35999C14.68 4.17999 13.7 3.23999 12.51 3.03999C10.63 2.72999 9 4.16999 9 5.99999C9 7.29999 9.84 8.39999 11 8.81999V12L7 16H4C3.45 16 3 16.45 3 17V20C3 20.55 3.45 21 4 21H7C7.55 21 8 20.55 8 20V17.95L12 13.75L16 17.95V20C16 20.55 16.45 21 17 21H20C20.55 21 21 20.55 21 20V17C21 16.45 20.55 16 20 16H17Z" fill="#f9fafb"/>
    </svg>
  </div>
  <div>View On Block Explorer</div>
</div>
</a> }
        </Modal>
    )
}

export default RegisterDeroIDModal