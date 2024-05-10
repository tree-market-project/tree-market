import Roadmap from "@/components/Landing/Roadmap";
import Hero from "../../components/Seed/Hero";
import SeedComponent from "@/components/Seed/SeedComponent";
import Footer from "@/components/Landing/Footer";
import Membership from "@/components/Landing/Membership";
import SeedCountDown from "@/components/Landing/SeedCountDown";

export default function Seed() {
  return (
    <>
 
  <div className="main-container relative w-full flex flex-col bg-gray-50">
  <Hero/>
  
  <SeedComponent home={false}/>
  <Membership home={false}/>
  <Roadmap/>
  <SeedCountDown/>
  <Footer/>
  
  </div>
    </>
  );
}
