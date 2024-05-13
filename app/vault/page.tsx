"use client"

import NavMenu from "@/components/Place/NavMenu"
import ConnectButton from "@/components/Wallet/ConnectButton"
import DappHeader from "@/components/Place/DappHeader"
import { LeftColumn } from "@/components/Common/LeftColumn"
import WalletContent from "@/components/Wallet/WalletContent"
import {RightColumn} from "@/components/Common/RightColumn"
import RightContent from "@/components/Wallet/RightContent"
import RightContentVault from "@/components/Vault/RightContent"
import FastRegModal from "@/components/Wallet/FastRegModal"
import { useState,useRef } from "react"
import { useWalletContext } from "@/contexts"
import EnterPasswordModal from "@/components/Wallet/EnterPasswordModal"
import RecoverFromHexModal from "@/components/Wallet/RecoverFromHexModal"
import RecoverFromSeedModal from "@/components/Wallet/RecoverFromSeedModal"
import RecoverFromDiskModal from "@/components/Wallet/RecoverFromDiskModal"
import RenameWalletModal from "@/components/Wallet/RenameWalletModal"
import LeftContent from "@/components/Vault/LeftContent"
import AddTokenModal from "@/components/Vault/addTokenModal"
import TokenSlideout from "@/components/Vault/TokenSlideout"
import TransferModal from "@/components/Vault/TransferModal"
import ConfirmRemoveModal from "@/components/Wallet/ConfirmRemoveModal"
import Toaster,{ToasterRef} from "@/components/Place/Toaster"
import DynamicToaster from "@/components/Common/DynamicToaster"
import RemoveTokenModal from "@/components/Vault/RemoveTokenModal"



export default function Wallet(){
const [showFastRegModal,setShowFastRegModal] = useState(false)
const [showEnterPassModal,setShowEnterPassModal] = useState(false)
const [showRecoverFromHexModal,setShowRecoverFromHexModal] = useState(false)
const [showRecoverFromSeedModal,setShowRecoverFromSeedModal] = useState(false)
const [showRecoverFromDiskModal,setShowRecoverFromDiskModal] = useState(false)
const [showRenameWalletModal,setShowRenameWalletModal] = useState(false)
const {activeWallet} = useWalletContext()
const [showVault,setShowVault] = useState(false)
const [showAddTokenModal,setShowAddTokenModal] = useState(false)
const [showRemoveTokenModal,setShowRemoveTokenModal] = useState(false)
const [showTokenSlideout,setShowTokenSlideout] = useState(false)
const [showTransferModal,setShowTransferModal] = useState(false)
const [showConfirmRemoveModal,setShowConfirmRemoveModal] = useState(false)
const toasterRef = useRef<ToasterRef | null>(null)
  
    


    return(
        <>
<div className="main-container-body relative min-h-screen overflow-hidden bg-gray-50">
    <div className="desktop-wrapper grid lg:flex lg:flex-row h-dvh">
<NavMenu/>
{/* <!-- nav-menu --> */}

<div className="content-wrapper grid xl:w-5/6 h-dvh">
  {/* <!-- COMPONENT dApp Header --> */}
  <DappHeader headerText={"Vault"}/>{/* <!-- dapp-header --> */}
  <div className="relative lg:grid lg:grid-cols-5 xl:grid-cols-3 gap-4 mx-auto h-dvh w-full px-0 overflow-y-scroll lg:overflow-y-hidden scroller">
    {/* <!-- left-col --> */}
    <LeftColumn>
      
      <LeftContent toasterRef={toasterRef} setShowEnterPassModal={setShowEnterPassModal} setShowVault={setShowVault} setShowTokenSlideout={setShowTokenSlideout} setShowAddTokenModal={setShowAddTokenModal}/>
      
    </LeftColumn>

<RightColumn>
   
    <RightContentVault setShowEnterPassModal={setShowEnterPassModal}/>
    
</RightColumn>
    {/* <!-- right-col --> */}

    </div>
    {showRemoveTokenModal&&<RemoveTokenModal setShow={setShowRemoveTokenModal}/>}
    {showConfirmRemoveModal&&<ConfirmRemoveModal setShow={setShowConfirmRemoveModal}/>}
    {showAddTokenModal && <AddTokenModal setShow={setShowAddTokenModal}/>}
    {showRenameWalletModal && <RenameWalletModal show={showRenameWalletModal} setShow={setShowRenameWalletModal}/>}
    {showRecoverFromDiskModal&&<RecoverFromDiskModal show={showRecoverFromDiskModal} setShow={setShowRecoverFromDiskModal}/>}
    {showRecoverFromSeedModal&&<RecoverFromSeedModal show={showRecoverFromSeedModal} setShow={setShowRecoverFromSeedModal}/>}
    {showRecoverFromHexModal&&<RecoverFromHexModal show={showRecoverFromHexModal} setShow={setShowRecoverFromHexModal}/>}
{showEnterPassModal&&<EnterPasswordModal show={showEnterPassModal} setShow={setShowEnterPassModal}/>}
{typeof document == "undefined"?"":
<Toaster ref={toasterRef}/>
}

</div>
{showFastRegModal&&<FastRegModal show={showFastRegModal} setShow={setShowFastRegModal}/>}
{showTransferModal&&<TransferModal setShow={setShowTransferModal}/>}

</div>
{showTokenSlideout&&<TokenSlideout toasterRef={toasterRef} setShowRemoveTokenModal={setShowRemoveTokenModal} setShowTransfer={setShowTransferModal} setShow={setShowTokenSlideout}/>}




</div>



</>
    )
}