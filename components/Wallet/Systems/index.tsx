"use client"
import getWalletAppData from "@/utils/getWallAppData"
import { WalletApp } from "@/types"

const Systems : React.FC<{app:string|null}>=({app})=>{
const walletApp:WalletApp|null = getWalletAppData(app)

    return(
        <>{app&&<>
        <h3 className="font-semibold text-lg">Systems</h3>
          <div className="systems flex flex-wrap justify-start items-center gap-3">
            {walletApp?.systems.map(system=><div key={system} className="system flex items-center justify-start gap-1 bg-gray-200 px-3 py-1 rounded-lg cursor-default text-sm">
              <div>{system}</div>
            </div>)}
          </div>
        </>}
        
        </>
    )
}

export default Systems