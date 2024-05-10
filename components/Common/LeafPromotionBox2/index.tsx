"use client"

const LeafPromoBox2 = ()=>{
    return(
    <div className="promo-container-leaf flex flex-col gap-4 bg-[#D2E7DB] rounded-2xl p-4 shadow-sm shadow-gray-400">
                  {/* <!-- COMPONENT promo content --> */}
                  <div className="promo-title flex justify-between items-center gap-4">
                    <div>
                      <h3 className="font-bold">Support the devlopment of Tree.Market</h3>
                      <p className="text-xs">*Receive LEAF tokens with every donation.</p>
                    </div>
                    <div className="icon text-4xl font-bold text-red-600 hidden lg:block">
                      &#10559;
                    </div>
                    <div className="icon text-4xl font-bold text-red-600 lg:hidden">
                      &#10548;
                    </div>
                  </div>{/* <!-- promo-title --> */}
                  <div className="text-gray-700 grid gap-4">  
                    <div>
                      <p className="text-sm">LEAF tokens can be used at Tree.Market in exchange for any of our service offerings. This means you will be able to trade them for add-ons, listing dues, or any other service we provide.</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">100 LEAF 🌿 = 1 SEED 🌱</p>
                      <p className="text-xs sm:text-sm">Collect 100 LEAF tokens to trade them for 1 SEED token, upon availability.</p>
                    </div>
                    <div>
                      <p className="text-sm mb-4">SEED tokens provide unlimited product listings with no dues, special perks and discounts, for as long as you hold the Token.</p>
                      <p className="text-sm"><a href="https://tree.market/SEED_Token_Whitepaper.pdf" target="_blank" className="underline">Read more about the SEED token.</a></p>
                    </div>
                    <div>
                      <p className="text-sm">When you donate and collect LEAF tokens; not only are you helping us build an unstoppable future, you are also getting an IOU from Tree.Market to kickstart your storefront.</p>
                    </div>
                  </div>
                </div>
                )
    }

    export default LeafPromoBox2