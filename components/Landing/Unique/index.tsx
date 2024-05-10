"use client"
import Feature from "../Feature";

const Unique = () =>{
    return(
        <div className="unique relative w-full bg-[#d9e4ec] bg-blend-lighten py-24 border-b border-gray-500">
        <div className="section-upper-content relative grid gap-8 items-start mx-auto w-full lg:w-[1000px] 2xl:w-[1280px] px-6 lg:px-0">
          <div className="title space-y-3 w-full lg:w-3/4">
            <h2 className="text-3xl sm:text-4xl font-bold">What Makes Tree.Market Unique</h2>
            <h3 className="font-normal">100% decentralized, interoperable, and open source point-of-trade solution for an unstoppable P2P economy, without intermediaries.</h3>
          </div>{/* <!-- title --> */}
        </div>{/* <!-- section-upper-content --> */}
        <div className="clear-both h-10"></div>
        <div className="section-lower-content grid items-center grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-6 mx-auto w-full lg:w-11/12 lg:max-w-screen-2xl px-6 lg:px-0">
        <div className="grid gap-8 lg:gap-6">

            <Feature img={"/images/landing/shield-icon.png"} tag={"Our Ethos"} header={"Self-funded, open-source & free of any third party control"} desc={<><p>We have a crystal-clear vision of the future we want to live in: one where self-sovereignty and self-control are at the foundation of all interactions.</p>
    
    <p>We&apos;re on a mission to lay the groundwork for the new civilization.</p>
    <p>Join the movement: <a href="https://discord.gg/5kfGBRF8EP" target="_blank" className="underline">Find us on Discord</a>, <a href="https://github.com/tree-market/" target="_blank" className="underline">Follow the progress on Github</a>.</p></>}/>
          {/* <!-- feature1 self-funded --> */}
    <Feature img={"/images/landing/lock-icon.png"} tag={"Privacy & Security"} header={"Unparalleled privacy & security of your data"} desc={<><p>Tree.Market is a webapp that runs on any platform with a web browser.</p>
              <p>Members maintain total control and own all their data, which is stored in their Dero wallet.</p>
              <p>Everything is private by default, until you choose to share it with others.</p>
              <p>Transactions cannot be tracked or traced, thanks to the unparalleled security of the <a href="https://dero.io/" className="underline">Dero Network</a>.</p></>}/>
          {/* <!-- feature4 secure --> */}
        </div>

        <div className="grid gap-8 lg:gap-6">
        <Feature img={"/images/landing/trade-icon.png"} tag={"Free-Market Journal"} header={"We complement the natural way of trade"} desc={<> <p>With our design process we focused on rethinking the experience of transacting for free-market dynamics.</p>
              <p>Economies can work without intermediaries, from the very bottom up.</p>
              <p>To redefine the system, we designed a user-friendly interface which allows Members to interact easily with the Dero blockchain.</p>
              <p>By doing so, we help Members keep personal records of their transactions without giving the data away to be intermediated by third parties.</p></>}/>
            
          {/* <!-- feature2 natural trade --> */}
        
          <Feature img={"/images/landing/reputation-icon.png"} tag={"Decentralized Trust Economy"} header={"Own your reputation on-chain"} desc={<><p>Unlike other platforms, you have total ownership over the comments and ratings people give you, forever.</p>
              <div className="rating text-center w-full sm:w-3/4 md:w-2/3 lg:w-full xl:w-5/6 mx-auto">
                <div className="rating-inner grid items-center gap-1 text-gray-700 px-6 py-3 bg-gray-200 ring-1 ring-gray-300 rounded-2xl shadow-inner cursor-default">
                <h6 className="font-semibold text-sm">Rate Your Experience</h6>
                <div className="stars grid grid-flow-col gap-3 justify-center text-lg">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
                </div>{/* <!-- rating-inner --> */}
              </div>{/* <!-- rating --> */}
              <p>This allows a new economy of trust without even relying on Tree.Market: it lives forever on the Dero blockchain.</p>
              <p>If in the future you had a great history of reviews, and want to trade your brand, the reputation is transferred along with it.</p></>}/>
            {/* <!- - feature5 reputation --> */}
        </div>
        <div className="grid gap-8 lg:gap-6">
          <Feature img="/images/landing/invoice-icon.png" tag="Point-of-Trade" header="P2P market" desc={<> <p>At the core, Tree.Market is a personal point-of-trade system allowing everyone to create a catalog of offering and services, and keep an immutable private journal of transactions, thanks to the abilities of the Dero Network.</p>
          <div className="list-bullets grid grid-flow-row pt-2">
            <p className="mb-2">Powering the future of:</p>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> Farmers markets
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> Off-grid communities
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> Small cafes, kiosks and restaurants
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> Independent service providers (freelancers)
            </div>
            <div className="bullet grid grid-flow-col justify-start items-center gap-3 text-sm">
              <span className="text-green-700 font-bold text-lg">&#10003;</span> Your imagination is the limit!
            </div>
          </div></>}/>
          {/* <!-- feature3 built-for --> */}
        <Feature img="/images/landing/trophy-icon.png" tag="Treemates Crew" header="Bringing usability to privacy blockchains" desc={<><p>Our elite design & development team has tens of thousands of hours of experience combined, both in the startup and corporate software worlds.</p>
          <p>We&apos;re the first SaaS private organization building quality software products for the non-technical users to interact with the Dero blockchain.</p>
          <p>Come and get to know us on <a href="https://discord.gg/5kfGBRF8EP" target="_blank" className="underline">Discord</a>.</p></>}/>
        {/* <!-- feature6 team --> */}
    
          
        </div>
        </div>{/* <!-- section-lower-content --> */}
        
      </div> 
    )
}

export default Unique;