"use client"
 import copyToClipboard from "@/utils/copyToClipboard"
import Toaster,{ToasterRef} from "../Toaster"
import { useRef } from "react" 
import CheckoutContainer from "../CheckoutContainer"
import { useCheckoutContext } from "@/contexts/CheckoutContext"
import ShareButton from "../ShareButton"
import StayInformed from "@/components/Landing/StayInformed"
import LeafPromoBox2 from "@/components/Common/LeafPromotionBox2"
const Seed: React.FC<{handleShowCalculator:any}> = ({handleShowCalculator})=>{
  const {checkoutStep} = useCheckoutContext()
  const toasterRef = useRef<ToasterRef>(null);
  const handleCopyShare = ()=>{
    copyToClipboard("Support Tree.Market!: https://tree.market/place")
    toasterRef.current?.addMessage("Copied to clipboard")
  } 
    return(
        <div className={`${checkoutStep!=0?"hidden lg:block":""}`}>
        <div className="item-img w-full relative">
        <img className="object-cover w-full h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96" src="/images/tm-banner.jpg" />
      
     
</div>
      <div className="clear-both h-8"></div>
      <div className="content-container relative mx-auto w-full px-5 sm:px-6">
        <div className="item-contents flex flex-col gap-6">

          <div className="content-title space-y-4">
            <h3 className="text-xl font-bold">
            An unstoppable, open source tool for P2P trade, without any spying, or intervention possible.
            </h3>
            <div className="metadata flex flex-wrap justify-start items-center gap-3">
              <div className="member flex items-center justify-start gap-1 bg-gray-200 px-3 text-sm py-1 rounded-lg cursor-default">
                <div>
                  <img src="/images/icons/treemarket-icon-black.png" className="w-[20px] mx-auto" />
                </div>
                <div>by Tree.Market</div>
              </div>
              <div className="category px-3 ring-1 ring-gray-900 text-xs sm:text-sm uppercase py-1 rounded-sm cursor-default">Crowdfunding</div>
            </div>
          </div>{/* <!-- content-title --> */}

          <div className="description relative">
          <p>Help us smash through our goal, so we can take on more developers, bring more of our planned features forward, and produce a more feature-complete experience a lot sooner.</p>
        </div>{/* <!-- description --> */}
        

          <div className="buttons grid md:grid-cols-2 items-center gap-3 md:gap-4">
          <ShareButton handleCopyShare={handleCopyShare} url="https://tree.market/place" />
            <a href="https://tree.market" target="_blank" className="website flex justify-between items-center bg-gray-200 px-4 py-2 rounded-full text-sm md:text-base shadow-sm shadow-gray-400 hover:shadow-inner cursor-pointer">
              <div>Visit Member Website</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_14748_31833)">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.88 11.54L9.63 15.79C9.24 16.18 8.61 16.18 8.22 15.79C7.83 15.4 7.83 14.77 8.22 14.38L12.47 10.13L11.2 8.86C10.88 8.54 11.11 8 11.55 8H15.49C15.77 8 15.99 8.22 15.99 8.5V12.44C15.99 12.89 15.45 13.11 15.14 12.79L13.88 11.54Z" fill="#44403C"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_14748_31833">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>  
            </a>  
          </div>{/* <!-- buttons --> */}
          

          {/* <!-- COMPONENT Check Out | mobile sceen --> */}
          <CheckoutContainer handleShowCalculator={handleShowCalculator}/>
         {/* <!-- checkout-container --> */}

         <div className="heading text-center text-lg sm:text-xl font-bold px-2 py-2">
          <h2>Help fund the development of the most important software tool in the history of humanity: the one that will set us free.</h2>
        </div>

        <div className="content-section1 relative grid gap-6">
          <p>The system has the power to lock us out of our accounts, block our access to our currency and assets, and they can do this with no explanation or reason whatsoever. It happened to one of our co-founders.</p>

          <p>They have all of us in a matrix of control.</p>

          <p>This is why we have begun developing a real free marketplace, offering a private alternative to the likes of Etsy, Amazon, Patreon, Paypal, Square, Substack, and Upwork.</p>

          <p>An unstoppable, open source tool for P2P trade, without any spying, or intervention possible.</p>

          <p>Sounds too good to be true? Well, in a way, it is. This radical idea that we have built is what you are looking at today… but to get to its full potential, it will need your help.</p>
        </div>{/* <!-- list-bullets --> */}

        <LeafPromoBox2/>
        
        <div className="heading text-center text-2xl font-bold px-2 py-2">
                  <h2>What We Have Achieved So Far</h2>
                </div>

                <div className="content-section2 relative grid gap-6">
                  <p>We have been working non-stop since our inception in November 2023. By February 2024, we gathered live during Anarchapulco, and hacked our Proof-Of-Concept release in a 72-hours hackathon.</p>

                  <p>Next, we focused on delivering a basic alpha product that showcases the capabilities, usability and enormous potential of the platform.</p>

                  <p>That is, indeed, what you are looking at here! Tree.Market is the first crowdfunding project to ever be released on Tree.Market.</p>
                </div>{/* <!-- content-section2 --> */}

                <StayInformed/>

                <div className="heading text-center text-2xl font-bold px-2 py-2">
                  <h2>Project Funding & Roadmap</h2>
                </div>

                <div className="content-section3 relative grid gap-6">
                  <p>So far, we have been funding the project out of our pocket and rejected several offerings for equity investment to keep the project as pure in its intentions as possible.</p>

                  <p>And it has been a recent realization that we may have gone too far in our spending and at the time of the launch we are currently $138,652 in the red. And the bill keeps growing!</p>

                  <p>Nevertheless, we have created a never-seen-before-in-crypto, fully operative minimum viable product that you are seeing here.</p>

                  <p>We are relying on your help us smash through our goal, so we can take on more developers, bring more of our planned features forward, and produce a more feature-complete experience a lot sooner.</p>

                  <p>Once we get through the next 12-week development sprint, we are confident we will be able to take the platform to a solid Beta-stage, to test the peer-to-peer Point-of-Trade functionality.</p>

                  <p>And for December 2024 we plan to make the big launch of the Worldwide Tree Marketplace! At that point, we are confident the platform will start generating enough in dues and donations to keep the ship running and moving onward.</p>

                  <p>For 2025 we have the ambitious goal of launching the &apos;Run Your Own Marketplace&apos; feature. This is equivalent to the WordPress model where everyone can easily install Tree.Market on their server, giving the ability to run fully private and white-labeled instances. After that, the sky&apos;s the limit!</p>
                  
                  <p>We are trying, by all means, to never have to resort to taking equity investment, and we remain committed to never implementing any form of exploitive funding practices (and this is why we chose an open-source model that allows free competition).</p>
                </div>{/* <!-- content-section3 --> */}

                <div className="heading text-center text-2xl font-bold px-2 py-2">
                  <h2>Backer Rewards</h2>
                </div>

                <div className="content-section4 relative grid gap-6">
                  <p>We simplified the reward system in hopes of matching every budget, so no matter how much you can spare to help back this project, you get something truly valuable in return.</p>

                  <p>That is why every donation is rewarded with LEAF tokens in exchange.</p>

                  <p>LEAF tokens are fungible Dero assets. Like all native assets on the Dero blockchain, they can be transferred freely and privately between wallets, or stored publicly in Dero smart contracts.</p>

                  <p>LEAF tokens can be used at Tree.Market in exchange for any of our service offerings. This means you will be able to trade them for add-ons, listing dues, or any other service we provide.</p>

                  <p>The value of LEAF tokens is based on the 100:1 ratio with SEED tokens, that we established for the future.</p>

                  <div className="text-center font-semibold">
                    <p className="text-lg">100 LEAF 🌿 = 1 SEED 🌱</p>
                    <p>Collect 100 LEAF tokens to trade them for 1 SEED token, upon availability.</p>
                  </div>

                  <p>As we launch the Worldwide Tree Marketplace, we will provide every LEAF token holder with the ability to swap it for SEED tokens, which unlocks Lifetime Premium Tree.Market services, such as:</p>

                  <ul className="list-disc ml-10">
                    <li>Unlimited free listings on the Worldwide Tree Marketplace,</li>
                    <li>Starter-kit Add-ons,</li>
                    <li>Discounts on selected add-ons, and</li>
                    <li>Early access to new features.</li>
                  </ul>

                  <p>We determined through our market research that a Lifetime Premium Account (a.k.a. LTA&apos;s) of SaaS services ranges between $199 to $499. So, we decided to set the SEED price at $299 per lifetime.</p>

                  <p>LEAF tokens, then, will have a fixed price of $2.99 per token.</p>
                  <p><a href="https://tree.market/SEED_Token_Whitepaper.pdf" target="_blank" className="underline">Read more about the SEED token.</a></p>
                  <p className="break-all">LEAF Token SCID:<br/>e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4</p>
                </div>{/* <!-- content-section4 --> */}

                <div className="heading text-center text-2xl font-bold px-2 py-2">
                  <h2>Platform & Price</h2>
                </div>

                <div className="content-section5 relative grid gap-6">
                  <p>Tree.Market is currently a webapp that works on every device capable of running a web browser.</p>

                  <p>Our technology is based on the most secure and private blockchain with computing power available: Dero. We are already running our full node to add capacity to the network.</p>

                  <p>We also integrated Bitcart code, to ensure that we provide all users with an interoperable tool that allows Members to accept multiple ways of payment seamlessly.</p>

                  <p>The best way that we found to make a truly unstoppable free-market tool is to make it 100% open-source software. Our repos are available on GitHub and we will also share our Figma assets as we grow the team.</p>

                  <p>Assuming the development is funded enough to cover our main feature objectives, we are planning to release first the P2P functionalities, which will never cost anything.</p>

                  <p>Ongoing funding after the release of the Worldwide Tree Marketplace will be mostly covered via:</p>

                  <ul className="list-disc ml-10">
                    <li>Listing publishing in the Worldwide Tree.Market/Place.</li>
                    <li>Add-ons that are developed to provide feature rich use cases, such as; scheduling tools, reservation systems, restaurant terminals, freelancer escrow contracts, and many more.</li>
                  </ul>

                  <p>If we fail to meet the required funding target, and additional funding cannot be sourced elsewhere, then the public repo will always be available for anyone ready to continue where we left off.</p>
                </div>{/* <!-- content-section5 --> */}

                <div className="heading text-center text-2xl font-bold px-2 py-2">
                  <h2>The Team</h2>
                </div>

                <div className="content-section5 relative grid gap-6">
                  <p>Our elite design & development team has tens of thousands of hours of experience combined, both in the startup and corporate software worlds.</p>

                  <p>We are the first SaaS private organization to build quality software products for non-technical users to interact with the Dero blockchain.</p>

                  <p>You can hear the founders in this amazing interview with Raf Laverde from The Crypto Vigilante:</p>
                  <a href="https://vigilante.tv/w/o6oUb8w26zCh2L3qg1o8pD" target="_blank" className="underline break-all">https://vigilante.tv/w/o6oUb8w26zCh2L3qg1o8pD</a>

                  <p>Then feel free to get to talk to us on <a href="https://discord.gg/5kfGBRF8EP" target="_blank" className="underline">Discord</a>.</p>
                </div>{/* <!-- content-section5 --> */}

          <div className="btn-discord w-full p-4 text-center order-6">
            <a href="https://discord.gg/5kfGBRF8EP" target="_blank">
              <div className="btn flex justify-evenly items-center bg-blue-300 px-4 py-4 rounded-lg uppercase text-white w-11/12 mx-auto max-w-[300px] hover:shadow-md">
                <div className="discord-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256" style={{fill:"#000000"}}>
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}
><g transform="scale(5.12,5.12)"><path d="M41.625,10.76953c-3.98047,-3.20313 -10.27734,-3.74609 -10.54687,-3.76563c-0.41797,-0.03516 -0.81641,0.19922 -0.98828,0.58594c-0.01562,0.02344 -0.15234,0.33984 -0.30469,0.83203c2.63281,0.44531 5.86719,1.33984 8.79297,3.15625c0.46875,0.28906 0.61328,0.90625 0.32422,1.375c-0.19141,0.30859 -0.51562,0.47656 -0.85156,0.47656c-0.17969,0 -0.36328,-0.05078 -0.52734,-0.15234c-5.03125,-3.12109 -11.3125,-3.27734 -12.52344,-3.27734c-1.21094,0 -7.49609,0.15625 -12.52344,3.27734c-0.46875,0.29297 -1.08594,0.14844 -1.375,-0.32031c-0.29297,-0.47266 -0.14844,-1.08594 0.32031,-1.37891c2.92578,-1.8125 6.16016,-2.71094 8.79297,-3.15234c-0.15234,-0.49609 -0.28906,-0.80859 -0.30078,-0.83594c-0.17578,-0.38672 -0.57031,-0.62891 -0.99219,-0.58594c-0.26953,0.01953 -6.56641,0.5625 -10.60156,3.80859c-2.10547,1.94922 -6.32031,13.33984 -6.32031,23.1875c0,0.17578 0.04688,0.34375 0.13281,0.49609c2.90625,5.10938 10.83984,6.44531 12.64844,6.50391c0.00781,0 0.01953,0 0.03125,0c0.32031,0 0.62109,-0.15234 0.80859,-0.41016l1.82813,-2.51562c-4.93359,-1.27344 -7.45312,-3.4375 -7.59766,-3.56641c-0.41406,-0.36328 -0.45312,-0.99609 -0.08594,-1.41016c0.36328,-0.41406 0.99609,-0.45312 1.41016,-0.08984c0.05859,0.05469 4.69922,3.99219 13.82422,3.99219c9.14063,0 13.78125,-3.95312 13.82813,-3.99219c0.41406,-0.35937 1.04297,-0.32422 1.41016,0.09375c0.36328,0.41406 0.32422,1.04297 -0.08984,1.40625c-0.14453,0.12891 -2.66406,2.29297 -7.59766,3.56641l1.82813,2.51563c0.1875,0.25781 0.48828,0.41016 0.80859,0.41016c0.01172,0 0.02344,0 0.03125,0c1.80859,-0.05859 9.74219,-1.39453 12.64844,-6.50391c0.08594,-0.15234 0.13281,-0.32031 0.13281,-0.49609c0,-9.84766 -4.21484,-21.23828 -6.375,-23.23047zM18.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4zM31.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4z"></path></g></g>
                  </svg>
                </div>{/* <!-- discord-icon --> */}
                <div>Ask Us Questions</div>
              </div>
            </a>
          </div>{/* <!-- btn-discord --> */}
        
          
          

        </div>{/* <!-- item-contents --> */}
      </div>
      </div>
    )
}

export default Seed