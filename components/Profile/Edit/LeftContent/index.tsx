"use client"

const LeftContent:React.FC<{setShowRegisterDeroIDModal:any}> = ({setShowRegisterDeroIDModal})=>{
    return(
        <div className="profile-content">
        {/* <!-- COMPONENT Content Container --> */}
        <div className="clear-both h-8"></div>
        <div className="content-container relative mx-auto w-full px-5 sm:px-6">
          <div className="item-contents flex flex-col gap-6">
            <div className="content-title">
              <h3 className="text-xl font-bold">
                Edit DeroID
              </h3>
            </div>{/* <!-- content-title --> */}

            <div className="description relative space-y-4">
              <p>DeroID is your cross-dAPP pseudonymous identity. You can add metadata such as image, description, website, or anything else. <u>All fields are optional.</u></p>
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

              {/* <!-- COMPONENT DeroID Name --> */}
              <div className="deroidname relative grid gap-4 bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">     
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">DeroID Name</h3>
                  <div className="registered text-xs bg-amber-50 px-2 py-1 rounded-full shadow-sm shadow-gray-400 cursor-default">Unregistered</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="deroid-name bg-gray-100 px-2 rounded-sm">
                    Unnamed
                  </div>
                  <p className="text-sm px-2">This is a unique name for your DeroID. This name is case insensitive. Once it is registered it cannot be used by anyone else.</p>
                  <hr />
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs bg-green-100 text-green-900 px-4 py-1 rounded-full">Requires <b>1 DNS</b> token for name registration</div>
                    <div onClick={()=>setShowRegisterDeroIDModal(true)} className="text-sm bg-[#3E7A57] text-white px-4 py-1 rounded-md cursor-pointer" >Register</div>
                  </div>
                </div>
              </div>{/* <!-- deroidname --> */}

              <div className="deroiddetails relative grid gap-4 bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">     
                <h3 className="font-semibold">DeroID Data</h3>
                <div className="input-fields flex flex-col gap-4">
                                        
                  <div className="input-deroid-img relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="didimg" className="text-sm font-semibold px-2">Image</label>
                    <input type="text" name="didimg" id="didimg" placeholder="https://imageurl.website" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                  </div>{/* <!-- input-deroid-img --> */}

                  <div className="input-deroid-bio relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <div className="flex items-center justify-between gap-2 pb-2">
                      <label htmlFor="didbio" className="text-sm font-semibold px-2">Bio</label>
                      <div className="flex items-center rounded-full text-xs shadow-sm shadow-gray-400">
                        <div className="selected shadow-inner shadow-gray-400 px-3 py-1 rounded-l-full cursor-default">Text</div>
                        <div className="unselected bg-gray-200 hover:shadow-inner hover:shadow-gray-400 px-3 py-1 rounded-r-full cursor-pointer">Visual</div>
                      </div>
                    </div>
                    <textarea name="didbio" id="didbio" placeholder="Add a description about this DeroID." className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 h-28"></textarea>
                  </div>{/* <!-- input-deroid-bio --> */}

                  {false&&<>
                    <div className="separator flex items-center justify-between gap-4 my-2">
                    <div className="text-gray-700 font-medium shrink-0">Contact Information</div>
                    <div className="h-2 border-b border-gray-200 w-full"></div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="input-firstname relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="fname" className="text-sm font-semibold px-2">First Name</label>
                      <input type="text" name="fname" id="fname" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-firstname --> */}

                    <div className="input-lastname relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="lname" className="text-sm font-semibold px-2">Last Name</label>
                      <input type="text" name="lname" id="lname" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-lastname --> */}
                  </div>

                  <div className="input-email relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="email" className="text-sm font-semibold px-2">Email</label>
                    <input type="email" name="email" id="email" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                  </div>{/* <!-- input-email --> */}

                  <div className="input-phone relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="phone" className="text-sm font-semibold px-2">Phone Number</label>
                    <input type="tel" name="phone" id="phone" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                  </div>{/* <!-- input-email --> */}

                  <div className="input-website relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="website" className="text-sm font-semibold px-2">Website</label>
                    <input type="text" name="website" id="website" placeholder="https://yourwebsite.com" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                  </div>
                  </>}{/* <!-- input-website --> */}

                {false&&<>  
                <div className="separator flex items-center justify-between gap-4 my-2">
                    <div className="text-gray-700 font-medium shrink-0">Social Links</div>
                    <div className="h-2 border-b border-gray-200 w-full"></div>
                  </div>

                  <div className="input-fb relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="fb" className="text-sm font-semibold px-2">Facebook</label>
                    <input type="text" name="fb" id="fb" placeholder="https://facebook.com/your_page_name" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                  </div>{/* <!-- input-fb --> */}

                  <div className="input-insta relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="insta" className="text-sm font-semibold px-2">Instagram</label>
                    <input type="text" name="insta" id="insta" placeholder="https://instagram.com/your_page_name" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                  </div>{/* <!-- input-insta --> */}

                  <div className="input-twitter relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="twitter" className="text-sm font-semibold px-2">X (twitter)</label>
                    <input type="text" name="twitter" id="twitter" placeholder="https://twitter.com/your_page_name" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                  </div>{/* <!-- input-twitter --> */}

                  <div className="input-linkedin relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="linkedin" className="text-sm font-semibold px-2">LinkedIn</label>
                    <input type="text" name="linkedin" id="linkedin" placeholder="https://linkedin.com/your_page_name" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                  </div>{/* <!-- input-linkedin --> */}

                  <div className="grid sm:grid-cols-3 gap-4 p-2 bg-gray-100 rounded-lg">
                    <div className="input-sociallabel relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="sociallabel" className="text-sm font-semibold px-2">Label</label>
                      <input type="text" name="sociallabel" id="sociallabel" placeholder="" className="w-full py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-sociallabel --> */}

                    <div className="input-socialurl sm:last:col-span-2 relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="socialurl" className="text-sm font-semibold px-2">URL</label>
                      <input type="text" name="socialurl" id="socialurl" placeholder="https://website.com/your_page_name" className="w-full py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-lastname --> */}
                  </div>

                  <div className="flex">
                    <div className="text-sm bg-gray-200 px-4 py-2 rounded-md shadow-sm shadow-gray-400 cursor-pointer">Add Another</div>
                  </div>
                  </>}

                  {false && <>
                  <div className="separator flex items-center justify-between gap-4 my-2">
                    <div className="text-gray-700 font-medium shrink-0">Addresses</div>
                    <div className="h-2 border-b border-gray-200 w-full"></div>
                  </div>

                  <div className="address-toggle flex items-center justify-between gap-4">
                    <div className="physical text-sm text-center py-2 ring-1 ring-gray-600 rounded-md w-full cursor-pointer shadow-inner shadow-gray-400">Billing</div>
                    <div className="mailing text-sm text-center py-2 ring-1 ring-gray-600 rounded-md w-full cursor-pointer bg-gray-100 hover:shadow-inner hover:shadow-gray-400">Shipping</div>  
                  </div>{/* <!-- address-toggle --> */}

                  <div className="billing-address-fields flex flex-col gap-4">
                    <div className="address-public grid grid-flow-col justify-start items-center gap-3 mx-auto w-full px-2">
                      <input id="address_public" type="checkbox" value="" className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2"/>
                      <label htmlFor="address_public" className="checkbox text-sm font-medium">Make my billing address publicly viewable.</label>
                    </div>{/* <!-- address-public --> */}

                    <div className="input-address1 relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="address1" className="text-sm font-semibold px-2">Address Line 1</label>
                      <input type="text" name="address1" id="address1" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-address1 --> */}

                    <div className="input-address2 relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="address2" className="text-sm font-semibold px-2">Address Line 2</label>
                      <input type="text" name="address2" id="address2" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-address2 --> */}

                    <div className="input-city relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="city" className="text-sm font-semibold px-2">City</label>
                      <input type="text" name="city" id="city" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-city --> */}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="input-state relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                        <label htmlFor="state" className="text-sm font-semibold px-2">State/Province</label>
                        <input type="text" name="state" id="state" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                      </div>{/* <!-- input-state --> */}

                      <div className="input-zipcode relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                        <label htmlFor="zipcode" className="text-sm font-semibold px-2">Zip/Postal Code</label>
                        <input type="text" name="zipcode" id="zipcode" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                      </div>{/* <!-- input-zipcode --> */}
                    </div>

                    <div className="input-country relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="country" className="text-sm font-semibold px-2">Country</label>
                      <input type="text" name="country" id="country" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-country --> */}

                  </div>{/* <!-- billing-address-fields --> */}

                  <div className="hidden shipping-address-fields flex flex-col gap-4">
                    <div className="copy-physical grid grid-flow-col justify-start items-center gap-3 mx-auto w-full px-2">
                      <input id="copy_billing" type="checkbox" value="" className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2"/>
                      <label htmlFor="copy_billing" className="checkbox text-sm font-medium">Shipping address is the same as billing.</label>
                    </div>{/* <!-- copy-physical --> */}

                    <div className="shipaddress-public grid grid-flow-col justify-start items-center gap-3 mx-auto w-full px-2">
                      <input id="shipping_public" type="checkbox" value="" className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2"/>
                      <label htmlFor="shipping_public" className="checkbox text-sm font-medium">Make my shipping address publicly viewable.</label>
                    </div>{/* <!-- address-public --> */}

                    <div className="input-shipaddress1 relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="shipaddress1" className="text-sm font-semibold px-2">Address Line 1</label>
                      <input type="text" name="shipaddress1" id="shipaddress1" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-shipaddress1 --> */}

                    <div className="input-shipaddress2 relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label for="shipaddress2" className="text-sm font-semibold px-2">Address Line 2</label>
                      <input type="text" name="shipaddress2" id="shipaddress2" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-shipaddress2 --> */}

                    <div className="input-shipcity relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="shipcity" className="text-sm font-semibold px-2">City</label>
                      <input type="text" name="shipcity" id="shipcity" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-shipcity --> */}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="input-shipstate relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                        <label for="shipstate" className="text-sm font-semibold px-2">State/Province</label>
                        <input type="text" name="shipstate" id="shipstate" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                      </div>{/* <!-- input-shipstate --> */}

                      <div className="input-shipzipcode relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                        <label for="shipzipcode" className="text-sm font-semibold px-2">Zip/Postal Code</label>
                        <input type="text" name="shipzipcode" id="shipzipcode" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                      </div>{/* <!-- input-shipzipcode --> */}
                    </div>

                    <div className="input-shipcountry relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="shipcountry" className="text-sm font-semibold px-2">Country</label>
                      <input type="text" name="shipcountry" id="shipcountry" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-shipcountry --> */}

                  </div>
                  </>}{/* <!-- shipping-address-fields --> */}

                </div>{/* <!-- input-fields --> */}

                <hr />

                <div className="btn grid text-center items-center bg-[#3E7A57] rounded-md h-[64px] cursor-pointer">
                  <div className="text-lg text-gray-50">Save Details</div>
                </div>
              </div>{/* <!-- deroiddetails --> */}

            </div>{/* <!-- content-section --> */}

          </div>{/* <!-- item-contents --> */}
        </div>{/* <!-- content-container --> */}
      </div>   
    )
}

export default LeftContent