"use client"

const LeftContent = ()=>{
return(
    <div className="profile-content">
          {/* <!-- COMPONENT Content Container --> */}
          <div className="clear-both h-8"></div>
          <div className="content-container relative mx-auto w-full px-5 sm:px-6">
            <div className="item-contents flex flex-col gap-6">
              <div className="content-title">
                <h3 className="text-xl font-bold">
                  Preview DeroID
                </h3>
              </div>{/* <!-- content-title --> */}

              <div className="description relative space-y-4">
                <p>DeroID is your cross-dAPP pseudonymous identity. You can add metadata such as image, description, website, or anything else.</p>
              </div>{/* <!-- description --> */}

              <div className="content-section relative grid gap-6">

                {/* <!-- COMPONENT Notification.active wallet --> */}
                <div className="notification active-wallet grid gap-2 bg-blue-50 px-4 py-2 rounded-lg shadow-sm shadow-gray-400 lg:hidden">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap items-end gap-2">
                      <h3 className="font-semibold">Active Wallet</h3>
                      <div>[wallet_name]</div>
                    </div>
                    <div className="flex items-center gap-2">
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
                      <div className="text-xs border border-gray-600 px-4 py-1 rounded-md cursor-pointer text-center shadow-sm shadow-gray-400 hover:shadow-inner" onclick="my_modal_changewallet.showModal()">Change</div>
                    </div>
                  </div>
                  <div className="address flex justify-between items-center gap-4">
                    <div className="break-all text-sm text-gray-700">
                      dero1qyv87gf0jl3dttjpetuar4ecc5geqaaa6c6penpc0wttzcp9sgf0uqgxn3yy7
                    </div>
                  </div>{/* <!-- address --> */}
                </div>{/* <!-- notification --> */}

                {/* <!-- COMPONENT DeroID Preview --> */}
                <div className="deroid-single-preview relative flex flex-col justify-between gap-4 bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">
                  <div className="deroid-info grid gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="id-img w-1/2 max-w-[150px]">
                        <img src="https://digitalbanjare.com/img/wallet/deroweb-icon.png" />
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="registered text-xs text-green-900 text-center bg-green-100 px-2 py-1 rounded-full shadow-sm shadow-gray-400 cursor-default">Registered</div>
                        {/* <!-- COMPONENT - Reputation score --> */}
                        <div className="deroidreputation grid text-center bg-gray-100 px-2 py-1 rounded-md shadow-sm shadow-gray-400 cursor-default">
                          <h5 className="text-xs font-medium">Reputation</h5>
                          <div className="flex items-center gap-1">
                            <div className="text-yellow-400">&#9733;</div>
                            <div className="text-yellow-400">&#9733;</div>
                            <div className="text-yellow-400">&#9733;</div>
                            <div className="text-yellow-400">&#9733;</div>
                            <div className="text-gray-400">&#9733;</div>
                          </div>
                        </div>{/* <!-- deroidreputation --> */}
                        <div className="flex items-center gap-2 text-right">
                          <div className="font-semibold">&#9906;</div>
                          <div className="text-xs">New York, USA</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex flex-col gap-4">
                      <div className="deroid-name text-lg font-semibold">
                        TreeMarket
                      </div>

                      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-8">
                        <div className="contact-details grid gap-1 sm:order-2">
                          <div className="deroid-website text-sm flex items-center gap-1">
                            <div className="w-[15px]">&#9741;</div>
                            <div><a href="https://tree.market" target="_blank" className="text-[#3429a5]">https://tree.market</a></div>
                          </div>
                          <div className="deroid-email text-sm flex items-center gap-1">
                            <div className="w-[15px]">&#10147;</div>
                            <div><a href="mailto:treemates@tree.market" target="_blank" className="text-[#3429a5]">treemates@tree.market</a></div>
                          </div>
                          <div className="deroid-phone text-sm flex items-center gap-1">
                            <div className="w-[15px]">&#9990;</div>
                            <div><a href="tel:+1 555 555-5555" target="_blank" className="text-[#3429a5]">+1 555 555-5555</a></div>
                          </div>
                        </div>{/* <!-- contact-details --> */}
                        <div className="deroidbio text-sm space-y-2 sm:order-1">
                          <p><b>Unlocking the P2P Free-Market Economy</b></p>
                          <p>A 100% decentralized, interoperable, and open source point-of-trade solution for an unstoppable P2P economy, without intermediaries.</p>
                        </div>{/* <!-- deroidbio --> */}
                      </div>

                      <hr />
                      <div className="deroidsocial-links relative w-full grid gap-1">
                        <h4 className="text-xs font-semibold">Social Links</h4>
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="text-xs bg-gray-200 px-3 py-2 rounded-md cursor-pointer hover:ring-1 hover:ring-gray-400">
                            Facebook
                          </div>
                          <div className="text-xs bg-gray-200 px-3 py-2 rounded-md cursor-pointer hover:ring-1 hover:ring-gray-400">
                            Instagram
                          </div>
                          <div className="text-xs bg-gray-200 px-3 py-2 rounded-md cursor-pointer hover:ring-1 hover:ring-gray-400">
                            X (Twitter)
                          </div>
                          <div className="text-xs bg-gray-200 px-3 py-2 rounded-md cursor-pointer hover:ring-1 hover:ring-gray-400">
                            LinkedIn
                          </div>
                          <div className="text-xs bg-gray-200 px-3 py-2 rounded-md cursor-pointer hover:ring-1 hover:ring-gray-400">
                            Private Islands
                          </div>
                          <div className="text-xs bg-gray-200 px-3 py-2 rounded-md cursor-pointer hover:ring-1 hover:ring-gray-400">
                            Phoenix
                          </div>
                        </div>
                      </div>{/* <!-- deroidsocial-links --> */}

                      <hr />
                      <div className="deroid-address relative w-full grid gap-1">
                        <div className="flex items-center justify-between gap-4">
                          <h4 className="text-xs font-semibold">Address</h4>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="selected text-gray-700 cursor-default">Shipping</div>
                            <div>|</div>
                            <div className="unselected text-[#3429a5] cursor-pointer hover:underline">Billing</div>
                          </div>
                        </div>
                        <div className="grid gap-1 text-xs">
                          <div className="address1">
                            123 Street A North
                          </div>
                          <div className="address2">
                            Apt. 345
                          </div>
                          <div className="flex flex-wrap items-center gap-1">
                            <div className="city">
                              New York,
                            </div>
                            <div className="state">
                              NY,
                            </div>
                            <div className="zip">
                              04878,
                            </div>
                            <div className="country">
                              USA
                            </div>
                          </div>
                          
                          
                        </div>
                      </div>{/* <!-- deroid-address --> */}
                    </div>
                  </div>
                  <div className="bottom-row grid gap-4">
                    <hr />
                    <div className="deroid-scid break-all flex items-center justify-between gap-2">
                      <div className="info grid gap-1">
                        <div className="text-xs font-semibold">SCID</div>
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
                    <div className="deroid-owner break-all flex items-center justify-between gap-2">
                      <div className="info grid gap-1">
                        <div className="flex items-center gap-2">
                          <div className="text-xs font-semibold">Owner</div>
                          <div className="text-xs bg-green-100 text-green-900 px-2 rounded-full">You are the owner</div>
                        </div>
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
                    </div>{/* <!--  deroid-owner -->*/}
                  </div>{/* <!-- bottom-row --> */}
                </div>{/* <!-- deroid-single-preview --> */}

              </div>{/* <!-- content-section --> */}

            </div>{/* <!-- item-contents --> */}
          </div>{/* <!-- content-container --> */}
        </div>
)
}

export default LeftContent