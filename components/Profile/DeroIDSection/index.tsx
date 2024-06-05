"use client"

import DeroIDCard from "../DeroIDCard"
import { useWalletContext,useProfileContext } from "@/contexts"

const DeroIDSection:React.FC<{setShowNewDeroIDModal:any}>=({setShowNewDeroIDModal})=>{
  const {activeWallet} = useWalletContext()
  const {profiles} = useProfileContext()
    return(
        <div className="deroid relative grid gap-4 bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">     
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold">DeroID</h3>
                      <div className="action-button">
                        <button onClick={()=>setShowNewDeroIDModal(true)} className="add-walletname flex items-center gap-2 ring-1 ring-gray-900 px-4 py-2 rounded-md text-center text-xs sm:text-sm cursor-pointer shadow-sm shadow-gray-400 hover:shadow-inner hover:shadow-gray-400" >
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M10 5C9.45 5 9 5.45 9 6V9H6C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11H9V14C9 14.55 9.45 15 10 15C10.55 15 11 14.55 11 14V11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H11V6C11 5.45 10.55 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#111827"/>
                            </svg>
                          </div>
                          <div>New ID</div>
                        </button>
                      </div>{/* <!-- add-action-button --> */}
                    </div>
                    <p className="text-sm">DeroID is your cross-dAPP pseudonymous identity. You can add metadata such as image, description, website, or anything else.</p>
                    <p className="text-sm">Use it as an authentication key for dAPPS. Use it to store and prove ownership of other Dero assets.</p>
                    <h4 className="font-semibold">DeroIDs</h4>
                    <div className="deroids-container grid sm:grid-cols-2 gap-4">

                      {/* <!-- deroid-single registered --> */}
                      
                      {profiles.filter(profile=>profile.address==activeWallet?.address).map((profile,index)=><DeroIDCard key={index} scid={profile.scid}/>)}

                      {/*activeWallet?.balances.filter(token=>token.symbol=="deroID").map((token,index)=><DeroIDCard key={index} scid={token.scid}/>
)*/}
                      
                      

                      
                    </div>{/* <!-- deroids-container --> */}

                  </div>
    )
}

export default DeroIDSection