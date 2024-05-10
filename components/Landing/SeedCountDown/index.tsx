"use client"


const SeedCountDown = () => {
 

  return (
    <div className="seedbanner w-full px-4 sm:px-6 py-2 lg:py-4 bg-white fixed bottom-0 z-10 shadow-[0_-5px_8px_-6px_rgba(0,0,0,0.33)]">
 <a href="https://tree.market/place/">
 <div className="grid grid-flow-col items-center gap-3 sm:gap-4 text-gray-600 mx-auto w-full lg:w-[1024px]">
   <div className="grid grid-flow-row sm:grid-flow-col sm:gap-3 items-center">
     <div className="grid grid-flow-row lg:grid-flow-col justify-start items-center lg:gap-2">
       <b className="text-sm sm:text-base font-semibold text-black">Come & test Tree.Market Open Alpha!</b>
       <span className="hidden sm:block">DONATE AND PAVE THE WAY TO FREEDOM</span>
     </div>
     <div className="btn bg-[#7BBC95] text-center text-white text-sm sm:text-base rounded-md max-w-60 px-4 py-1 cursor-pointer hover:shadow-lg">Learn More</div>
   </div>
 </div>
 </a>
</div>

  );
}

export default SeedCountDown;
