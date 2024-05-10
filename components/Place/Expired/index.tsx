import { useCheckoutContext } from "@/contexts/CheckoutContext"

const Expired =()=>{
    const {invoice} = useCheckoutContext()
    return(
        <div className="content-inner grid gap-6">

{/* <!-- COMPONENT Notification.info --> */}
<div className="notification info flex items-start border-2 border-gray-200 bg-amber-50 p-3 rounded-sm gap-2">
  <div className="pt-1 px-1">
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
    <p>This trade expired on [date - time].</p>
    <p>You can start over by tapping on the button below.</p>
  </div>
</div>{/* <!-- notification --> */}

{/* <!-- COMPONENT Pending dues | expired --> */}
<div className="checkout-dues grid bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">
  <div className="total">
    <div className="flex items-center justify-between gap-2 px-2 font-bold">
      <div>Pending Dues</div>
      <div className="timer font-medium bg-gray-600 flex items-center gap-2 text-sm px-2 py-1 rounded-md text-gray-50">
        <div>Expired</div>
      </div>{/* <!-- timer --> */}
      <div>$199,000</div>
  </div>
  </div>{/* <!-- total --> */}
</div>{/* <!-- checkout-dues --> */}

{/* <!-- COMPONENT Donation Method - expired --> */}
<div className="donation-method relative">
  <h3 className="font-medium mb-3">Donation Method</h3>
  <div className="relative grid gap-6 border-2 border-dashed border-gray-400 rounded-lg px-3 sm:px-4 py-4">

    <div className="select-method flex items-center justify-between px-2">
      <div className="crypto-select relative rounded-sm ring-0 flex items-center gap-4 py-2 cursor-default">
        <div className="font-bold">Monero</div>
      </div>{/* <!-- crypto-select --> */}
      <div className="crypto-total flex items-center gap-2">
        <div className="crypto-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clip-path="url(#clip0_14844_106676)">
            <path d="M17.9996 8.99911C17.9996 13.969 13.9706 17.9982 8.99978 17.9982C4.02901 17.9982 0 13.969 0 8.99911C0 4.0292 4.0291 0 8.99978 0C13.9705 0 17.9996 4.02882 17.9996 8.99911Z" fill="white"/>
            <path d="M8.99981 0C4.03081 0 -0.00534174 4.03491 0.000983988 8.99883C0.00222996 9.99196 0.160613 10.9473 0.457874 11.8409H3.15053V4.27061L8.99981 10.1192L14.8488 4.27061V11.841H17.542C17.8397 10.9475 17.9973 9.99215 17.9991 8.99897C18.0076 4.02987 13.9693 0.00119793 8.99981 0.00119793V0Z" fill="#F26822"/>
            <path d="M7.65446 11.4636L5.1018 8.91113V13.6747H3.15018L1.30859 13.675C2.88824 16.2663 5.74305 17.9997 8.99963 17.9997C12.2562 17.9997 15.1112 16.2659 16.6911 13.6746H12.8969V8.91113L10.3441 11.4636L8.99934 12.8082L7.65455 11.4636H7.65446Z" fill="#4D4D4D"/>
            </g>
            <defs>
            <clipPath id="clip0_14844_106676">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </div>
        <div className="crypto-total font-bold">1087.45646456</div>
      </div>{/* <!-- crypto-total --> */}
    </div>{/* <!-- select-method --> */}

    <div className="deposit-address-btn relative px-2 py-3 mx-auto w-full rounded-2xl bg-[#155E7560] text-gray-100 text-center leading-tight cursor-default">
      <div className="text-sm px-2">Tap To Copy Deposit Address</div>
      <div className="send-address text-sm py-1 px-2 break-all">
        
      </div>
    </div>{/* <!-- deposit-address-btn --> */}

    <div className="deposit-amt-btn relative px-2 py-3 mx-auto w-full rounded-2xl bg-[#155E7560] text-gray-100 text-center leading-tight cursor-default">
      <div className="text-sm px-2">Tap To Copy Total To Be Sent</div>
      <div className="send-address text-sm py-1 px-2 break-words">
        1087.45646456
      </div>
    </div>{/* <!-- deposit-amt-btn --> */}

  </div>
</div>{/* <!-- donation-method --> */}

</div>
    )
}

export default Expired