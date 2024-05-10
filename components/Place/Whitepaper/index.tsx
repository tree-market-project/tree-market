"use client"

const Whitepaper = ()=>{
return(<div className="whitepaper grid md:grid-flow-col gap-4 md:gap-12 items-center bg-[#EDE8E8] p-8 rounded-xl order-7">
<div className="cover w-5/6 md:w-full mx-auto">
  <img src="https://tree.market/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhitepaper-cover.1eca14f7.png&w=1080&q=75" />
</div>
<div className="summary space-y-6 md:space-y-2 flex flex-col-reverse md:flex-col gap-6">
  <div className="grid gap-4">
    <h2 className="text-xl sm:text-2xl font-bold">What Makes SEED Token A Lifetime Opportunity?</h2>
    <p>Download the whitepaper to learn about the specifics of the SEED Token.</p>
    <div className="bullets space-y-2">
      <p>Contents:</p>
      <ul className="list-disc pl-6">
        <li>Abstract</li>
        <li>About Tree.Market</li>
        <li>Utility of SEED Token</li>
        <li>Three-Point Price Tag System of SEED Token</li>
        <li>Tokenomics of SEED Token</li>
        <li>SEED Token Specifications</li>
        <li>SEED Token Contract Code</li>
      </ul>
    </div>{/* <!-- bullets --> */}
  </div>
  <div className="btn inline-grid text-center bg-[#7BBC95] rounded-lg px-4 py-4 w-11/12 mx-auto md:mx-0 max-w-[300px] cursor-pointer hover:shadow-md">
    Download Whitepaper
  </div>
</div>{/* <!-- summary --> */}
</div>)
}

export default Whitepaper