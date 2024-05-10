"use client"

import { ReactNode } from "react"

type RightColumnProps = {
    children: ReactNode;
}

export const RightColumn: React.FC<RightColumnProps> = ({children})=>{
    return(
        <div className="right-col relative hidden lg:grid lg:col-span-2 xl:col-span-1 border-l lg:border-r border-gray-400 lg:mr-4 h-dvh">
        <div className="right-container relative flex flex-col justify-start px-4 py-4 shadow-gray-400 h-auto overflow-y-scroll scroller">{children}</div></div>
    )
}