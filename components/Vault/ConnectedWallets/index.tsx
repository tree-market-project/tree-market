"use client"
import ConnectedWallet from "@/components/Common/ConnectedWallet"
import { useWalletContext } from "@/contexts"
import useCloseWallet from "@/hooks/useCloseWallet"
import { useDisonnectWallet } from "@/hooks/useDisconnectWallet"
import { useEffect, useState } from "react"

const ConnectedWallets:React.FC<{setShowEnterPassModal:any}> = ({setShowEnterPassModal})=>{
    const {xswd,deroBridgeApiRef,worker,walletList,setWalletList,activeWallet,setActiveWallet} = useWalletContext()
    const closeWallet = useCloseWallet()
    const disconnectWallet = useDisonnectWallet()
    const [wallets,setWallets] = useState(walletList)

    useEffect(()=>{
      let newList = wallets
      if(!worker){
        newList = newList.filter(wallet=>wallet.app!="web")
        
      }
      if(!xswd){
        newList = newList.filter(wallet=>wallet.connection!="xswd")
      }
      if(!deroBridgeApiRef){
        newList = newList.filter(wallet=>wallet.connection!="rpc")
      }
      setWallets(newList)
    },[worker,xswd,deroBridgeApiRef])

    const handleSelectIntegratedWallet = (index: number) => {
        const updatedWalletList = [...wallets];
        updatedWalletList.forEach(wallet => {
          wallet.active=false
        });
        updatedWalletList[index].active = true;
        setWallets(updatedWalletList); 
        setActiveWallet(updatedWalletList[index])
      };

      const handleOpenCloseWallet = async (open:boolean)=>{
        console.log("open/close: ",activeWallet)
        if(!activeWallet?.address){
          return
        }
        if(!open){
          setShowEnterPassModal(true)
        }else{
          console.log("close wallet")
        if(activeWallet.connection!="web"){
          console.log("closing non web")
        //  let newWallet = activeWallet
          disconnectWallet()
           
         /* newWallet.open = false
          setActiveWallet(newWallet) */
      //    let newList = [...walletList]
          //  let index = newList.findIndex(x=>x.//address==activeWallet?.address)
         //   newList[index].open = false
           // setWalletList(newList)
          return
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
      }

    return(
        
              <div className="dero-wallet grid gap-4">

              {wallets.map((wallet,index)=>
              <ConnectedWallet key={index} wallet={wallet} index={index} handleOpenCloseWallet={handleOpenCloseWallet} handleSelectIntegratedWallet={handleSelectIntegratedWallet}/> )}

                
              </div>
            
    )
}

export default ConnectedWallets;