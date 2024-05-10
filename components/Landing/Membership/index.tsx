"use client"
import timeRemaining from "@/utils/countDown";
import { CountDown } from "@/types";
import { useEffect,useState } from "react";

const Membership: React.FC<{home:boolean}> = ({home})=>{
  const [seedClock, setSeedClock] = useState<CountDown>(timeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeedClock(timeRemaining()); // Update the countdown every second
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);
    
    return(
        <div id="members" className={`accounts relative w-full bg-[url('/images/landing/tree-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed py-28 lg:py-32 ${!home?'border-b border-gray-500':''} space-y-8`}>
  <div className="section-upper-content relative grid gap-8 items-start mx-auto w-full lg:w-[1000px] 2xl:w-[1280px] px-6 lg:px-0">
    <div className="title space-y-3 w-full lg:w-3/4 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold">Become Unstoppable</h2>
      <h3 className="font-normal">Join as a Member and use your Dero wallet as your personal Point-Of-Trade. Make a donation and get a SEED Token to access special perks!</h3>
    </div>{/* <!-- title --> */}
  </div>{/* <!-- section-upper-content --> */}
    <div className="section-dues-content relative grid gap-8 justify-between items-start mx-auto w-full lg:w-[1000px] 2xl:w-[1280px] px-6 lg:px-0">
      <div className="donation-types grid flex-wrap items-center justify-start space-y-3 w-full bg-[rgba(55,55,55,0.4)] px-4 py-2 rounded-md">
          <div className="heading justify-self-start text-white font-medium">
            We Accept Donations and Dues in:
          </div>
        <div className="types flex flex-wrap items-center justify-start gap-3 cursor-default">
          <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">DERO</div>
          <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">XMR</div>
          <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">USDT</div>
          <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">BTC</div>
          <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">ETH</div>
          <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">LTC</div>
          <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">BCH</div>
          <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">BNB</div>
          <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">TRON</div>
          <div className="type bg-gray-200 rounded-md px-2 leading-7 text-sm text-center">MATIC</div>
        </div>
        <div className="note text-white text-sm font-semibold">
          All dues priced in $ USDT
        </div>
      </div>
    </div>{/* <!-- section-dues-content --> */}
    <div className="section-lower-content relative mx-auto w-full lg:w-[1000px] 2xl:w-[1280px] px-6 lg:px-0">
      <div className="section-inner-content grid md:grid-cols-2 gap-16 sm:gap-8 lg:gap-16 xl:gap-24">
        <div className="pcard relative bg-green-50 px-4 py-8 sm:px-8 rounded-2xl space-y-6">
          <h3 className="text-2xl font-semibold">🌳 Treemate Membership</h3>
          <p className="text-sm sm:text-base">Become a Member and trade in the free market! Dues apply only when you need to publish listings and for using add-ons.</p>
          <hr className="border-gray-400" />
          <div className="justify-self-start px-4">
            <p className="text-sm">Launching Q3 2024</p>
            <h3 className="text-2xl lg:text-3xl font-bold">$1</h3>
            <p className="text-gray-500 text-xs sm:text-sm lg:text-base font-semibold">/lifetime</p>
          </div>
          <div className="btn-box w-full ring-1 ring-gray-400 p-4 text-center space-y-4">
            <div className="btn bg-[rgba(0,0,0,0.1)] px-4 py-3 rounded-lg uppercase text-sm font-normal cursor-default">In Development</div>
            <div className="date ring-1 ring-gray-400 rounded-full px-5 sm:px-8 lg:px-10 py-3 text-sm font-normal text-gray-500 just cursor-default inline-grid">Launching Q3 2024</div>
          </div>{/* <!-- btn-box --> */}
          <div className="list-bullets grid grid-flow-row pt-2 gap-5 w-11/12 mx-auto">
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p><b className="font-semibold">Lifetime Access to the Tree Market platform.</b></p>
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p>Unlimited use of the webapp for <b className="font-semibold">100% private P2P trade</b> with no dues.</p>
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p>Search, obtain and provide your offerings and services to Members in the <b className="font-semibold">Worldwide Tree Marketplace.</b></p>
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p><b className="font-semibold">Only incur in dues to publish listings.</b></p>
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p><b className="font-semibold">Customize</b> your account with add-ons and only incur dues for the ones you need.</p>
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p>Make your <b className="font-semibold">reputation</b> serving others in the free market and have it stored on-chain, absolutely under your control.</p>
            </div>
          </div>{/* <!-- list-bullets --> */}
        </div>{/* <!-- pcard --> */}
        <div className="pcard2 relative bg-green-50 px-4 py-8 sm:px-8 rounded-2xl space-y-6">
          <h3 className="text-2xl font-semibold">🌱 SEED Lifetime Token</h3>
          <p className="text-sm sm:text-base">Support Tree.Market development and get unlimited product listings with no dues, special perks and discounts, for as long as you hold the Token.</p>
          <hr className="border-gray-400" />
          <div className="justify-self-start px-4">
            <p className="text-sm">Launching Q3 2024</p>
            <h3 className="text-2xl lg:text-3xl font-bold">$299</h3>
            <p className="text-gray-500 text-xs sm:text-sm lg:text-base font-semibold">/lifetime</p>
          </div>{/* <!-- price-points --> */}
          <div className="btn-box w-full ring-1 ring-gray-400 p-4 text-center text-white space-y-4">
            <a href="https://tree.market/seed">
              <div className="btn bg-[#7BBC95] px-4 py-3 rounded-lg uppercase text-sm font-normal">Learn more</div>
            </a>
            <div className="date ring-1 ring-gray-400 rounded-full px-5 sm:px-8 lg:px-10 py-3 text-sm font-normal text-gray-500 just cursor-default inline-grid">Launching Q3 2024</div>
          </div>{/* <!-- btn-box --> */}
          <div className="list-bullets grid grid-flow-row pt-2 gap-5 w-11/12 mx-auto">
            <p className="font-semibold">Token Holders Special Benefits:</p>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p><b className="font-semibold">Lifetime Premium Access </b></p>
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p><b className="font-semibold">Unlimited listings with no dues</b> in the Worldwide Tree Marketplace.</p>
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p><b className="font-semibold">Seedlings Add-ons Starter Kit</b> - to help you kickstart your personal private storefront.</p>
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p><b className="font-semibold">Special perks</b> inside of the SEED Private Members Group.</p>
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p><b className="font-semibold">Discounts</b> on selected Add-ons.</p>
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p><b className="font-semibold">Beta Testing Access</b> Guaranteed. Be the first to access new features as we release them!</p>
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> <p>Freely <b className="font-semibold">trade</b>, <b className="font-semibold">rent</b> or <b className="font-semibold">transfer</b> the Token to anyone else!</p>
            </div>
          </div>{/* <!-- list-bullets --> */}
        </div>{/* <!-- pcard2 --> */}
      </div>{/* <!-- section-inner-content --> */}
    </div>{/* <!-- section-lower-content --> */}
  </div>
    )
}
export default Membership;