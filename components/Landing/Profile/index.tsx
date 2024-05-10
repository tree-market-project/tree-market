"use client"
import { Profile } from "@/types"
import Image from "next/image"

const ProfileCard: React.FC<{ data: Profile }> = ({ data }) => {
    
    return(
        <div className="profile grid grid-flow-col gap-4 ring-1 ring-gray-700 rounded-sm p-4">
        <div className="pimg w-[80px] lg:w-[100px]">
          <Image alt="" width={100} height={100} src={data.img} className="w-auto" />
        </div>
        <div className="pdesc space-y-4">
          <h4 className="text-xl font-medium">{data.header}</h4>
          <p className="text-sm md:text-base">{data.paragraph}</p>
        </div>
      </div>
    )
}

export default ProfileCard;