"use client"
import dynamic from "next/dynamic"

const DynamicToaster = dynamic(()=>import('@/components/Place/Toaster/index'),{
    ssr:false
}
)

export default DynamicToaster