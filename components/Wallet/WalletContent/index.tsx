"use client"
import LeafPromoBox from "@/components/Common/LeafPromotionBox"
import { useWalletContext } from "@/contexts"
import { wallet } from "@/types"
import { useState } from "react"
import ConnectionInfo from "../ConnectionInfo"
import { useInitializeWorker } from "@/hooks/useInitializeWorker"
import { useRecoverFromDisk } from "@/hooks/useRecoverFromDisk"
import useCloseWallet from "@/hooks/useCloseWallet"
import ActiveWalletBox from "../ActiveWalletBox"
import Systems from "../Systems"
import DownloadLinks from "../DownloadLinks"
import { WalletApp } from "@/types"
import getWalletAppData from "@/utils/getWallAppData"
import ConnectedWallet from "@/components/Common/ConnectedWallet"
import useConnectRPC from "@/hooks/useConnectRPC"
import useGetAddressRPC from "@/hooks/useGetAddressRPC"
import useConnectXSWD from "@/hooks/useConnectXSWD"

const WalletContent:React.FC<{toasterRef:any,setShowConfirmRemoveModal:any,setShowVault:any,setShowRenameWalletModal:any,setShowRecoverFromDiskModal:any,setShowRecoverFromSeedModal:any,setShowRecoverFromHexModal:any,setShowFastRegModal:any,setShowEnterPassModal:any}> = ({toasterRef,setShowConfirmRemoveModal,setShowVault,setShowRenameWalletModal,setShowRecoverFromDiskModal,setShowRecoverFromSeedModal,setShowRecoverFromHexModal,setShowFastRegModal,setShowEnterPassModal})=>{
  const [walletApp,setWalletApp] = useState<WalletApp | null>(null)
  const closeWallet = useCloseWallet()
  const {worker,setWorker,activeWallet,setActiveWallet,walletList,setWalletList} = useWalletContext()
  const initializeWorker = useInitializeWorker()
  const recoverFromDisk = useRecoverFromDisk()
  const [showAddWalletOptions,setShowAddWalletOptions] = useState(false)
  const [showWalletActions,setShowWalletActions] = useState(false)
  const connectRPC = useConnectRPC()
  const getAddressRPC = useGetAddressRPC()
  const connectXSWD = useConnectXSWD()
  
  

  const handleSelectWallet = async (app:string)=>{
    let newApp = getWalletAppData(app)
    setWalletApp(newApp)
    console.log(app)
    let newWallet:wallet = {app:"",address:"",connection:"",name:"",password:"",fileData:null,seed:"",hexSeed:"",open:false,active:false,balances: [{name:"Dero",symbol:"DERO",scid:"0000000000000000000000000000000000000000000000000000000000000000",decimals:5,iconURL:"/images/currency-icons/dero-icon.png"},{name:"Leaf Token",symbol:"LEAF",scid:"e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4",decimals:5}]}
    switch(app){
      case "engram":
        let engram = walletList.find(wallet=>wallet.app=="engram")
        console.log(walletList)
        if(engram){
          console.log("engram",engram)
          setActiveWallet(engram)
          return
        }
        newWallet.app="engram"
        newWallet.connection="rpc"
        newWallet.name = "Engram"
        //connectRPC("engram")
        //getAddressRPC()
        break;
      case "web":
        newWallet.app="web"
        newWallet.connection="web"
        setActiveWallet(newWallet)
        setShowAddWalletOptions(false)
        setShowWalletActions(false)
        if(!worker){
          //let newWorker:Worker = await initializeWorker()
          //setWorker(newWorker)
        }
        break;
      case "g45w":
        let g45w = walletList.find(wallet=>wallet.app=="g45w")
        console.log(walletList)
        if(g45w){
          
          setActiveWallet(g45w)
          return
        }
        newWallet.app="g45w"
        newWallet.connection="xswd"
        newWallet.name="G45W"
        //connectXSWD()
        break;
      case "cli":
        let cli = walletList.find(wallet=>wallet.app=="cli")
        
        if(cli){
          
          setActiveWallet(cli)
          return
        }
        newWallet.app="cli"
        newWallet.connection="rpc"
        newWallet.name="CLI"
        //connectRPC("cli")
      default:

    }
    if(app!="web"){
      setActiveWallet(newWallet)
    }
    
    
  }
  const handleOpenCloseWallet = async (open:boolean)=>{
    if(!activeWallet?.address){
      return
    }
    if(!open){
      setShowEnterPassModal(true)
    }else{
      if(!worker){
      return

    }
    let close = await closeWallet(worker,activeWallet)
    if(close){
      let newWallet = activeWallet
      newWallet.open = false
      setActiveWallet(newWallet)
      let newList = [...walletList]
        let index = newList.findIndex(x=>x.address==activeWallet?.address)
        newList[index].open = false
        setWalletList(newList)
    }

    }
  }
  const handleCloseAllWallets = async()=>{
    setShowWalletActions(false)
    if(!worker){
      return
    }
    let newList = [...walletList]
    for(let wallet of newList){
      let close = await closeWallet(worker,wallet)
      if(close){
        wallet.open=false
      }
    }
    setWalletList(newList)
    let newActive = activeWallet
    if(newActive){
      newActive.open=false
    setActiveWallet(newActive)
    }
    
    
  }
  const handleSelectIntegratedWallet = (index: number) => {
    const updatedWalletList = [...walletList];
    updatedWalletList.forEach(wallet => {
      wallet.active=false
    });
    updatedWalletList[index].active = true;
    setWalletList(updatedWalletList); 
    setActiveWallet(updatedWalletList[index])
  };
 
  const handleRemoveWallet = ()=>{
    setShowWalletActions(false)
    if(!activeWallet?.address){
      return
    }
    setShowConfirmRemoveModal(true)
 
  }
  const handleRemoveAll = () => {
    Object.keys(localStorage).forEach((key) => {
        if (key.substring(0, 7) === 'wallet-') {
            localStorage.removeItem(key);
        }
    });
    setWalletList([])
    if(activeWallet?.app == "web"){
      handleSelectWallet("web")
    }
};






  const handleExport = () => {
    // Check if activeWallet and fileData exist
    if (activeWallet && activeWallet.fileData) {
        const fileContent = activeWallet.fileData; // Assuming fileData contains the file content

        // Create a Blob object from the file content
        const blob = new Blob([fileContent], { type: 'application/octet-stream' });

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);

        // Set the download attribute with the desired file name
        link.download = `${activeWallet.name}.db`; // Change the file name as needed

        // Append the link to the document body and trigger the click event to initiate the download
        document.body.appendChild(link);
        link.click();

        // Remove the link after download
        document.body.removeChild(link);
    } else {
        console.log('No active wallet or file data available');
    }
};

  
    return(
      <div className="wallet-content">
          {/* <!-- COMPONENT Content Container --> */}
          <div className="clear-both h-8"></div>
          <div className="content-container relative mx-auto w-full px-5 sm:px-6">
            <div className="item-contents flex flex-col gap-6">
                <div className="content-title flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold">
                    Connect To Your Dero Wallet
                  </h3>
                  </div>
                  
                  <div onClick={()=>setShowVault(true)} className="flex items-center justify-center gap-2 px-3 py-1 bg-green-100 ring-gray-600 rounded-md ring-1 shadow-sm shadow-gray-400 cursor-pointer hover:shadow-inner hover:shadow-gray-400">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_14988_16008)">
                        <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM17 20H7C6.45 20 6 19.55 6 19V11C6 10.45 6.45 10 7 10H17C17.55 10 18 10.45 18 11V19C18 19.55 17.55 20 17 20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" fill="#4b5563"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_14988_16008">
                          <rect width="24" height="24" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="font-medium">Assets</div>
                </div>
                </div>{/* <!-- content-title --> */}
                
                <div className="description relative">
                  <p>Select one of the wallets to view instructions on how to connect through Tree.Market and view your Dero assets.</p>
                </div>{/* <!-- description --> */}

                <div className="wallet-select grid gap-4 grid-cols-2">
                  <div onClick={()=>handleSelectWallet("web")} className={`wallet-tile relative flex items-center justify-between gap-2 w-full ${activeWallet?.app=="web"?'bg-[#b8dbc6]':'bg-gray-100'} px-4 py-4 mx-auto rounded-lg shadow-sm shadow-gray-400 text-gray-700 cursor-pointer hover:shadow-inner hover:shadow-gray-300`}>
                    <div className="wallet-info flex items-center gap-2">
                      <div className="name">
                        <div className="item-name font-medium">DeroWeb</div>
                      </div>
                    </div>{/* <!-- wallet-info --> */}
                    <div className="icon">
                      <img src="https://digitalbanjare.com/img/wallet/deroweb-icon.png" className="w-[24px] mx-auto" />
                    </div>{/* <!-- icon --> */}
                  </div>{/* <!-- wallet-tile deroweb --> */}

                  <div onClick={()=>handleSelectWallet("g45w")} className={`wallet-tile relative flex items-center justify-between gap-2 w-full ${activeWallet?.app=="g45w"?'bg-[#b8dbc6]':'bg-gray-100'} px-4 py-4 mx-auto rounded-lg shadow-sm shadow-gray-400 text-gray-700 cursor-pointer hover:shadow-inner hover:shadow-gray-300`}>
                    <div className="wallet-info flex items-center gap-2">
                      <div className="name">
                        <div className="item-name font-medium">G45W</div>
                      </div>
                    </div>{/* <!-- wallet-info --> */}
                    <div className="icon">
                      <img src="https://digitalbanjare.com/img/wallet/g45w-icon.png" className="w-[24px] mx-auto" />
                    </div>{/* <!-- icon --> */}
                  </div>{/* <!-- wallet-tile g45w --> */}

                  <div onClick={()=>handleSelectWallet("engram")} className={`wallet-tile relative flex items-center justify-between gap-2 w-full ${activeWallet?.app=="engram"?'bg-[#b8dbc6]':'bg-gray-100'} px-4 py-4 mx-auto rounded-lg shadow-sm shadow-gray-400 text-gray-700 cursor-pointer hover:shadow-inner hover:shadow-gray-300`}>
                    <div className="wallet-info flex items-center gap-2">
                      <div className="name">
                        <div className="item-name font-medium">Engram</div>
                      </div>
                    </div>{/* <!-- wallet-info --> */}
                    <div className="icon">
                      <img src="https://digitalbanjare.com/img/wallet/engram-icon.png" className="w-[22px] mx-auto" />
                    </div>{/* <!-- icon --> */}
                  </div>{/* <!-- wallet-tile engram --> */}

                  <div onClick={()=>handleSelectWallet("cli")} className={`wallet-tile relative flex items-center justify-between gap-2 w-full ${activeWallet?.app=="cli"?'bg-[#b8dbc6]':'bg-gray-100'} px-4 py-4 mx-auto rounded-lg shadow-sm shadow-gray-400 text-gray-700 cursor-pointer hover:shadow-inner hover:shadow-gray-300`}>
                    <div className="wallet-info flex items-center gap-2">
                      <div className="name">
                        <div className="item-name font-medium">CLI</div>
                      </div>
                    </div>{/* <!-- wallet-info --> */}
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_9997_253380)">
                          <path d="M5 17.5C5.83 17.5 6.5 16.83 6.5 16C6.5 15.17 5.83 14.5 5 14.5C4.17 14.5 3.5 15.17 3.5 16C3.5 16.83 4.17 17.5 5 17.5ZM9 13C9.55 13 10 12.55 10 12C10 11.45 9.55 11 9 11C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13ZM9 9C9.55 9 10 8.55 10 8C10 7.45 9.55 7 9 7C8.45 7 8 7.45 8 8C8 8.55 8.45 9 9 9ZM4 21H20C20.55 21 21 20.55 21 20C21 19.45 20.55 19 20 19H4C3.45 19 3 19.45 3 20C3 20.55 3.45 21 4 21ZM5 9.5C5.83 9.5 6.5 8.83 6.5 8C6.5 7.17 5.83 6.5 5 6.5C4.17 6.5 3.5 7.17 3.5 8C3.5 8.83 4.17 9.5 5 9.5ZM5 13.5C5.83 13.5 6.5 12.83 6.5 12C6.5 11.17 5.83 10.5 5 10.5C4.17 10.5 3.5 11.17 3.5 12C3.5 12.83 4.17 13.5 5 13.5ZM9 17C9.55 17 10 16.55 10 16C10 15.45 9.55 15 9 15C8.45 15 8 15.45 8 16C8 16.55 8.45 17 9 17ZM17 16.5C17.28 16.5 17.5 16.28 17.5 16C17.5 15.72 17.28 15.5 17 15.5C16.72 15.5 16.5 15.72 16.5 16C16.5 16.28 16.72 16.5 17 16.5ZM3 4C3 4.55 3.45 5 4 5H20C20.55 5 21 4.55 21 4C21 3.45 20.55 3 20 3H4C3.45 3 3 3.45 3 4ZM17 8.5C17.28 8.5 17.5 8.28 17.5 8C17.5 7.72 17.28 7.5 17 7.5C16.72 7.5 16.5 7.72 16.5 8C16.5 8.28 16.72 8.5 17 8.5ZM17 12.5C17.28 12.5 17.5 12.28 17.5 12C17.5 11.72 17.28 11.5 17 11.5C16.72 11.5 16.5 11.72 16.5 12C16.5 12.28 16.72 12.5 17 12.5ZM13 9C13.55 9 14 8.55 14 8C14 7.45 13.55 7 13 7C12.45 7 12 7.45 12 8C12 8.55 12.45 9 13 9ZM13 13C13.55 13 14 12.55 14 12C14 11.45 13.55 11 13 11C12.45 11 12 11.45 12 12C12 12.55 12.45 13 13 13ZM13 17C13.55 17 14 16.55 14 16C14 15.45 13.55 15 13 15C12.45 15 12 15.45 12 16C12 16.55 12.45 17 13 17Z" fill="#111827"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_9997_253380">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>{/* <!-- icon --> */}
                  </div>{/* <!-- wallet-tile cli --> */}
                </div>{/* <!-- wallet-select --> */}


                <div className="how-to px-2 grid gap-4">

                  <div className="heading text-xl font-bold py-2 lg:hidden">
                    <h2>{walletApp?.name||"Select a wallet"}</h2>
                  </div>

                  <div className="content-section relative grid gap-8">
                 {activeWallet&&(activeWallet?.app!="web"&&!activeWallet?.open||activeWallet?.app=="web"&&!worker)&& <div className="notification info flex items-center border-2 border-gray-200 bg-amber-50 px-3 py-1 rounded-sm gap-2">
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
                    <div className="text-sm">                        
                      <p>Click the Connect button to start.</p>
                    </div>
                  </div>}
                  {activeWallet&& <div className="connection-container relative flex flex-col gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-gray-400 lg:hidden">
                      <ConnectionInfo/>
                    </div>}
                    {activeWallet?.app=="web" && 
                    <>

                    <div className="general-wallet-info grid gap-4 lg:hidden">
                    {/* <!-- COMPONENT wallet systems info --> */}
                    <div className="grid gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-gray-400">
                      <Systems app={activeWallet.app}/>{/* <!-- systems --> */}
                    </div>
                  </div>{/* <!-- general-wallet-info --> */}

                  {/* <!-- COMPONENT Notification.new wallet --> */}
                  {worker&&<div className="notification info flex items-center justify-between bg-green-100 px-3 py-2 rounded-sm gap-2 shadow-sm shadow-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <g clip-path="url(#clip0_14988_30289)">
                            <path d="M10 16V8C10 6.9 10.89 6 12 6H21V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V18H12C10.89 18 10 17.1 10 16ZM13 8C12.45 8 12 8.45 12 9V15C12 15.55 12.45 16 13 16H22V8H13ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" fill="#4b5563"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_14988_30289">
                              <rect width="24" height="24" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-sm">                        
                        <p>Create a wallet with Fast Registration.</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm border border-gray-600 px-4 py-1 rounded-md cursor-pointer text-center shadow-sm shadow-gray-400 hover:shadow-inner" onClick={()=>setShowFastRegModal(true)}>New Wallet</div>
                    </div>
                  </div>}{/* <!-- notification --> */}

                  {/* <!-- COMPONENT Active Wallet --> */}
                  {activeWallet?.address&&
                  <div className="address-container flex flex-col gap-3 bg-blue-50 rounded-2xl p-4 shadow-sm shadow-gray-400 lg:hidden">
                  <ActiveWalletBox toasterRef={toasterRef}/>
                  </div>}{/* <!-- address-container active wallet --> */}

                 { /* <!-- COMPONENT Integrated Wallets --> */}

                  {worker&&<div className="integrated-wallets relative grid gap-4 bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">     
                    <h3 className="font-semibold">Integrated Wallets</h3>
                    <div className="dero-wallet grid gap-4">

                     {walletList.filter(wallet=>wallet.app=="web").map((wallet,index)=><ConnectedWallet key={index} wallet={wallet} index={index} handleOpenCloseWallet={handleOpenCloseWallet} handleSelectIntegratedWallet={handleSelectIntegratedWallet}/>)}

                      {/* <!-- single-field-mapping --> */}

                     

                      

                      <div className="clear-both"></div>

                      <div className="buttons flex w-full items-center justify-between gap-4">
                        
                      <div className="action-button">
                        <button onClick={()=>{setShowAddWalletOptions(!showAddWalletOptions)}} className="add-wallet flex items-center gap-2 ring-1 ring-gray-900 px-4 py-2 rounded-md text-center text-sm cursor-pointer shadow-sm shadow-gray-400 hover:shadow-inner hover:shadow-gray-400">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M10 5C9.45 5 9 5.45 9 6V9H6C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11H9V14C9 14.55 9.45 15 10 15C10.55 15 11 14.55 11 14V11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H11V6C11 5.45 10.55 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#111827"/>
                            </svg>
                          </div>
                          <div>Add Wallet</div>
                        </button>
                        {showAddWalletOptions && <div className="absolute left-4 bottom-14 z-10 w-auto origin-bottom-left rounded-md bg-gray-50 shadow-md shadow-gray-400 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                          <div className="py-1" role="none">
                            <div onClick={()=>{setShowFastRegModal(true);setShowAddWalletOptions(false)}} className="text-gray-700 block px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer" role="menuitem">Create New Wallet</div>
                            <div onClick={()=>{setShowAddWalletOptions(false);setShowRecoverFromDiskModal(true)}} className="text-gray-700 block px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer" >Recover from Disk</div>
                            <div onClick={()=>{setShowAddWalletOptions(false);setShowRecoverFromSeedModal(true)}} className="text-gray-700 block px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer" >Recover from Seed</div>
                            <div onClick={()=>{setShowAddWalletOptions(false);setShowRecoverFromHexModal(true)}} className="text-gray-700 block px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer" >Recover from HEX Seed</div>
                          </div>
                        </div>}
                      </div>{/* <!-- add-wallet --> */}

                      <div className="action-button">
                        <button onClick={()=>setShowWalletActions(!showWalletActions)} className="wallet-actions flex items-center gap-1 ring-1 ring-gray-900 px-4 py-2 rounded-md text-center text-sm cursor-pointer shadow-sm shadow-gray-400 hover:shadow-inner hover:shadow-gray-400">
                          <div>Wallet Actions</div>
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                              <path d="M2.11997 0.289998L5.99997 4.17L9.87997 0.289998C10.27 -0.100002 10.9 -0.100002 11.29 0.289998C11.68 0.679998 11.68 1.31 11.29 1.7L6.69997 6.29C6.30997 6.68 5.67997 6.68 5.28997 6.29L0.699971 1.7C0.309971 1.31 0.309971 0.679998 0.699971 0.289998C1.08997 -0.0900024 1.72997 -0.100002 2.11997 0.289998Z" fill="#111827"/>
                            </svg>
                          </div>
                        </button>
                       {showWalletActions && <div className="absolute right-4 bottom-14 z-10 w-auto origin-bottom-right rounded-md bg-gray-50 shadow-md shadow-gray-400 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                          <div className="py-1" role="none">
                            <div onClick={()=>{handleOpenCloseWallet(activeWallet.open);setShowWalletActions(false)}} className="flex gap-2 items-center text-gray-700 px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer">
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
                                  <path d="M15 0H5C3.9 0 3 0.9 3 2V4C3 4.55 3.45 5 4 5C4.55 5 5 4.55 5 4V3H15V19H5V18C5 17.45 4.55 17 4 17C3.45 17 3 17.45 3 18V20C3 21.1 3.9 22 5 22H15C16.1 22 17 21.1 17 20V2C17 0.9 16.1 0 15 0ZM6.8 10V8.5C6.8 7.1 5.4 6 4 6C2.6 6 1.2 7.1 1.2 8.5V10C0.6 10 0 10.6 0 11.2V14.7C0 15.4 0.6 16 1.2 16H6.7C7.4 16 8 15.4 8 14.8V11.3C8 10.6 7.4 10 6.8 10ZM5.5 10H2.5V8.5C2.5 7.7 3.2 7.2 4 7.2C4.8 7.2 5.5 7.7 5.5 8.5V10Z" fill={`${activeWallet?.address?"#111827":"#9ca3af"}`}/>
                                </svg>
                              </div>
                              <div className={`${activeWallet?.address?"":"text-gray-400"}`}>Open</div>
                            </div>
                            
                            <div onClick={()=>{setShowWalletActions(false);setShowRenameWalletModal(true)}} className="flex gap-2 items-center text-gray-700 px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer">
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <g clip-path="url(#clip0_9997_252386)">
                                    <path d="M3 17.46V20.5C3 20.78 3.22 21 3.5 21H6.54C6.67 21 6.8 20.95 6.89 20.85L17.81 9.94L14.06 6.19L3.15 17.1C3.05 17.2 3 17.32 3 17.46ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill={`${activeWallet?.address?"#111827":"#9ca3af"}`}/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_9997_252386">
                                      <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div className={`${activeWallet?.address?"":"text-gray-400"}`}>Rename</div>
                            </div>
                            <div onClick={handleRemoveWallet} className="flex gap-2 items-center text-gray-700 px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer">
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <g clip-path="url(#clip0_9997_252374)">
                                    <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" fill={`${activeWallet?.address?"#111827":"#9ca3af"}`}/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_9997_252374">
                                      <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div className={`${activeWallet?.address?"":"text-gray-400"}`}>Remove</div>
                            </div>
                            <div onClick={handleExport} className="flex gap-2 items-center text-gray-700 px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer">
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <g clip-path="url(#clip0_9997_252516)">
                                    <path d="M19 13V18C19 18.55 18.55 19 18 19H6C5.45 19 5 18.55 5 18V13C5 12.45 4.55 12 4 12C3.45 12 3 12.45 3 13V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13ZM13 12.67L14.88 10.79C15.27 10.4 15.9 10.4 16.29 10.79C16.68 11.18 16.68 11.81 16.29 12.2L12.7 15.79C12.31 16.18 11.68 16.18 11.29 15.79L7.7 12.2C7.31 11.81 7.31 11.18 7.7 10.79C8.09 10.4 8.72 10.4 9.11 10.79L11 12.67V4C11 3.45 11.45 3 12 3C12.55 3 13 3.45 13 4V12.67Z" fill={`${activeWallet?.address?"#111827":"#9ca3af"}`}/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_9997_252516">
                                      <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div className={`${activeWallet?.address?"":"text-gray-400"}`}>Export</div>
                            </div>
                            <hr />
                            <div onClick={handleCloseAllWallets} className="flex gap-2 items-center text-gray-700 px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer">
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <g clip-path="url(#clip0_9997_252746)">
                                    <path d="M12.5 7.7C12.22 7.42 11.78 7.42 11.5 7.7L8.00004 11.2L4.50004 7.7C4.22004 7.42 3.78004 7.42 3.50004 7.7C3.22004 7.98 3.22004 8.42 3.50004 8.7L7.00004 12.2L3.50004 15.7C3.22004 15.98 3.22004 16.42 3.50004 16.7C3.78004 16.98 4.22004 16.98 4.50004 16.7L8.00004 13.2L11.5 16.7C11.78 16.98 12.22 16.98 12.5 16.7C12.78 16.42 12.78 15.98 12.5 15.7L9.00004 12.2L12.5 8.7C12.78 8.42 12.78 7.98 12.5 7.7ZM19 1H9.00004C7.90004 1 7.00004 1.9 7.00004 3V5C7.00004 5.55 7.45004 6 8.00004 6C8.55004 6 9.00004 5.55 9.00004 5V4H19V20H9.00004V19C9.00004 18.45 8.55004 18 8.00004 18C7.45004 18 7.00004 18.45 7.00004 19V21C7.00004 22.1 7.90004 23 9.00004 23H19C20.1 23 21 22.1 21 21V3C21 1.9 20.1 1 19 1Z" fill="#111827"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_9997_252746">
                                      <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div>Close All Wallets</div>
                            </div>
                            <div onClick={handleRemoveAll} className="flex gap-2 items-center text-gray-700 px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer">
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <g clip-path="url(#clip0_9997_251057)">
                                    <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM9.17 11.17C9.56 10.78 10.19 10.78 10.58 11.17L12 12.59L13.42 11.17C13.81 10.78 14.44 10.78 14.83 11.17C15.22 11.56 15.22 12.19 14.83 12.58L13.41 14L14.83 15.42C15.22 15.81 15.22 16.44 14.83 16.83C14.44 17.22 13.81 17.22 13.42 16.83L12 15.41L10.58 16.83C10.19 17.22 9.56 17.22 9.17 16.83C8.78 16.44 8.78 15.81 9.17 15.42L10.59 14L9.17 12.58C8.78 12.2 8.78 11.56 9.17 11.17ZM15.5 4L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4H15.5Z" fill="#111827"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_9997_251057">
                                      <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div>Remove All Wallets</div>
                            </div>
                          </div>
                        </div> }                          
                      </div>{/* <!-- action-button --> */}

                      </div>{/* <!-- buttons --> */}

                    </div>{/* <!-- dero-wallet --> */}
                  </div>}
                  
                  
                  </>/* <!-- integrated-wallets --> */}
                  

                   {/* <!-- left-col-container connection --> */}
                    {activeWallet?.app=="engram" &&
                    <>

{activeWallet?.address&&<div className="address-container flex flex-col gap-3 bg-blue-50 rounded-2xl p-4 shadow-sm shadow-gray-400 lg:hidden">
                      {/* <!-- COMPONENT wallet address --> */}
                      <ActiveWalletBox toasterRef={toasterRef}/>
                    </div>}{/* <!-- address-container active wallet --> */}
                    
                    <div className="general-wallet-info grid gap-8 lg:hidden">
                      
                      {/* <!-- COMPONENT wallet systems info --> */}
                      <div className="grid gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-gray-400 lg:hidden">
                        <Systems app="engram"/>{/* <!-- systems --> */}
                      </div>
                      
                      {/* <!-- COMPONENT wallet download info --> */}
                      <div className="grid gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-gray-400 lg:hidden">
                        <DownloadLinks app="engram"/>
                      </div>
                    </div>{/* <!-- general-wallet-info --> */}

                    <div className="instructions grid gap-6">

                      <h3 className="font-semibold text-lg">Guide</h3>
                      <p>Engram uses Cyberdeck to connect to apps. To connect to a web app you need the rpc bridge browser extension.</p>
                      <p>1. Click &quot;Select Module ...&quot;</p>
                      <img src="https://digitalbanjare.com/img/wallet/engram1.jpg" className="mx-auto" />

                      <p>2. Select &quot;Cyberdeck&quot;</p>
                      <img src="https://digitalbanjare.com/img/wallet/engram2.jpg" className="mx-auto" />

                      <p>3. Turn On</p>
                      <img src="https://digitalbanjare.com/img/wallet/engram3.jpg" className="mx-auto" />

                      <p>4. Copy Credentials</p>
                      <img src="https://digitalbanjare.com/img/wallet/engram4.jpg" className="mx-auto" />

                      <p>5. Fill in details in Dero RPC Bridge</p>
                        <div className="rpc-details ml-4 grid gap-6">
                          <p>a. <img src="https://digitalbanjare.com/img/wallet/rpc1.jpg" className="mx-auto" /></p>

                          <p>b. If you are running your own node on this machine you can put http://127.0.0.1:10102 for &quot;Daemon RPC&quot;.</p>

                          <p>c. Otherwise you can use http://tree.market:10102 or any remote node you like.</p>

                          <p>d. For wallet RPC put 127.0.0.1:10103.</p>

                          <p>e. Under RPC Login paste the credentials you copied from engram.</p>

                          <p><img src="https://digitalbanjare.com/img/wallet/rpc2.jpg" className="mx-auto" /></p>

                          <p>f. Here I have pasted <em>user:password</em> into the user field. Next I need to copy just the password into the password field, and delete the &quot;:&quot;.</p>

                          <p>g. Next click &quot;SET&quot;</p>

                          <p><img src="https://digitalbanjare.com/img/wallet/rpc3.jpg" className="mx-auto" /></p>
                        </div>{/* <!-- rpc-details --> */}

                    </div>{/* <!-- instructions --> */}
                    </>

                  }
                  {activeWallet?.app=="g45w" &&
                    <>
                     {activeWallet?.address&&<div className="address-container flex flex-col gap-3 bg-blue-50 rounded-2xl p-4 shadow-sm shadow-gray-400 lg:hidden">
                   {/*  <!-- COMPONENT wallet address --> */}
                    <ActiveWalletBox toasterRef={toasterRef}/>
                  </div>}{/* <!-- address-container active wallet --> */}
                  
                  <div className="general-wallet-info grid gap-8 lg:hidden">
                    {/* <!-- COMPONENT wallet systems info --> */}
                    <div className="grid gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-gray-400">
                      <Systems app="g45w"/>{/* <!-- systems --> */}
                    </div>
                    
                    <div className="grid gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-gray-400">
                      {/* <!-- COMPONENT wallet download info --> */}
                      <DownloadLinks app="g45w"/>
                    </div>
                  </div>{/* <!-- general-wallet-info --> */}

                  <div className="instructions grid gap-6">

                    <h3 className="font-semibold text-lg">Guide</h3>

                    <p>1. If you are not already connected to a node, the wallet should prompt you to select one which brings you to the following screen. You can also get there by selecting the 2nd icon from the right at the bottom of the screen.</p>
                    <img src="https://digitalbanjare.com/img/wallet/g45w1.jpg" className="mx-auto" />

                    <p>2. You have several options:</p>
                    <ul className="list-disc ml-8 space-y-3">
                      <li>Integrated node will create a node right in the wallet. Will take some time to sync.</li>
                      <li>Select local node if you are running your own node on this machine.</li>
                      <li>Remote nodes. Choose whatever you like, or use ws://tree.market:10102/ws.</li>
                    </ul>

                    <p>3. Once you have selected your node, navigate to the wallet screen and click at the top where it says &quot;XSWD OFF&quot;.</p>
                    <img src="https://digitalbanjare.com/img/wallet/g45w2.jpg" className="mx-auto" />

                    <p>4. Once XSWD is on, you can click the connect button on the webapp (at tree.market/wallet). You will then need to back to your G45W and confirm the connection in the app.</p>

                  </div>{/* <!-- instructions --> */}
                    </>
                  }
                  {activeWallet?.app=="cli"&&
                    <>
                    {activeWallet?.address&&<div className="address-container flex flex-col gap-3 bg-blue-50 rounded-2xl p-4 shadow-sm shadow-gray-400 lg:hidden">
                    {/* <!-- COMPONENT wallet address --> */}
                    <ActiveWalletBox toasterRef={toasterRef}/>
                  </div>}{/* <!-- address-container active wallet --> */}
                  
                  <div className="general-wallet-info grid gap-8 lg:hidden">
                    {/* <!-- COMPONENT wallet systems info --> */}
                    <div className="grid gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-gray-400 ">
                      <Systems app="cli"/>{/* <!-- systems --> */}
                    </div>
                    
                    <div className="grid gap-4 bg-white rounded-2xl p-4 shadow-sm shadow-gray-400 ">
                      {/* <!-- COMPONENT wallet download info --> */}
                      <DownloadLinks app="cli"/>
                    </div>
                  </div>{/* <!-- general-wallet-info --> */}

                  <div className="instructions grid gap-6">

                    <h3 className="font-semibold text-lg">Guide</h3>
                    <p>1. Run your wallet with the flags --rpc-server and --rpc-login=user:password.</p>

                    <p>2. Enter user and password into rpc bridge extension.</p>
                      <div className="rpc-details ml-4 grid gap-6">
                        <p>a. <img src="https://digitalbanjare.com/img/wallet/rpc1.jpg" className="mx-auto" /></p>

                        <p>b. If you are running your own node on this machine you can put http://127.0.0.1:10102 for &quot;Daemon RPC&quot;.</p>

                        <p>c. Otherwise you can use http://tree.market:10102 or any remote node you like.</p>

                        <p>d. For wallet RPC put 127.0.0.1:10103.</p>

                        <p>e. Under RPC Login paste the credentials you copied from engram.</p>

                        <p><img src="https://digitalbanjare.com/img/wallet/rpc2.jpg" className="mx-auto" /></p>

                        <p>f. Here I have pasted <em>user:password</em> into the user field. Next I need to copy just the password into the password field, and delete the &quot;:&quot;.</p>

                        <p>g. Next click &quot;SET&quot;</p>

                        <p><img src="https://digitalbanjare.com/img/wallet/rpc3.jpg" className="mx-auto" /></p>
                      </div>{/* <!-- rpc-details --> */}
                    
                  </div>{/* <!-- instructions --> */}
                    </>
                  }

                   {/*  <!-- COMPONENT Promotion --> */}
                   <div className="lg:hidden">
                    <LeafPromoBox/>
                   </div>
                    

                  </div>{/* <!-- content-section --> */}

                </div>{/* <!-- how-to --> */}

            </div>{/* <!-- item-contents --> */}
          </div>{/* <!-- content-container --> */}
        </div>
    )
}

export default WalletContent