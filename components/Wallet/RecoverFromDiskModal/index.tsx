"use client"
import { useRecoverFromDisk } from "@/hooks/useRecoverFromDisk"
import { useState } from "react"
import { useWalletContext } from "@/contexts"

const RecoverFromDiskModal:React.FC<{show:boolean,setShow:any}> = ({show,setShow})=>{
  const {worker,walletList,setWalletList} = useWalletContext()
  const recoverFromDisk = useRecoverFromDisk()
  const [file,setFile] = useState("")
  const [name,setName] = useState("")
  const [pass,setPass] = useState("")
  const [error,setError] = useState("")

  

  const handleUpload = (event:any)=>{
    const file = event.target?.files?.[0]; // Get the selected file

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileContent = e.target?.result as string; // Get the file content
                setFile(fileContent)
                //console.log('File content:', fileContent);
                // Process the file content as needed (e.g., parse JSON)
            };
            reader.readAsText(file); // Read the file as text
        }
        
  }

  const handleChangeName = (event:any)=>{
    setName(event.target.value)
  }

  const handleChangePass = (event:any)=>{
    setPass(event.target.value)
  }

 

  
  const handleRecover = async()=>{
    if(!worker){
      return
    }
    
    let newWallet = await recoverFromDisk(worker,file,name,pass)
    if(newWallet.err){
      setError(newWallet.err)
      return
    }
    newWallet.seed=""
    newWallet.hexSeed=""
    localStorage.setItem(`wallet-${newWallet.name}`,JSON.stringify(newWallet))
    setWalletList([...walletList,newWallet])
    setShow(false)
  }
    return(
        <dialog open id="my_modal_recoverdisk" className="z-50 modal w-full h-full overflow-y-scroll bg-gray-300 bg-opacity-50 flex items-center">
        <div className="modal-box relative pb-4 max-h-screen overflow-y-scroll bg-gray-100 rounded-lg ring-1 ring-gray-300 w-11/12 mx-auto max-w-screen-sm shadow-md shadow-gray-400">

      <div className="">
        <div>
          <button onClick={()=>setShow(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
      </div>{/* <!-- modal-action close --> */}

      <div className="modal_content grid gap-4 p-4 md:p-6">

        <h3 className="font-bold text-lg">Add Wallet</h3>
        <div className="px-2 py-2 font-semibold border-l-4 border-cyan-800">Recover From Disk</div>

        <div className="input-file relative grid items-center py-2 mx-auto w-full">
          <label htmlFor="file" className="text-sm font-semibold px-2">Encrypted Wallet File</label>
          <input onChange={handleUpload} type="file" name="file" id="file" placeholder="" className="py-1 text-sm bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
        </div>{/* <!-- input-file --> */}

        <div className="name-pass grid gap-4">
          <div className="input-walletname relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
            <label htmlFor="walletname" className="text-sm font-semibold px-2">Wallet Name</label>
            <input onChange={handleChangeName} type="text" name="walletname" id="walletname" placeholder="Enter a wallet name" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
          </div>{/* <!-- input-walletname --> */}

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="input-walletpass relative grid items-center px-2 py-2 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
              <label htmlFor="walletpass" className="text-sm font-semibold px-2">Password</label>
              <input onChange={handleChangePass} type="password" name="walletpass" id="walletpass" placeholder="" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
            </div>{/* <!-- input-walletpass --> */}


           
          </div>
        </div>{/* <!-- name-pass --> */}

      
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
      <div className="add-wallet px-4 pb-4 md:px-6 md:pb-6 float-start">
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
</div>
    </div>{/* <!-- modal-box --> */}
  </dialog>
    )
}

export default RecoverFromDiskModal