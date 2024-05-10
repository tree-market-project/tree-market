"use client"
import getWalletAppData from "@/utils/getWallAppData"
import { WalletApp } from "@/types"

const DownloadLinks:React.FC<{app:string|null}>=({app})=>{
  const walletApp:WalletApp|null = getWalletAppData(app)
    return(<>
   
        {app&&<>
          {/* <!-- COMPONENT wallet systems info --> */}
          <h3 className="font-semibold text-lg">Download Links</h3>
          <ul className="list-disc ml-8 space-y-3 text-sm">
            {walletApp?.downloads && walletApp?.downloads.map(link=><li key={link.name}>
              <a href={link.url} target="_blank" className="hover:underline break-all">{link.name}</a>
            </li>)}
          </ul>
        </> }
        </>
    )
}
export default DownloadLinks