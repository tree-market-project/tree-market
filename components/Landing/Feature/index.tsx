"use client"

import Image from "next/image";

const Feature: React.FC<{img:string,tag:string,header:string,desc:any}> = ({img,tag,header,desc})=>{
    return(<div className="feature space-y-6 ring-1 ring-gray-400 bg-[#f6f4f4] px-6 py-12 sm:break-inside">
    <Image alt="" width={50} height={50} src={img} className="w-[50px]" />
    <div className="tag uppercase text-xs ring-1 ring-gray-900 rounded-sm inline-grid py-1 px-3">
      {tag}
    </div>{/* <!-- tag --> */}
    <h3  className="text-3xl lg:text-2xl font-semibold">{header}</h3>
    <div className="desc space-y-4">
      {desc}
    </div>{/* <!-- desc --> */}
  </div>)
}

export default Feature;