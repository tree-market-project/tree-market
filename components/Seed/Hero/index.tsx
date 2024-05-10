"use client"

import Image from "next/image";
import iconWhite from "@/public/images/landing/treemarket-icon_white.png"
import treemarketIcon from "@/public/images/landing/treemarket-icon.png"
const Hero = () =>{



return (
  <div className="hero relative w-full bg-[url('/images/seed/seed-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed z-10">
  <a href="https://tree.market">
    <div className="backto flex items-center justify-start gap-3 text-white font-normal pl-2 pt-2">
      <Image alt=""  src={iconWhite} className="w-[20px] md:w-[24px]" />
      <p className="underline text-sm md:text-base">Visit Tree.Market</p>
    </div>
  </a>
  <div className="hero-content relative grid grid-flow-row gap-4 justify-between items-center mx-auto w-11/12 lg:w-[991px] py-24 lg:py-36 text-white text-center space-y-12 lg:space-y-14 2xl:space-y-16">
      <div className="title text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl space-y-1 lg:space-y-2 2xl:space-y-3">
        <h1 className="font-normal">
          Human Freedom is at stake:
        </h1>
        <h2 className="font-bold">
          It&apos;s time to take action
        </h2>
      </div>{/* <!-- title --> */}
      <div className="logo w-[88px] lg:w-[100px] 2xl:w-[120px] mx-auto">
        <Image alt=""  src={treemarketIcon}/>
      </div>
      <div className="speech w-11/12 mx-auto space-y-6 lg:space-y-8 2xl:space-y-12 text-xl lg:text-2xl 2xl:text-3xl leading-7 2xl:leading-10 font-['Rasa']">
        <p className="font-normal">
          As humans, we depend on free markets for our basic needs, but we also need them to become the better version of ourselves:
        </p>
        <p className="font-normal">
          Humans need the freedom to explore their potential, engage in new adventures, take risks and fail numerous times.
        </p>
        <p className="font-normal">
          It is in that very struggle that we find our motives, choose right from wrong, and eventually grow our reputation in the community by improving our fellow humans&apos; lives.
        </p>
        <p className="font-normal">
          When free markets are restricted, we lose innovation, access to alternatives, and the actual freedom to pursue our full potential - our destiny.
        </p>
        <p className="font-normal">
          If you want freedom in your lifetime and to gift that legacy to future generations, come and SEED with us:
        </p>
      </div>{/* <!-- speech --> */}
  </div>{/* <!-- hero-content -->  */}   
</div>
)
}

export default Hero;