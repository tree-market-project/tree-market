"use client"
import timeRemaining
 from "@/utils/countDown";
 import { CountDown } from "@/types";
import Signup from "../Signup";
import { useState,useEffect } from "react";



const SeedComponent: React.FC<{home:boolean}> = ({home})=>{
  const [seedClock, setSeedClock] = useState<CountDown>(timeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeedClock(timeRemaining()); // Update the countdown every second
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

    return(
        <div className={`seed relative w-full bg-gradient-to-br from-[#152331] via-[#05090c] to-[#000000] pt-28 pb-8 lg:pt-32 ${home?"border-b border-gray-500":""} space-y-16`}>
        <div className="section-upper-content text-white text-center relative grid gap-12 items-start mx-auto w-11/12 lg:w-[991px]">
          <div className="title">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold">SEED</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">The New World</h3>
          </div>{/* <!-- title --> */}
          <div className="ring-1 ring-white px-4 lg:px-6 py-4 rounded-sm w-full sm:w-[600px] md:w-11/12 mx-auto font-['Rasa'] text-xl md:text-2xl xl:text-3xl">
            Help fund the development of the most important software tool in the history of humanity: the one that will set us free.
          </div>
        </div>{/* <!-- section-upper-content --> */}
        
        <div className="section-lower-content relative mx-auto w-11/12 lg:w-[991px]">
          <div className="section-inner-content grid gap-24 lg:gap-28 xl:gap-32">
            <div className="signup relative grid">
              <div className="form-container grid mx-auto w-full lg:w-[991px]">
                <Signup/>
                
              </div>{/* <!-- form-container --> */}
            </div>{/* <!-- signup --> */}
        
            <div className="timer text-white text-center space-y-6">
  <h2 className="text-5xl sm:text-6xl xl:text-8xl font-bold flex flex-wrap gap-3 justify-center">
    <div>Coming Soon</div>
  </h2>
  <h3 className="text-2xl lg:text-3xl font-normal font-['Rasa']">Sign up to be notified about the Token Launch</h3>
</div>{/* <!-- timer --> */}
        
<div className="placer h-0 grid"></div>
          </div>{/* <!-- section-inner-content --> */}
        </div>{/* <!-- section-lower-content --> */}
        </div>)
}
export default SeedComponent;
