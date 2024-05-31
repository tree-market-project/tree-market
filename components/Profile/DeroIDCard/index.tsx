"use client"

import getDeroID from "@/API/getDeroID"
import { DeroID } from "@/types"
import Link from "next/link"
import { useEffect, useState } from "react"


const DeroIDCard:React.FC<{scid:string}> = ({scid})=>{
  const [id,setID] = useState<DeroID>({scid:scid})

  const getID = async()=>{
    let newID = await getDeroID(scid)
    if(typeof newID == "string"){
      return
    }
    setID(newID)
  }

  useEffect(()=>{
    getID()
  },[])
    
  return(
      <div className="deroid-single relative flex flex-col justify-between gap-4 p-4 bg-white rounded-lg shadow-sm shadow-gray-400">
      <div className="deroid-info grid gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="id-img w-1/2 max-w-[150px]">
            <img src={id.image} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="registered text-xs text-green-900 text-center bg-green-100 px-2 py-1 rounded-full shadow-sm shadow-gray-400 cursor-default">{id.registered?"Registered":"Unregistered"}</div>
            {/* <!-- COMPONENT - Reputation score --> */}
            <div className="deroidreputation grid text-center bg-gray-100 px-2 py-1 rounded-md shadow-sm shadow-gray-400 cursor-default">
              <h5 className="text-xs font-medium">Reputation</h5>
              <div className="flex items-center gap-1">
                <div className={id.reputation && id.reputation>0?"text-yellow-400":"text-gray-400"}>&#9733;</div>
                <div className={id.reputation && id.reputation>1?"text-yellow-400":"text-gray-400"}>&#9733;</div>
                <div className={id.reputation && id.reputation>2?"text-yellow-400":"text-gray-400"}>&#9733;</div>
                <div className={id.reputation && id.reputation>3?"text-yellow-400":"text-gray-400"}>&#9733;</div>
                <div className={id.reputation && id.reputation>4?"text-yellow-400":"text-gray-400"}>&#9733;</div>
              </div>
            </div>{/* <!-- deroidreputation --> */}
            <div className="flex items-center gap-2 text-right">
              <div className="font-semibold">&#9906;</div>
              <div className="text-xs">New York, USA</div>
            </div>
          </div>
        </div>
        <div className="deroid-name text-lg font-semibold">
          {id.names?.[0]}
        </div>
        <div className="flex flex-col gap-4">
          <div className="contact-details grid gap-1">
            <div className="deroid-website text-sm flex items-center gap-1">
              <div className="w-[15px]">&#9741;</div>
              <div><a href="https://tree.market" target="_blank" className="text-[#3429a5]">https://tree.market</a></div>
            </div>
            <div className="deroid-email text-sm flex items-center gap-1">
              <div className="w-[15px]">&#10147;</div>
              <div><a href="mailto:treemates@tree.market" target="_blank" className="text-[#3429a5]">treemates@tree.market</a></div>
            </div>
            <div className="deroid-phone text-sm flex items-center gap-1">
              <div className="w-[15px]">&#9990;</div>
              <div><a href="tel:+1 555 555-5555" target="_blank" className="text-[#3429a5]">+1 555 555-5555</a></div>
            </div>
          </div>{/* <!-- contact-details --> */}
          <div className="deroidbio text-sm space-y-2">
            {id.description}
          </div>{/* <!-- deroidbio --> */}
        </div>
        <hr />
        <div className="deroidsocial-links relative w-full grid gap-1">
          <h4 className="text-xs font-semibold">Social Links</h4>
          <div className="flex flex-wrap items-center gap-3">
            <div className="text-xs bg-gray-200 px-3 py-2 rounded-md cursor-pointer hover:ring-1 hover:ring-gray-400">
              Facebook
            </div>
            <div className="text-xs bg-gray-200 px-3 py-2 rounded-md cursor-pointer hover:ring-1 hover:ring-gray-400">
              Instagram
            </div>
            <div className="text-xs bg-gray-200 px-3 py-2 rounded-md cursor-pointer hover:ring-1 hover:ring-gray-400">
              X (Twitter)
            </div>
            <div className="text-xs bg-gray-200 px-3 py-2 rounded-md cursor-pointer hover:ring-1 hover:ring-gray-400">
              LinkedIn
            </div>
            <div className="text-xs bg-gray-200 px-3 py-2 rounded-md cursor-pointer hover:ring-1 hover:ring-gray-400">
              Private Islands
            </div>
            <div className="text-xs bg-gray-200 px-3 py-2 rounded-md cursor-pointer hover:ring-1 hover:ring-gray-400">
              Phoenix
            </div>
          </div>
        </div>{/* <!-- deroidsocial-links --> */}
      </div>{/* <!-- deroid-info --> */}
      <div className="bottom-row grid gap-4">
        <hr />
        <div className="buttons flex items-center justify-between gap-4">
          <div className="viewbtn w-full bg-[#3E7A57] text-white text-sm text-center px-4 py-2 shadow-sm shadow-gray-400 rounded-md cursor-pointer hover:shadow-inner hover:shadow-gray-400">View</div>
          <Link href={`/edit?scid=${scid}`} className="editbtn w-full bg-gray-200 text-sm text-center px-4 py-2 shadow-sm shadow-gray-400 rounded-md cursor-pointer hover:shadow-inner hover:shadow-gray-400">Edit</Link>
        </div>{/* <!-- buttons --> */}
      </div>{/* <!-- bottom-row --> */}
    </div>
    )
}

export default DeroIDCard