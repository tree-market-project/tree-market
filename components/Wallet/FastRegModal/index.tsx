"use client"
import { useFastRegister } from "@/hooks/useFastRegister"
import { useEffect, useState } from "react"
import { useFastRegistrationContext } from "@/contexts"
import { useRecoverFromHex } from "@/hooks/useRecoverFromHex"

const FastRegModal:React.FC<{show:boolean,setShow:any}> =  ({show,setShow}) =>{
    const {fastRegister,stop} = useFastRegister()
    const recoverFromHex = useRecoverFromHex()
    const [threads,setThreads] = useState(1)
    const {workerCount,hashCount,hashRateTotal,hashCountTotal,status,setStatus,wallet,txWorker} = useFastRegistrationContext()
    const [password,setPassword] = useState("")
    const [passwordConf,setPasswordConf] = useState("")
    const [walletName,setWalletName] = useState("")
    const [error,setError] = useState("")
   
    const handleChangePassword = (event:any)=>{
      setPassword(event?.target.value)
    }
    const handleChangePasswordConf = (event:any)=>{
      setPasswordConf(event?.target.value)
    }
    const handleChangeWalletName = (event:any)=>{
      setWalletName(event.target.value)
    }

     useEffect(()=>{
      if (navigator.hardwareConcurrency) {
        console.log(`Number of logical processor cores: ${navigator.hardwareConcurrency}`);
        setThreads(navigator.hardwareConcurrency-2)
      } else {
        console.log('CPU information not available.');
      }
    },[]) 

    const handleThreadInput = (event:any)=>{
        
        setThreads(event.target.value)
    }

    const handleStart = async()=>{
        console.log(threads)
        setStatus("initializing")
        fastRegister(threads)
    }

    const handleStop =  async()=>{
      stop()
      setStatus("idle")
      //setStatus("idle")
    }

    const handleStore = async()=>{
      if(typeof window == 'undefined'){
        return
      }
      if(password!=passwordConf){
        setError("Passwords don't match")
        return
      }
      if(!wallet?.hexSeed){
        console.log("no seed")
        return
      }
      if(!txWorker){
        console.log("no worker")
        return
      }
      let storedWallet = await recoverFromHex(txWorker,wallet.hexSeed,walletName,password)
      storedWallet.seed = ""
      storedWallet.hexSeed=""
      storedWallet.open=false
      storedWallet.active=false
      storedWallet.app="web"
      storedWallet.connection="web"
      wallet.balances=[{name:"Dero",symbol:"DERO",scid:"0000000000000000000000000000000000000000000000000000000000000000",decimals:5,iconURL:"/images/currency-icons/dero-icon.png"},{name:"Leaf Token",symbol:"LEAF",scid:"e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4",decimals:5}]

      localStorage.setItem("wallet-"+walletName,JSON.stringify(storedWallet))
      setShow(false)

    }
    return(
        <>
        {show && (<dialog open id="my_modal_fastreg" className="z-50 modal w-full h-full overflow-y-scroll bg-gray-300 bg-opacity-50 flex items-center">
    <div className="modal-box relative pb-4 max-h-screen overflow-y-scroll bg-gray-100 rounded-lg ring-1 ring-gray-300 w-11/12 mx-auto max-w-screen-sm shadow-md shadow-gray-400">
    
          <div className="">
            <form>
              <button onClick={()=>setShow(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>{/* <!-- modal-action close --> */}
    
          <div className="modal_content grid gap-4 p-4 md:p-6">
    
            <h3 className="font-bold text-lg">Create New Wallet</h3>
            <div className="px-2 py-2 font-semibold border-l-4 border-cyan-800">Fast Registration</div>
    
            <div className="initial-fastreg grid gap-4">
              <p className="text-sm">The Dero blockchain is an account based model and requires a one time registration proccess with Proof-Of-Work (POW) to avoid spam.</p>
    
              {/* <!-- COMPONENT Notification.new wallet --> */}
             {status=="idle" && <div className="notification info flex items-center justify-between bg-amber-50 px-3 py-2 rounded-sm gap-2 shadow-sm shadow-gray-400">
                <div className="flex items-start gap-2">
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
                  <div className="text-sm">                        
                    <p>Using higher thread count is faster but will use more CPU power. The default number is the recommended number of threads for your CPU but you can crank this up. <span className="text-xs font-semibold xl:hidden">Note: It is not recommended to create a new wallet using a mobile device, it may take a long time.</span></p>
                  </div>
                </div>
              </div>}{/* <!-- notification --> */}
    
              {status=="idle" && <div className="input-walletpass relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                <label htmlFor="hexseed" className="text-sm font-semibold px-2">Threads</label>
                <input value={threads} onChange={handleThreadInput} type="number" name="hexseed" id="hexseed" placeholder="Enter number of workers" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
              </div>}{/* <!-- input-walletpass --> */}
            </div>
    
            {/* <!-- step 2 --> */}
           {status=="initializing"? 
           <div className="initiating-working grid gap-6">
              
              <div className="step1 flex justify-start items-center gap-4">
                
                <div className="grid gap-2">
                  <div className="font-semibold">Initiating workers</div>
                  <div>{workerCount} of {threads}</div>
                </div>
    
                <div className="animate-spin text-4xl text-cyan-800">
                  &#9775;
                </div>
    
              </div>
    
              <div className="step2 grid gap-2">
                <div className="font-semibold">Working</div>
                <div className="progress_bar relative flex items-center w-full">
                  <div className="relative w-full rounded-xl bg-gradient-to-l from-gray-300 to-gray-100 h-[20px]">
                    <div style={{width:`${100*hashCountTotal/(16750000+hashCountTotal)}%`}} className="progress flex flex-col justify-center items-center content-start p-2 bg-cyan-800 rounded-xl h-[20px]"  >
                    </div>
                  </div>
                </div>{/* <!-- progress_bar --> */}
                <div className="text-sm">hr: {hashRateTotal}, hc: {hashCountTotal}, t: {threads}, c: {(100*hashCountTotal/(16750000+hashCountTotal)).toFixed(2)}%</div>
              </div>
            </div>
            :''
            }
    
           {/*  <!-- step 3 --> */}
            {status=="complete" && <div className="create-wallet grid gap-4">
    
              {/* <!-- COMPONENT Notification.new wallet --> */}
              <div className="notification info flex items-center justify-between bg-green-100 px-3 py-2 rounded-sm gap-2 shadow-sm shadow-gray-400">
                <div className="flex items-start gap-2">
                  <div className="pt-1 px-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_9997_252903)">
                        <path d="M6 17.9999H18C18.55 17.9999 19 18.4499 19 18.9999C19 19.5499 18.55 19.9999 18 19.9999H6C5.45 19.9999 5 19.5499 5 18.9999C5 18.4499 5.45 17.9999 6 17.9999ZM11.01 13.8999C10.23 14.6699 8.97 14.6699 8.19 13.8899L6 11.6999C5.45 11.1499 5.46 10.2599 6.03 9.72994C6.57 9.20994 7.43 9.22994 7.95 9.74994L9.6 11.3999L16.03 4.96994C16.57 4.42994 17.44 4.42994 17.98 4.96994L18.02 5.00994C18.56 5.54994 18.56 6.42994 18.01 6.96994L11.01 13.8999Z" fill="#111827"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_9997_252903">
                          <rect width="24" height="24" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-sm">                        
                    <p>The registration process has completed! Your Dero wallet is now ready to use.</p>
                  </div>
                </div>
              </div>{/* <!-- notification --> */}
              <div className="notification info flex items-center justify-between bg-amber-50 px-3 py-2 rounded-sm gap-2 shadow-sm shadow-gray-400">
            <div className="flex items-start gap-2">
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
              <div className="text-sm space-y-2">                        
                <p><u>Save the below Seed Phrase and HEX to a safe location</u>. These are the private keys to your wallet.</p>
                <p className="font-bold">DO NOT SHARE THESE WITH ANYONE ELSE, INCLUDING SUPPORT.</p>
              </div>
            </div>
          </div>
    
              <div className="grid gap-4 text-sm break-all p-2 bg-gray-200 shadow-inner shadow-gray-400">
                <div className="grid gap-1">
                  <div className="font-medium">Address</div>
                  <div>{wallet?.address}</div>
                </div>
    
                <div className="grid gap-1">
                  <div className="font-medium">Seed Phrase</div>
                  <div>{wallet?.seed}</div>
                </div>
    
                <div className="grid gap-1">
                  <div className="font-medium">HEX Seed</div>
                  <div>{wallet?.hexSeed}</div>
                </div>
              </div>
    
              <div className="input-walletpass relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                <label htmlFor="walletname" className="text-sm font-semibold px-2">Wallet Name</label>
                <input onChange={handleChangeWalletName} value={walletName} type="text" name="walletname" id="walletname" placeholder="Enter a wallet name" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
              </div>{/* <!-- input-walletpass --> */}
    
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="input-walletpass relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                  <label htmlFor="walletpass" className="text-sm font-semibold px-2">Password</label>
                  <input onChange={handleChangePassword} value={password} type="password" name="walletpass" id="walletpass" placeholder="" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                </div>{/* <!-- input-walletpass --> */}
    
    
                <div className="input-walletpass relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                  <label htmlFor="walletpassa" className="text-sm font-semibold px-2">Repeat Password</label>
                  <input onChange={handleChangePasswordConf} value={passwordConf} type="password" name="walletpassa" id="walletpassa" placeholder="" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                </div>{/* <!-- input-walletpass --> */}
              </div>
    
            </div>}
    
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
                  <p>{error}</p>
                </div>
              </div>
            </div>{/* <!-- notification --> */}
    
          </div>{/* <!-- modal_content --> */}
    
        { status=="idle"&& <div className="add-wallet px-4 pb-4 md:px-6 md:pb-6 float-start">
            <div onClick={handleStart} className="flex gap-2 items-center bg-cyan-800 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="21" viewBox="0 0 15 21" fill="none">
                  <path d="M3.79 8.24V4.5C3.79 3.12 4.91 2 6.29 2C7.67 2 8.79 3.12 8.79 4.5V8.24C10 7.43 10.79 6.06 10.79 4.5C10.79 2.01 8.78 0 6.29 0C3.8 0 1.79 2.01 1.79 4.5C1.79 6.06 2.58 7.43 3.79 8.24ZM9.29 10.71C9.01 10.57 8.71 10.5 8.4 10.5H7.79V4.5C7.79 3.67 7.12 3 6.29 3C5.46 3 4.79 3.67 4.79 4.5V15.24L1.35 14.52C0.979997 14.44 0.589998 14.56 0.319998 14.83C-0.110002 15.27 -0.110002 15.97 0.319998 16.41L4.33 20.42C4.71 20.79 5.22 21 5.75 21H11.85C12.85 21 13.69 20.27 13.83 19.28L14.46 14.81C14.58 13.96 14.14 13.12 13.37 12.74L9.29 10.71Z" fill="#ffffff"/>
                </svg>
              </div>
              <div>Start</div>
            </div>
          </div>}
          {status =="initializing" &&<div className="add-wallet px-4 pb-4 md:px-6 md:pb-6 float-start">
            <div onClick={handleStop} className="flex gap-2 items-center bg-red-500 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">
              <div>✕</div>
              <div>Stop</div>
            </div>
          </div>}
          {status=="complete"&&<div className="add-wallet px-4 pb-4 md:px-6 md:pb-6 float-start">
            <div onClick={handleStore} className="flex gap-2 items-center bg-cyan-800 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                  <path d="M20 0.0100098H2C0.9 0.0100098 0 0.91001 0 2.01001V5.00001C0 5.55001 0.45 6.00001 1 6.00001C1.55 6.00001 2 5.55001 2 5.00001V2.99001C2 2.44001 2.45 1.99001 3 1.99001H19C19.55 1.99001 20 2.44001 20 2.99001V15.02C20 15.57 19.55 16.02 19 16.02H3C2.45 16.02 2 15.57 2 15.02V13C2 12.45 1.55 12 1 12C0.45 12 0 12.45 0 13V16.01C0 17.1 0.89 17.99 1.98 17.99H20C21.1 17.99 22 17.09 22 15.99V2.01001C22 0.91001 21.1 0.0100098 20 0.0100098ZM10.85 12.15L13.64 9.36001C13.84 9.16001 13.84 8.85001 13.64 8.65001L10.85 5.86001C10.54 5.54001 10 5.76001 10 6.21001V8.00001H1C0.45 8.00001 0 8.45001 0 9.00001C0 9.55001 0.45 10 1 10H10V11.79C10 12.24 10.54 12.46 10.85 12.15Z" fill="#ffffff"/>
                </svg>
              </div>
              <div>Save to Local Storage</div>
            </div>
          </div>}
    
        </div>{/* <!-- modal-box --> */}
      </dialog>)}
      </>
    )
}
export default FastRegModal