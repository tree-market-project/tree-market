"use client"
import { news } from "@/data/news";
import NewsItem from "../NewsItem";

const News = ()=>{
    return(<div className="news relative w-full bg-[#ede6f2] bg-blend-lighten py-24 border-b border-gray-500 h-full">  
    <div className="section-upper-content relative grid gap-8 items-start mx-auto w-full lg:w-[1000px] 2xl:w-[1280px] px-6 lg:px-0">
      <div className="title space-y-3 w-full sm:w-3/4">
        <h2 className="text-3xl sm:text-4xl font-bold">News & More</h2>
        <div className="flex flex-wrap gap-1 2xl:gap-6">
          <h3 className="font-normal">Join us and stay up to date as new things propagate. Sharing is helping!</h3>
          <div className="flex gap-4 underline">
            <p><a href="https://discord.gg/5kfGBRF8EP" target="_blank" className="underline">Discord</a></p>
            <p><a href="https://twitter.com/TreeMarketApp/" target="_blank" className="underline">Twitter</a></p>
            <p><a href="https://odysee.com/@Tree.Market:b" target="_blank" className="underline">Odysee</a></p>
            <p><a href="https://github.com/tree-market/" target="_blank" className="underline">Github</a></p>
          </div>
        </div>
      </div>{/* <!-- title --> */}
    </div>{/* <!-- section-upper-content --> */}
    <div className="clear-both h-12"></div>
    <div className="section-lower-content relative grid gap-8 items-start mx-auto w-full">
        <div className="news-feed relative overflow-auto border-t border-b border-gray-600">{/* <!-- Snap Point --> */}
          {/* <!-- Contents --> */}
          <div className="relative w-11/12 lg:w-[1000px] 2xl:w-[1280px] mx-auto gap-12 overflow-y-auto h-96 px-2 md:px-8 lg:px-16">

            <ol className="relative border-s border-gray-600 border-dashed pr-2">                  
              <li className="spacer h-10 pl-6">
              </li>
              {/* <!-- news-item --> */}
              {news.map((x,i)=><NewsItem data={x} key={i}/>)}
              {/* <!-- news-item --> */}
              <li className="spacer h-10 pl-6">
              </li>
            </ol>

          </div>
        </div>{/* <!-- news-feed --> */}
    </div>{/* <!-- section-lower-content --> */}
  </div>)
}
export default News;