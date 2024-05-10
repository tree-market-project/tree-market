"use client"

import { useState } from "react"
import { useRecoverFromSeed } from "@/hooks/useRecoverFromSeed"
import { useWalletContext } from "@/contexts"

const RecoverFromSeedModal:React.FC<{show:boolean,setShow:any}> = ({show,setShow})=>{
    const {worker,walletList,setWalletList} = useWalletContext()
    const [inputType,setInputType] = useState("textarea")
    const recoverFromSeed = useRecoverFromSeed()
    const [name,setName] = useState("")
    const [pass,setPass] = useState("")
    const [passConf,setPassConf] = useState("")
    const [phrase,setPhrase] = useState("")
    const [error,setError] = useState("")

    const handleChangeName = (event:any)=>{
      setName(event.target.value)
    }

    const handleChangePass = (event:any)=>{
      setPass(event.target.value)
    }

    const handleChangePassConf = (event:any)=>{
      setPassConf(event.target.value)
    }

    const handleChangePhrase = (event:any)=>{
      if(inputType=="textarea"){
        setPhrase(event.target.value)
      }else{
        let wordArray = phrase.split(" ")
        wordArray[event.target.id] = event.target.value 
        let newPhrase = wordArray.join(" ")
        setPhrase(newPhrase)
      }
    }

    const handleRecover = async()=>{
      if(!worker){
        return
      }
      if(pass!=passConf){
        setError("Passwords don't match")
        return
      }
      let newWallet = await recoverFromSeed(worker,phrase,name,pass)
      newWallet.seed=""
      newWallet.hexSeed=""
      localStorage.setItem(`wallet-${newWallet.name}`,JSON.stringify(newWallet))
      setWalletList([...walletList,newWallet])
      setShow(false)

    }
return(
    <dialog open id="my_modal_recoverseed" className="z-50 modal w-full h-full overflow-y-scroll bg-gray-300 bg-opacity-50 flex items-center">
    <div className="modal-box relative pb-4 max-h-screen overflow-y-scroll bg-gray-100 rounded-lg ring-1 ring-gray-300 w-11/12 mx-auto max-w-screen-sm shadow-md shadow-gray-400">

      <div className="modal-action">
        <div>
          <button onClick={()=>setShow(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
      </div>{/* <!-- modal-action close --> */}

      <div className="modal_content grid gap-4 p-4 md:p-6">

        <h3 className="font-bold text-lg">Add Wallet</h3>
        <div className="px-2 py-2 font-semibold border-l-4 border-cyan-800">Recover From Seed Phrase</div>

        <div className="receiving-selector border-b">
          <div className="grid grid-cols-2 text-center">
            <div onClick={()=>setInputType("textarea")} className="font-medium cursor-pointer">
              <div className="py-4">Textarea</div>
              <div className={`selected h-[4px] ${inputType=="textarea"?"bg-cyan-800":"bg-transparent"} w-16 rounded-t-lg mx-auto`}></div>
            </div>
            <div onClick={()=>setInputType("individual")} className="font-medium cursor-pointer">
              <div className="py-4">Inputs</div>
              <div className={`selected h-[4px] ${inputType=="individual"?"bg-cyan-800":"bg-transparent"} w-16 rounded-t-lg mx-auto`}></div>
            </div>
          </div>
        </div>{/* <!-- receiving-selector --> */}

       {inputType=="textarea" && <div className="textarea">
          <div className="input-walletpass relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 w-full rounded-lg">
            <label htmlFor="phrase" className="text-sm font-semibold px-2">Seed Phrase</label>
            <textarea onChange={handleChangePhrase} value={phrase} rows={5} name="phrase" id="phrase" placeholder="word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12 word13 word14 word15 word16 word17 word18 word19 word20 word21 word22 word23 word24 word25" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"></textarea>
          </div>{/* <!-- input-walletpass --> */}
        </div>}

        {inputType=="individual" &&<div className="inputs grid sm:grid-cols-3 gap-4 ">

          <input onChange={handleChangePhrase} value={phrase.split(" ")[0]} type="text" name="word1" id="0" placeholder="word1" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>

          <input onChange={handleChangePhrase} value={phrase.split(" ")[1]} type="text" name="word2" id="1" placeholder="word2" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>

          <input onChange={handleChangePhrase} value={phrase.split(" ")[2]} type="text" name="word3" id="2" placeholder="word3" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>

          <input onChange={handleChangePhrase} value={phrase.split(" ")[3]} type="text" name="word4" id="3" placeholder="word4" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[4]} type="text" name="word5" id="4" placeholder="word5" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[5]} type="text" name="word6" id="5" placeholder="word6" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[6]} type="text" name="word7" id="6" placeholder="word7" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[7]} type="text" name="word8" id="7" placeholder="word8" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[8]} type="text" name="word9" id="8" placeholder="word9" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[9]} type="text" name="word10" id="9" placeholder="word10" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[10]} type="text" name="word11" id="10" placeholder="word11" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[11]} type="text" name="word12" id="11" placeholder="word12" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[12]} type="text" name="word13" id="12" placeholder="word13" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[13]} type="text" name="word14" id="13" placeholder="word14" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[14]} type="text" name="word15" id="14" placeholder="word15" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[15]} type="text" name="word16" id="15" placeholder="word16" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[16]} type="text" name="word17" id="16" placeholder="word17" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[17]} type="text" name="word18" id="17" placeholder="word18" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[18]} type="text" name="word19" id="18" placeholder="word19" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[19]} type="text" name="word20" id="19" placeholder="word20" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[20]} type="text" name="word21" id="20" placeholder="word21" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[21]} type="text" name="word22" id="21" placeholder="word22" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[22]} type="text" name="word23" id="22" placeholder="word23" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[23]} type="text" name="word24" id="23" placeholder="word24" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>
          
          <input onChange={handleChangePhrase} value={phrase.split(" ")[24]} type="text" name="word25" id="24" placeholder="word25" className="text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 py-2 rounded-lg shadow-inner shadow-gray-400"/>

        </div>}
        <div className="name-pass grid gap-4">
          <div className="input-walletname relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
            <label htmlFor="walletname" className="text-sm font-semibold px-2">Wallet Name</label>
            <input onChange={handleChangeName} value={name} type="text" name="walletname" id="walletname" placeholder="Enter a wallet name" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
          </div>{/* <!-- input-walletname --> */}

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="input-walletpass relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
              <label htmlFor="walletpass" className="text-sm font-semibold px-2">Password</label>
              <input onChange={handleChangePass} value={pass} type="password" name="walletpass" id="walletpass" placeholder="" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
            </div>{/* <!-- input-walletpass --> */}


            <div className="input-walletpass relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
              <label htmlFor="walletpassa" className="text-sm font-semibold px-2">Repeat Password</label>
              <input onChange={handleChangePassConf} value={passConf} type="password" name="walletpassa" id="walletpassa" placeholder="" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
            </div>{/* <!-- input-walletpass --> */}
          </div>
        </div>

      
      {error&&<div className="notification info flex items-center justify-between bg-red-100 px-3 py-2 rounded-sm gap-2 shadow-sm shadow-gray-400">
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
        </div>}
        </div>{/* <!-- modal_content --> */}

      <div className="add-wallet flex items-center justify-between px-4 pb-4 md:px-6 md:pb-6">
        <div onClick={handleRecover} className="flex gap-2 items-center bg-cyan-800 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base cursor-pointer">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_9997_251176)">
                <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM5 21V19H3C3 20.1 3.89 21 5 21ZM3 9H5V7H3V9ZM15 21H17V19H15V21ZM19 3H9C7.89 3 7 3.9 7 5V15C7 16.1 7.89 17 9 17H19C20.1 17 21 16.1 21 15V5C21 3.9 20.1 3 19 3ZM18 15H10C9.45 15 9 14.55 9 14V6C9 5.45 9.45 5 10 5H18C18.55 5 19 5.45 19 6V14C19 14.55 18.55 15 18 15ZM11 21H13V19H11V21ZM7 21H9V19H7V21Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_9997_251176">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>Recover</div>
        </div>

        {inputType=="individual"&&<div className="flex gap-2 items-center bg-gray-200 px-4 py-2 ring-1 ring-gray-400 rounded-md text-center text-sm sm:text-base shadow-sm shadow-gray-400 cursor-pointer">
          <div>✕</div>
          <div>Clear Inputs</div>
        </div>}

    </div>
    </div>{/* <!-- modal-box --> */}
  </dialog>
)
}

export default RecoverFromSeedModal