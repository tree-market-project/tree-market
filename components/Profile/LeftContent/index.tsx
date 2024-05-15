"use client"

import ActiveWalletBox from "@/components/Wallet/ActiveWalletBox"
import { useState } from "react"
import DeroIDSection from "../DeroIDSection"

const LeftContent:React.FC<{setShowNewDeroIDModal:any,setShowRegisterWalletName:any,toasterRef:any}> = ({setShowNewDeroIDModal,setShowRegisterWalletName,toasterRef}) =>{
  const [view,setView] = useState("deroid")

    return(
        <div className="profile-content">
          {/* <!-- COMPONENT Content Container --> */}
          <div className="clear-both h-8"></div>
          <div className="content-container relative mx-auto w-full px-5 sm:px-6">
            <div className="item-contents flex flex-col gap-6">
              <div className="content-title">
                <h3 className="text-xl font-bold">
                  Dero ID & Nameservice
                </h3>
              </div>{/* <!-- content-title --> */}

              <div className="description relative">
              <p>Secure your identity across dApps by registering it to your DeroID. Add metadata such as image, description, website, social links, or anything else unique to you.</p>
                <p>Nameservice allows you to give your Dero wallet a name. This utility is free thanks to Captain. This name can be used in place of your address when accepting payments.</p>
              </div>{/* <!-- description --> */}

              <div className="nameservice-select grid gap-4 grid-cols-2">
                <div onClick={()=>setView("deroid")} className={`nameservice-tile relative flex items-center justify-between gap-2 w-full ${view=="deroid"?"bg-[#b8dbc6]":"bg-gray-100"} px-4 py-4 mx-auto rounded-lg shadow-sm shadow-gray-400 text-gray-700 cursor-pointer hover:shadow-inner hover:shadow-gray-300`}>
                  <div className="nameservice-info flex items-center gap-2">
                    <div className="name">
                      <div className="item-name font-medium">DeroID</div>
                    </div>
                  </div>{/* <!-- nameservice-info --> */}
                  <div className="icon">
                    <img src="https://digitalbanjare.com/img/wallet/deroweb-icon.png" className="w-[24px] mx-auto" />
                  </div>{/* <!-- icon --> */}
                </div>{/* <!-- nameservice-tile deroweb --> */}

                <div onClick={()=>setView("nameservice")} className={`nameservice-tile relative flex items-center justify-between gap-2 w-full ${view=="nameservice"?"bg-[#b8dbc6]":"bg-gray-100"} px-4 py-4 mx-auto rounded-lg shadow-sm shadow-gray-400 text-gray-700 cursor-pointer hover:shadow-inner hover:shadow-gray-300`}>
                  <div className="nameservice-info flex items-center gap-2">
                    <div className="name">
                      <div className="item-name font-medium">Nameservice</div>
                    </div>
                  </div>{/* <!-- nameservice-info --> */}
                  <div className="icon">
                    <img src="https://tree.market/images/currency-icons/dero-icon.png" className="w-[24px] mx-auto" />
                  </div>{/* <!-- icon --> */}
                </div>{/* <!-- wallet-tile captain --> */}
              </div>{/* <!-- nameservice-select --> */}

              <div className="how-to grid gap-4">

                {/* <!-- COMPONENT Notification.active wallet --> */}
                <div className="notification active-wallet grid gap-2 bg-blue-50 px-4 py-2 rounded-lg shadow-sm shadow-gray-400">
                <ActiveWalletBox toasterRef={toasterRef}/>{/* <!-- address --> */}
                </div>{/* <!-- notification --> */}

                <div className="content-section relative grid gap-8">

                  {/* <!-- COMPONENT Nameservice --> */}
                  {view=="nameservice"&&<div className="nameservice relative grid gap-4 bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">     
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold">Nameservice</h3>
                      <div className="action-button">
                        <button onClick={()=>setShowRegisterWalletName(true)} className="add-walletname flex items-center gap-2 ring-1 ring-gray-900 px-4 py-2 rounded-md text-center text-xs sm:text-sm cursor-pointer shadow-sm shadow-gray-400 hover:shadow-inner hover:shadow-gray-400">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M10 5C9.45 5 9 5.45 9 6V9H6C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11H9V14C9 14.55 9.45 15 10 15C10.55 15 11 14.55 11 14V11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H11V6C11 5.45 10.55 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#111827"/>
                            </svg>
                          </div>
                          <div>Wallet Name</div>
                        </button>
                      </div>{/* <!-- add-action-button --> */}
                    </div>
                    <p className="text-sm">Give your Dero wallet a name. This utility is free thanks to Captain. This name can be used in place of your address when accepting payments. You can have many.</p>
                    <p className="text-sm">Through DeroWeb you can now also use this as a .dero domain name.</p>
                    <h4 className="font-semibold">Wallet Names</h4>
                    <div className="dero-nameservice flex flex-col gap-4 max-h-60 overflow-y-scroll p-4 rounded-lg shadow-inner shadow-gray-400">
                      <div className="single-item relative flex gap-4 px-3 py-3 ring-1 ring-gray-200 mx-auto w-full rounded-lg bg-gray-100 hover:bg-gray-200 leading-tight cursor-pointer">
                        <div className="font-medium">treemarket</div>
                      </div>{/* <!-- single-item --> */}

                      <div className="single-item relative flex gap-4 px-3 py-3 ring-1 ring-gray-200 mx-auto w-full rounded-lg bg-gray-100 hover:bg-gray-200 leading-tight cursor-pointer">
                        <div className="font-medium">TreeMarket</div>
                      </div>{/* <!-- single-item --> */}

                      <div className="single-item relative flex gap-4 px-3 py-3 ring-1 ring-gray-200 mx-auto w-full rounded-lg bg-gray-100 hover:bg-gray-200 leading-tight cursor-pointer">
                        <div className="font-medium">Tree Market</div>
                      </div>{/* <!-- single-item --> */}

                      <div className="single-item relative flex gap-4 px-3 py-3 ring-1 ring-gray-200 mx-auto w-full rounded-lg bg-gray-100 hover:bg-gray-200 leading-tight cursor-pointer">
                        <div className="font-medium">TREEMARKET</div>
                      </div>{/* <!-- single-item --> */}

                      <div className="single-item relative flex gap-4 px-3 py-3 ring-1 ring-gray-200 mx-auto w-full rounded-lg bg-gray-100 hover:bg-gray-200 leading-tight cursor-pointer">
                        <div className="font-medium">TREE MARKET</div>
                      </div>{/* <!-- single-item --> */}

                    </div>{/* <!-- dero-nameservice --> */}

                  </div>}{/* <!-- nameservice --> */}

                  {/* <!-- COMPONENT DeroWebID --> */}
                  {view=="deroid"&&
                  <DeroIDSection setShowNewDeroIDModal={setShowNewDeroIDModal}/>}{/* <!-- deroid --> */}

                </div>{/* <!-- content-section --> */}
              </div>{/* <!-- how-to --> */}

            </div>{/* <!-- item-contents --> */}
          </div>{/* <!-- content-container --> */}
        </div>
    )
}

export default LeftContent