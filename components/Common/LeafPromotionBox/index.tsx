"use client"
import Link from "next/link"

const LeafPromoBox = ()=>{
    return(
        <Link href="/place">
        <div className="promo-container flex flex-col gap-3 bg-[#D2E7DB] rounded-2xl p-4 shadow-sm shadow-gray-400 cursor-pointer">
          {/* <!-- COMPONENT wallet address --> */}
          <div className="promo-title flex justify-between items-center gap-4">
            <h3 className="font-semibold">Support the Development of Tree.Market</h3>
            <div className="icon text-xl">
              🌳
            </div>
          </div>{/* <!-- address --> */}
          <div className="text-sm text-gray-700 grid gap-2">
            <p className="text-sm">Looking forward to trading freely and privately?</p>
            <div>
              <p className="text-sm font-bold">Donate and help make it a reality!</p>
              <p className="text-xs">*Receive LEAF 🌿 tokens with every donation.</p>
            </div>
          </div>
        </div>{/* <!-- promo-container donate --> */}
        </Link>
    )
}

export default LeafPromoBox