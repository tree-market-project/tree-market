"use client"
import { useCheckoutContext } from "@/contexts/CheckoutContext"
import copyToClipboard from "@/utils/copyToClipboard"
import { Receipt } from "@/types"
import Toaster, {ToasterRef} from "../Toaster"
import { useRef } from "react"

const Complete:React.FC<{column:string}> = ({column})=>{
  const {invoice} = useCheckoutContext()
  const toasterRef = useRef<ToasterRef | null>(null);

  const handleCopySummary = ()=>{
    //copy txidIN, txidOUT, leaf scid, otp, receiptID, crypto amount, usd amount, leaf amount, date,dero address,status
    const receipt:Receipt = {Quantity:invoice.Quantity,DeroAddress:invoice.DeroAddress,TreeID:invoice.SeedID,Status:invoice.Status,CryptoReceived:invoice.CryptoReceived,Currency:invoice.Currency,TXIDOut:invoice.SeedOutTXID,TXIDIn:invoice.IncomingTXID,DonationAmount:invoice.DonationAmount,Password:invoice.Password,CompletedTimestamp:invoice.CompletedTimestamp,LEAF_SCID:"e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4"}
    copyToClipboard(JSON.stringify(receipt))
    toasterRef.current?.addMessage("Trade Summary Copied to Clipboard")
  }
  
    return(
        
        <div className="content-inner grid gap-6">
        <div className="checkout-container flex flex-col gap-6 bg-white rounded-2xl p-4 shadow-md shadow-gray-400">

          {/* <!-- COMPONENT Notification.info --> */}
          <div className="notification info flex items-start border-2 border-gray-200 bg-amber-50 p-3 rounded-sm gap-2">
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
            <div className="text-sm">You&apos;ve received {(invoice.Quantity).toLocaleString('en-US')} LEAF Tokens in fair trade for {invoice.CryptoReceived} {invoice.Currency.toUpperCase()}.</div>
          </div>{/* <!-- notification.info --> */}

          {/* <!-- COMPONENT copy summary button --> */}
          <div onClick={handleCopySummary} className="copy-summary flex justify-between items-center bg-gray-200 px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-sm shadow-gray-400 hover:shadow-inner cursor-pointer">
            <div>Copy Summary to Clipboard</div>
            <div className="icon">
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
          </div>{/* <!-- copy-summary --> */}

          {/* <!-- COMPONENT Trade Summary --> */}
          <div className="trade-summary grid gap-6 bg-white w-full mx-auto rounded-lg px-4 py-6 shadow-sm shadow-gray-400">
            
            <h3 className="font-medium px-2">Trade Summary</h3>

            <div className="item-tile relative w-full mx-auto border-t border-gray-300 cursor-default divide-y-2 divide-dashed divide-gray-300 pt-1">
              <div className="total flex items-start justify-between py-4 px-2">
                <div className="cat-name">
                  <div className="item-name text-sm font-medium">LEAF Token</div>
                  <div className="amt text-xs font-medium">x{(invoice.Quantity).toLocaleString('en-US')}</div>
                </div>
                <div className="price">
                  <div className="category-name text-sm font-medium">{(invoice.Quantity*2.99).toLocaleString('en-US',{
                    style: 'currency',
                    currency: 'USD'
                  })}</div>
                </div>
              </div>{/* <!-- total --> */}
              <div className="flex justify-center">
              </div>
            </div>{/* <!-- item-tile --> */}

            <div className="line-item flex items-center justify-between gap-2 px-2 text-sm font-medium">
              <div className="item-name">Transaction total in USDT</div>
              <div className="category-name">{(invoice.Quantity*2.99).toLocaleString('en-US',{
                    style: 'currency',
                    currency: 'USD'
                  })}</div>
            </div>{/* <!-- line-item --> */}

            <div className="line-item flex items-center justify-between gap-2 px-2 text-sm font-medium">
              <div className="item-name">Transaction total in {invoice.Currency.toUpperCase()}</div>
              <div className="category-name">{invoice.CryptoReceived}</div>
            </div>{/* <!-- line-item --> */}

            <hr className="broder-gray-300" />

            <div className="line-item grid gap-1 px-2 text-sm font-medium">
              <div className="id-name">Receipt ID</div>
              <div className="id text-xs break-all">{invoice.SeedID}</div>
            </div>{/* <!-- line-item --> */}
            <div className="line-item grid gap-1 px-2 text-sm font-medium">
              <div className="id-name">One-Time-Password</div>
              <div className="id text-xs break-all">{invoice.Password}</div>
            </div>{/* <!-- line-item --> */}

            <div className="line-item grid gap-1 px-2 text-sm font-medium">
              <div className="id-name">Transaction ID | {invoice.Currency.toUpperCase()}</div>
              <div className="id text-xs break-all">{invoice.IncomingTXID}</div>
            </div>{/* <!-- line-item --> */}

            <div className="line-item grid gap-1 px-2 text-sm font-medium">
              <div className="id-name">Transaction ID of LEAF Distribution</div>
              <div className="id text-xs break-all">{invoice.SeedOutTXID}</div>
            </div>{/* <!-- line-item --> */}
            <div className="line-item grid gap-1 px-2 text-sm font-medium">
              <div className="id-name">LEAF SCID</div>
              <div className="id text-xs break-all">e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4</div>
              </div>{/* <!-- line-item --> */}
            
          </div>{/* <!-- trade-summary --> */}
         <Toaster ref={toasterRef}/>

         {/*  <!-- COMPONENT Transaction details (default state closed) --> */}
          <div className="hidden tx-details grid gap-6 bg-white w-full mx-auto rounded-lg p-6 shadow-sm shadow-gray-400">
            <div className="title-container grid grid-flow-col justify-between items-center cursor-pointer">
              <h2 className="text-lg font-semibold">Trade Details</h2>
              <div className="caret">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_15159_28163)">
                    <path d="M8.70956 11.7129L11.2996 14.3029C11.6896 14.6929 12.3196 14.6929 12.7096 14.3029L15.2996 11.7129C15.9296 11.0829 15.4796 10.0029 14.5896 10.0029H9.40956C8.51956 10.0029 8.07956 11.0829 8.70956 11.7129Z" fill="#1C1917"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_15159_28163">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.00292969)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>{/* <!-- title-container --> */}

            <div className="show-hide grid gap-6">
              <div className="grid text-center items-center py-3 ring-1 ring-gray-800 rounded-md cursor-pointer">
                <div className="">View in Explorer</div>
              </div>

              <div className="tx-items divide-y-2 divide-gray-200">

                <div className="detail-item grid grid-flow-col text-sm items-center justify-start gap-4 py-4 px-2 odd:bg-gray-100 even:bg-gray-50">
                  <div className="pill-name text-xs rounded-full px-4 py-1 bg-blue-200">SCID</div>
                  <div className="detail-data break-words"><a href="" className="text-cyan-700">d848b85e .... 3b604ed8</a></div>
                </div>{/* <!-- detail-item --> */}

                <div className="detail-item grid grid-flow-col text-sm items-center justify-start gap-4 py-4 px-2 odd:bg-gray-100 even:bg-gray-50">
                  <div className="pill-name text-xs rounded-full px-4 py-1 bg-blue-200">Payload</div>
                  <div className="detail-data break-words">84.245 Dero ($129.98 USD)</div>
                </div>{/* <!-- detail-item --> */}

                <div className="detail-item grid grid-flow-col text-sm items-center justify-start gap-4 py-4 px-2 odd:bg-gray-100 even:bg-gray-50">
                  <div className="pill-name text-xs rounded-full px-4 py-1 bg-blue-200">Timestamp</div>
                  <div className="detail-data break-words">28/01/2024, 10:30:28</div>
                </div>{/* <!-- detail-item --> */}

                <div className="detail-item grid grid-flow-col text-sm items-center justify-start gap-4 py-4 px-2 odd:bg-gray-100 even:bg-gray-50">
                  <div className="pill-name text-xs rounded-full px-4 py-1 bg-blue-200">Signer</div>
                  <div className="detail-data break-words"><a href="" className="text-cyan-700">d848b85e .... 3b604ed8</a></div>
                </div>{/* <!-- detail-item --> */}

                <div className="detail-item grid grid-flow-col text-sm items-center justify-start gap-4 py-4 px-2 odd:bg-gray-100 even:bg-gray-50">
                  <div className="pill-name text-xs rounded-full px-4 py-1 bg-blue-200">Block Height</div>
                  <div className="detail-data break-words">3434235</div>
                </div>{/* <!-- detail-item --> */}

              </div>{/* <!-- tx-items --> */}
            </div>{/* <!-- show-hide --> */}

          </div>{/* <!-- tx-details --> */}

        </div>{/* <!-- content-inner --> */}
     </div>
      
    )
}
export default Complete