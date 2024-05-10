"use client"

import Image from "next/image";
import calendarIcon from "@/public/images/landing/calendar-icon.png"
import playIcon from "@/public/images/landing/play-icon.png"
import restIcon from "@/public/images/landing/rest-icon.png"

const Roadmap = ()=>{
    return(<div className="roadmap relative w-full bg-[#e4e7bb] bg-blend-lighten py-24 border-b border-gray-500 h-full">  
    <div className="section-upper-content relative grid gap-8 items-start mx-auto w-full lg:w-[1000px] 2xl:w-[1280px] px-6 lg:px-0">
      <div className="title space-y-3 w-full sm:w-3/4">
        <h2 className="text-3xl sm:text-4xl font-bold">Roadmap</h2>
      </div>{/* <!-- title --> */}
    </div>{/* <!-- section-upper-content --> */}
    <div className="clear-both h-16"></div>
    <div className="section-lower-content relative grid gap-8 items-start mx-auto w-full">
        <div className="roadmap-carousel relative overflow-auto">{/* <!-- Snap Point --> */}
          {/* <!-- Contents --> */}
          <div className="relative w-full flex gap-12 snap-x snap-mandatory overflow-x-auto h-96 border-b-2 border-gray-600 border-dashed">
            <div className="snap-center shrink-0">
              <div className="shrink-0 w-4 sm:w-4"></div>
            </div>
            <div className="breaker23 snap-center shrink-0 border-l border-gray-600 px-6 pt-4">
              <div className="shrink-0 text-[#57534E] text-2xl font-semibold space-y-2">
                <Image alt=""  src={calendarIcon} className="w-[50px]" />
                <p>2023</p>
              </div>
            </div>
            <div className="nov-23 snap-center shrink-0 first:pl-8 last:pr-8 border-l border-gray-600">
              <div className="roadmap-block grid grid-flow-row border-t border-r border-b border-gray-600 text-gray-700 bg-slate-50 p-4 w-60 min-h-64 space-y-11">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium">November</h3>
                  <p className="text-lg font-medium">/2023</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium">Ideas coming together</h5>
                  <p>Conception of the on-chain Point-of-Trade idea emerged.</p>
                </div>
              </div>{/* <!-- roadmap-block --> */}
            </div>
            <div className="breaker24 snap-center shrink-0 border-l border-gray-600 px-6 pt-4">
              <div className="shrink-0 text-[#57534E] text-2xl font-semibold space-y-2">
                <Image alt=""  src={calendarIcon} className="w-[50px]" />
                <p>2024</p>
              </div>
            </div>
            <div className="jan-24 snap-center shrink-0 first:pl-8 last:pr-8 border-l border-gray-600">
              <div className="roadmap-block grid grid-flow-row border-t border-r border-b border-gray-600 text-gray-700 bg-slate-50 p-4 w-60 min-h-64 space-y-11">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium">January</h3>
                  <p className="text-lg font-medium">/2024</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium">Design the basics</h5>
                  <p>Began design of MVP mockups.</p>
                </div>
              </div>{/* <!-- roadmap-block --> */}
            </div>
            <div className="feb-24 snap-center shrink-0 first:pl-8 last:pr-8 border-l border-gray-600">
              <div className="roadmap-block grid grid-flow-row border-t border-r border-b border-gray-600 text-gray-700 bg-slate-50 p-4 w-60 min-h-64 space-y-11">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium">February</h3>
                  <p className="text-lg font-medium">/2024</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium">Proof-of-concept release</h5>
                  <p>The team met up in Acapulco to start developing the dApp.</p>
                </div>
              </div>{/* <!-- roadmap-block --> */}
            </div>
            <div className="mar-24 snap-center shrink-0 first:pl-8 last:pr-8 border-l border-gray-600">
              <div className="roadmap-block grid grid-flow-row border-t border-r border-b border-gray-600 text-gray-700 bg-slate-50 p-4 w-60 min-h-64 space-y-11">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium">March</h3>
                  <p className="text-lg font-medium">/2024</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium">Website and crowdsourcing starts</h5>
                  <p>First versions of the website published. Outreach started.</p>
                </div>
              </div>{/* <!-- roadmap-block --> */}
            </div>
            
            <div className="mar-24a snap-center shrink-0 first:pl-8 last:pr-8 border-l border-gray-600">
              <div className="roadmap-block grid grid-flow-row border-t border-r border-b border-gray-600 text-gray-700 bg-slate-50 p-4 w-60 min-h-64 space-y-11">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium">March</h3>
                  <p className="text-lg font-medium">/2024</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium">Webapp Design Restarts</h5>
                  <p>Completing the puzzle towards MVP.</p>
                </div>
              </div>{/* <!-- roadmap-block --> */}
            </div>

            <div className="apr-24 snap-center shrink-0 first:pl-8 last:pr-8 border-l border-gray-600">
  <div className="roadmap-block grid grid-flow-row border-t border-r border-b border-gray-600 text-gray-700 bg-slate-50 p-4 w-60 min-h-64 space-y-11">
    <div className="space-y-2">
      <h3 className="text-2xl font-medium">April</h3>
      <p className="text-lg font-medium">/2024</p>
    </div>
    <div className="space-y-2">
      <h5 className="text-lg font-medium">Open Alpha Release & Crowdfunding</h5>
      <p>Support Tree.Market development and get rewarded with LEAF Tokens.</p>
    </div>
  </div>{/* <!-- roadmap-block --> */}
</div>
            <div className="cooldown relative snap-center shrink-0 border-l border-gray-600 pt-4">
              <div className="shrink-0 text-[#57534E] text-2xl font-semibold space-y-2 pl-3">
                <Image alt=""  src={restIcon} className="w-[50px]" />
                <div className="absolute inline-grid -rotate-90 text-3xl top-32 -left-10 m-0">Cooldown</div>
              </div>
              
            </div>
            <div className="may-24 snap-center shrink-0 first:pl-8 last:pr-8 border-l border-gray-600">
              <div className="roadmap-block grid grid-flow-row border-t border-r border-b border-gray-600 text-gray-700 bg-slate-50 p-4 w-60 min-h-64 space-y-11">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium">May</h3>
                  <p className="text-lg font-medium">/2024</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium">Development Restarts</h5>
                  <p>Running sprints towards MVP launch.</p>
                </div>
              </div>{/* <!-- roadmap-block --> */}
            </div>
            <div className="jun-24 snap-center shrink-0 first:pl-8 last:pr-8 border-l border-gray-600">
              <div className="roadmap-block grid grid-flow-row border-t border-r border-b border-gray-600 text-gray-700 bg-slate-50 p-4 w-60 min-h-64 space-y-11">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium">June</h3>
                  <p className="text-lg font-medium">/2024</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium">Beta Testing & Onboarding Starts</h5>
                  <p>We&apos;ll help selected early adopters to start incorporating the platform into their routines.</p>
                </div>
              </div>{/* <!-- roadmap-block --> */}
            </div>
            <div className="aug-24 snap-center shrink-0 first:pl-8 last:pr-8 border-l border-gray-600">
              <div className="roadmap-block grid grid-flow-row border-t border-r border-b border-gray-600 text-gray-700 bg-slate-50 p-4 w-60 min-h-64 space-y-11">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium">August</h3>
                  <p className="text-lg font-medium">/2024</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium">Minimum Viable Product Launch</h5>
                  <p>MVP expected to be released, allowing P2P Point-of-Trade systems.</p>
                </div>
              </div>{/* <!-- roadmap-block --> */}
            </div>
            <div className="sep-24 snap-center shrink-1 first:pl-8 last:pr-8 border-l border-gray-600">
  <div className="roadmap-block grid grid-flow-row border-t border-r border-b border-gray-600 text-gray-700 bg-slate-50 p-4 w-60 min-h-64 space-y-11">
    <div className="space-y-2">
      <h3 className="text-2xl font-medium">September</h3>
      <p className="text-lg font-medium">/2024</p>
    </div>
    <div className="space-y-2">
      <h5 className="text-lg font-medium">🌱 SEED Token Launch</h5>
      <p>Get your SEED Token for special Member perks and discounts, for as long as you hold the Token.</p>
      <p>Convert your LEAF tokens for SEED, 100:1!</p>
    </div>
  </div>{/* <!-- roadmap-block --> */}
</div>
            <div className="dec-24 snap-center shrink-0 first:pl-8 last:pr-8 border-l border-gray-600">
              <div className="roadmap-block grid grid-flow-row border-t border-r border-b border-gray-600 text-gray-700 bg-slate-50 p-4 w-60 min-h-64 space-y-11">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium">December</h3>
                  <p className="text-lg font-medium">/2024</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium">Worldwide Tree Marketplace Launch</h5>
                  <p>Worldwide Tree Marketplace will allow all Members to participate in the open free-market, without intermediaries.</p>
                </div>
              </div>{/* <!-- roadmap-block --> */}
            </div>
            <div className="breaker25 snap-center shrink-0 border-l border-gray-600 px-6 pt-4">
              <div className="shrink-0 text-[#57534E] text-2xl font-semibold space-y-2">
                <Image alt=""  src={calendarIcon} className="w-[50px]" />
                <p>2025</p>
              </div>
            </div>
            <div className="q2-25 snap-center shrink-0 first:pl-8 last:pr-8 border-l border-gray-600">
              <div className="roadmap-block grid grid-flow-row border-t border-r border-b border-gray-600 text-gray-700 bg-slate-50 p-4 w-60 min-h-64 space-y-11">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium">Q2</h3>
                  <p className="text-lg font-medium">/2025</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium">&apos;Run Your Own Marketplace&apos; Launch</h5>
                  <p>A version for anyone to easily install on their personal server, giving the ability to run fully private instances.</p>
                </div>
              </div>{/* <!-- roadmap-block --> */}
            </div>
            <div className="snap-center shrink-0">
              <div className="shrink-0 w-4 sm:w-4"></div>
            </div>
          </div>
        </div>{/* <!-- roadmap-carousel --> */}
    </div>{/* <!-- section-lower-content --> */}
  </div>)
}
export default Roadmap;