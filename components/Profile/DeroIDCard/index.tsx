"use client"

import { StringDecoder } from "string_decoder"

const DeroIDCard:React.FC<{registered:boolean,reputation:number,scid:string,address:string,names?:string[],description:string,image?:string}> = ({registered,reputation,scid,address,names,description,image})=>{
    return(
        <div className="deroid-single relative flex flex-col gap-4 p-4 bg-gray-50 rounded-lg shadow-sm shadow-gray-400">
                        <div className="registered absolute top-4 right-4 text-xs bg-green-50 text-green-900 px-2 py-1 rounded-full shadow-sm shadow-gray-400 cursor-default">{registered?"Registered":"Unregistered"}</div>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="id-img w-1/2 max-w-[300px]">
                            <img src={image||"https://digitalbanjare.com/img/wallet/deroweb-icon.png"} />
                          </div>
                          <div className="reputation text-center bg-gray-100 px-3 py-2 rounded-lg shadow-sm shadow-gray-400">
                            <div className="text-xs sm:text-sm font-semibold">Reputation</div>
                            <div className="text-sm sm:text-base">{reputation}/5</div>
                          </div>
                        </div>
                        <div className="id-name">
                          <div className="font-semibold">{names?.[0] || "No Name"}</div>
                        </div>{/* <!-- id-name --> */}
                        <div className="bio text-sm">
                          <p>{description}</p>
                        </div>{/* <!-- bio --> */}
                        <div className="deroid-scid break-all flex items-center justify-between gap-2">
                          <div className="info">
                            <div className="text-sm font-semibold">SCID:</div>
                            <div className="text-xs">{scid}</div>
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
                            <div className="text-xs">{address}</div>
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
                      </div>
    )
}

export default DeroIDCard