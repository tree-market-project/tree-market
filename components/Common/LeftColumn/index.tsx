"use client"

import { ReactNode } from "react"

type LeftColumnProps = {
    children: ReactNode;
}

export const LeftColumn: React.FC<LeftColumnProps> = ({children})=>{
    return(
        <div className="left-col flex flex-col lg:grid lg:col-span-3 xl:col-span-2 h-auto lg:overflow-y-scroll scroller">
            {children}
            <div className="clear-both h-[80px]"></div>
        </div>
    )
}