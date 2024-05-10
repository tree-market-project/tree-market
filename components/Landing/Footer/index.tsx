"use client"

import Image from "next/image";
import treemarketIcon from "@/public/images/landing/treemarket-icon.png"
import copyleftLight from "@/public/images/copyleft_light.png"

const Footer = ()=>{
    return( <div className="footer relative w-full bg-gray-900 py-16 border-b border-gray-500 space-y-8 lg:space-y-16 text-white">
    <div className="section-upper-content relative grid md:grid-flow-col gap-8 lg:gap-16 items-start mx-auto w-full lg:w-[1000px] 2xl:w-[1280px] px-6 lg:px-0">
      <div className="grid sm:grid-flow-col justify-start gap-4">
        <div className="w-[60px] lg:w-[72px] hidden sm:grid">
          <Image alt="" src={treemarketIcon}/>
        </div>
        <div className="declaration space-y-4 text-sm border-l border-white pl-6">
          <p>Tree.Market is an unincorporated Private Members Association. It operates as an auxiliary of <a href="https://thearkofthecreatorsfellowship.org" className="underline" target="_blank">The Ark of Creators Fellowship.</a></p>

          <p>The Ark of Creators Fellowship is akin to a 508(c)(1)(A), and thus not a taxable organization. Please note that there are no refunds or transfers available.</p>

          <p>The Ark of Creators Fellowship and/or its auxiliaries are not a commercial entity and thus can&apos;t provide any tax-related advice, explanations, opinions, or recommendations regarding the implications of trading in the free market.</p>

          <p>The decision to utilize the information and processes provided is solely at the discretion of the Member.</p>

          <p>Your access to The Ark of Creators Fellowship websites, tools, applications, and the information contained therein, is subject to the current Private Members Association agreement.</p>
        </div>{/* <!-- declaration --> */}
      </div>
      <div className="links sm:flex sm:justify-around lg:justify-between gap-8 lg:gap-16 space-y-4 sm:space-y-0 text-center sm:text-left order-first md:order-last">
        <div className="links-left space-y-4">
          <p><a href="https://tree.market/seed" className="underline">SEED Token</a></p>
          <p><a href="https://discord.gg/5kfGBRF8EP" target="_blank" className="underline">Discord</a></p>
          <p><a href="https://twitter.com/TreeMarketApp/" target="_blank" className="underline">Twitter</a></p>
          <p><a href="https://github.com/tree-market/" target="_blank" className="underline">Github</a></p>
        </div>
        <div className="links-right space-y-4">
          <p><a href="https://tree.market/privacy" className="underline">Privacy Policy</a></p>
          <p>{/* <a href="" className="underline"> */}Treemate Agreement</p>
          <p className="inline-flex flex-wrap items-center justify-center sm:justify-start w-full gap-1 text-sm">
            <span className="flex flex-wrap items-center justify-center"><Image alt=""  src={copyleftLight} className="w-[20px] h-[20px]" />&nbsp;2024.</span> All Rights Reserved.</p>
        </div>  
      </div>{/* <!-- links --> */}
    </div>{/* <!-- section-upper-content --> */}

  </div>)
}
export default Footer;