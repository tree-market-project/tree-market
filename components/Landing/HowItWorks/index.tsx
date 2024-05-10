"use client"
import ProfileCard from "../Profile";
import { profiles } from "@/data/profiles";

const HowItWorks = () => {

    return(
        <div className="how-it-works relative w-full bg-[#E9DCD3] py-24 border-b border-gray-500">
        <div className="section-content relative grid gap-8 justify-between items-start mx-auto w-full lg:w-[1000px] 2xl:w-[1280px] px-6 lg:px-0">
          <div className="title space-y-3 w-full">
            <h3 className="uppercase font-medium">A webapp made for trading in the free market</h3>
            <h2 className="text-3xl sm:text-4xl font-bold">How Tree.Market Works</h2>
          </div>{/* <!-- title --> */}
          <div className="section-inner-content grid grid-flow-row sm:grid-flow-col gap-16 sm:gap-8 lg:gap-16">
            <div className="video-frame w-full col-span-1">
              <video preload="auto" width="auto" height="auto" controls className="rounded-t-2xl mx-auto">
                  <source src="/images/tree_alpha_demo.mp4" type="video/mp4"/>
              </video>
              <div className="video-desc bg-stone-500 text-white p-6 space-y-6 rounded-b-2xl shadow-lg">
                <h4 className="text-2xl font-semibold">See the working Alpha version in action</h4>
                <hr className="mx-auto w-full border-stone-700" />
                <p className="text-sm">“You can tell it&apos;s real because the dust on the notebook looks so fake” — Felon Tusk</p>
                <hr className="mx-auto w-full border-stone-700" />
                <div className="demo-desc space-y-4 text-base">
                  <p className="text-sm md:text-base">In this demo, you can see how the webapp v.0.0.1 is used to perform a trade of several products live on-chain.</p>
                  <p className="text-sm md:text-base">Process includes trading and transferring Dero in return. Even a small donation is added to the trade!</p>
                </div>{/* <!-- demo-desc --> */}
              </div>{/* <!-- video-desc --> */}
            </div>{/* <!-- video-frame --> */}
    
            <div className="who-for w-full space-y-6">
              <h3 className="text-2xl sm:text-3xl">We&apos;re creating a platform for:</h3>        
              <div className="user-profiles space-y-6">
                {profiles.map((x,i)=><ProfileCard key={i} data={x}/>)}
                
              </div>{/* <!-- user-profiles --> */}
    
              <div className="extra-bullets grid grid-flow-row gap-5 pt-4">
                <div className="bullet grid grid-flow-col gap-4 font-normal">
                  <span className="text-green-700 font-bold text-2xl">&#10003;</span> Use it for private trade and keeping a record of all your transactions. Ideal for local economies and communities.
                </div>
                <div className="bullet grid grid-flow-col gap-4 font-normal">
                  <span className="text-green-700 font-bold text-2xl">&#10003;</span> Take advantage of publishing in the Worldwide Tree Marketplace for widespread distribution, potentially reaching billions.
                </div>
              </div>{/* <!-- extra-bullets --> */}
            </div>{/* <!-- who-for --> */}
          </div>{/* <!-- section-inner-content --> */}
        </div>{/* <!-- section-content --> */}
      </div>
    )
}

export default HowItWorks;