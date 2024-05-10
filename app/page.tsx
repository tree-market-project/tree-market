import Hero from "@/components/Landing/Hero"
import HowItWorks from "@/components/Landing/HowItWorks"
import Unique from "@/components/Landing/Unique"
import Membership from "@/components/Landing/Membership"
import Roadmap from "@/components/Landing/Roadmap"
import News from "@/components/Landing/News"
import Footer from "@/components/Landing/Footer"
import SeedCountDown from "@/components/Landing/SeedCountDown"



export default function Home() {
    return(
        <><Hero/>
        
        <HowItWorks/>
        
        <Unique/>
        <Membership home={true}/>
    <Roadmap/>
    <News/>
    <Footer/>
    <SeedCountDown/>
    <div className="clear-both h-8"></div></>
    )
}