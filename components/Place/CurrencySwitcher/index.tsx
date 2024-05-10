"use client"

const CurrencySwitcher = ()=>{
    return(
        <div className="currency-switcher flex items-center justify-between px-4 py-2 gap-4 min-h-[70px]">
        <div className="text-sm font-medium hidden xl:block">Display Currency</div>
        <div className="currency-select relative flex items-center justify-end gap-3 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M23.9783 11.9969C23.9783 18.5916 18.6326 23.9372 12.038 23.9372C5.44357 23.9372 0.0976562 18.5916 0.0976562 11.9969C0.0976562 5.40243 5.44357 0.0566406 12.038 0.0566406C18.6326 0.0566406 23.9783 5.40243 23.9783 11.9969Z" fill="#1BA27A"/>
            <path d="M17.6422 6.07764H6.33594V8.80719H10.6243V12.8191H13.3538V8.80719H17.6422V6.07764Z" fill="white"/>
            <path d="M12.0144 13.2466C8.46695 13.2466 5.59089 12.6851 5.59089 11.9925C5.59089 11.2999 8.46683 10.7384 12.0144 10.7384C15.5619 10.7384 18.4378 11.2999 18.4378 11.9925C18.4378 12.6851 15.5619 13.2466 12.0144 13.2466ZM19.227 12.2015C19.227 11.3084 15.9978 10.5845 12.0144 10.5845C8.03113 10.5845 4.80176 11.3084 4.80176 12.2015C4.80176 12.9881 7.30576 13.6433 10.6238 13.7885V19.5478H13.3532V13.7908C16.6968 13.6501 19.227 12.9921 19.227 12.2015Z" fill="white"/>
          </svg>
          <div className="crypto-select relative ring-0 flex items-center gap-2 py-2">
            <div className="hidden xl:block">USDT</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M5.11973 6.29006L8.99973 10.1701L12.8797 6.29006C13.2697 5.90006 13.8997 5.90006 14.2897 6.29006C14.6797 6.68006 14.6797 7.31006 14.2897 7.70006L9.69973 12.2901C9.30973 12.6801 8.67973 12.6801 8.28973 12.2901L3.69973 7.70006C3.30973 7.31006 3.30973 6.68006 3.69973 6.29006C4.08973 5.91006 4.72973 5.90006 5.11973 6.29006Z" fill="#1C1917"/>
              </svg>
            </div>
          </div>{/* <!-- crypto-select --> */}
        </div>{/* <!-- currency-select --> */}
      </div>
    )
}

export default CurrencySwitcher;