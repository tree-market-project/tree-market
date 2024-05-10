"use client"
import { NewsItem } from "@/types"

const NewsItem: React.FC<{ data: NewsItem }> = ({ data }) => {

    return(<li className="news-item mb-10 sm:flex">
    <div className="border-b border-gray-600 border-dashed pl-6"></div>         
    <div className="items-center justify-between px-5 py-6 bg-white border border-gray-600 space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="mb-1 text-xs border border-gray-600 rounded-md px-2 py-1">
          {data.title}
        </div>
        <div className="date text-sm">
          {data.date}
        </div>
      </div>
      
        {data.body}
      
    </div>
  </li>)
}
 export default NewsItem;