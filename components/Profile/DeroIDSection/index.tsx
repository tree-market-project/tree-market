"use client"

import DeroIDCard from "../DeroIDCard"

const DeroIDSection:React.FC<{setShowNewDeroIDModal:any}>=({setShowNewDeroIDModal})=>{
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
                      <DeroIDCard address="dero1" scid="cdefg" registered={true} reputation={0} description="very nice socks" names={["bigno"]} image="https://imgs.search.brave.com/veKPAklplAeB2eNq92fn-ap1TCKDQr14zuqz1kxGQVc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAzLzBk/LzdiLzAzMGQ3YmU2/MmJlZjA2NjRiZTNj/MzIyOWIyYzI0OTY1/LmpwZw"/>

                      <div className="deroid-single relative flex flex-col gap-4 p-4 bg-gray-50 rounded-lg shadow-sm shadow-gray-400">
                        <div className="registered absolute top-4 right-4 text-xs bg-green-50 text-green-900 px-2 py-1 rounded-full shadow-sm shadow-gray-400 cursor-default">Registered</div>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="id-img w-1/2 max-w-[300px]">
                            <img src="https://digitalbanjare.com/img/wallet/deroweb-icon.png" />
                          </div>
                          <div className="reputation text-center bg-gray-100 px-3 py-2 rounded-lg shadow-sm shadow-gray-400">
                            <div className="text-xs sm:text-sm font-semibold">Reputation</div>
                            <div className="text-sm sm:text-base">4/5</div>
                          </div>
                        </div>
                        <div className="id-name">
                          <div className="font-semibold">Registered DeroID 2</div>
                        </div>{/* <!-- id-name --> */}
                        <div className="bio text-sm">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...</p>
                        </div>{/* <!-- bio --> */}
                        <div className="deroid-scid break-all flex items-center justify-between gap-2">
                          <div className="info">
                            <div className="text-sm font-semibold">SCID:</div>
                            <div className="text-xs">dero1qyv87gf0jl3dttjpetuar4ecc5geqaaa6c6penpc0wttzcp9sgf0uqgxn3yy7</div>
                          </div>
                          <div className="icon cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <g clip-path="url(#clip0_14964_31829)">
                                <path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" fill="#44403C"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_14964_31829">
                                  <rect width="24" height="24" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>{/* <!-- deroid-scid --> */}
                        <hr />
                        <div className="address break-all flex items-center justify-between gap-2">
                          <div className="info">
                            <div className="text-sm font-semibold">Address:</div>
                            <div className="text-xs">dero1qyv87gf0jl3dttjpetuar4ecc5geqaaa6c6penpc0wttzcp9sgf0uqgxn3yy7</div>
                          </div>
                          <div className="icon cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <g clip-path="url(#clip0_14964_31829)">
                                <path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" fill="#44403C"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_14964_31829">
                                  <rect width="24" height="24" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>{/* <!-- address --> */}
                      </div>{/* <!-- deroid-single registered --> */}

                      <div className="deroid-single relative flex flex-col gap-4 p-4 bg-gray-50 rounded-lg shadow-sm shadow-gray-400">
                        <div className="registered absolute top-4 right-4 text-xs bg-amber-50 px-2 py-1 rounded-full shadow-sm shadow-gray-400 cursor-default">Unregistered</div>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="id-img w-1/2 max-w-[300px]">
                            <img src="https://digitalbanjare.com/img/wallet/deroweb-icon.png" />
                          </div>
                          <div className="reputation text-center bg-gray-100 px-3 py-2 rounded-lg shadow-sm shadow-gray-400">
                            <div className="text-xs sm:text-sm font-semibold">Reputation</div>
                            <div className="text-sm sm:text-base">n/a</div>
                          </div>
                        </div>
                        <div className="id-name">
                          <div className="font-semibold">Unregistered DeroID</div>
                        </div>{/* <!-- id-name --> */}
                        <div className="bio text-sm hidden">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...</p>
                        </div>{/* <!-- bio --> */}
                        <div className="deroid-scid break-all flex items-center justify-between gap-2">
                          <div className="info">
                            <div className="text-sm font-semibold">SCID:</div>
                            <div className="text-xs hidden"></div>
                          </div>
                          <div className="hidden icon cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <g clip-path="url(#clip0_14964_31829)">
                                <path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" fill="#44403C"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_14964_31829">
                                  <rect width="24" height="24" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>{/* <!-- deroid-scid --> */}
                        <hr />
                        <div className="address break-all flex items-center justify-between gap-2">
                          <div className="info">
                            <div className="text-sm font-semibold">Address:</div>
                            <div className="text-xs hidden"></div>
                          </div>
                          <div className="hidden icon cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <g clip-path="url(#clip0_14964_31829)">
                                <path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" fill="#44403C"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_14964_31829">
                                  <rect width="24" height="24" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>{/* <!-- address --> */}
                      </div>{/* <!-- deroid-single unregistered --> */}
                    </div>{/* <!-- deroids-container --> */}

                  </div>
    )
}

export default DeroIDSection