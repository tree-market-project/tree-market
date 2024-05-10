"use client"
import { WalletApp } from "@/types";


function getWalletAppData(app:string|null){
  const web:WalletApp = {name:"DeroWeb",systems:["Windows","Mac","Linux","Android","iOS"]}
  const g45w:WalletApp={name:"G45W",systems:["Windows","Mac","Linux","Android"],downloads:[{name:"G45W Releases",url:"https://github.com/g45t345rt/g45w/releases"}]}
  const engram:WalletApp={name:"Engram",systems:["Windows","Mac","Linux"],downloads:[{name:"Engram Releases",url:"https://github.com/DEROFDN/Engram/releases"},{name:"Google Chrome RPC Bridge",url:"https://chromewebstore.google.com/detail/dero-rpc-bridge/nmofcfcaegdplgbjnadipebgfbodplpd"},{name:"Firefox RPC Bridge",url:"https://addons.mozilla.org/en-US/firefox/addon/dero-rpc-bridge/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"}]}
  const cli:WalletApp={name:"CLI",systems:["Windows","Mac","Linux"],downloads:[{name:"CLI Releases",url:"https://github.com/deroproject/derohe/releases"},{name:"Google Chrome RPC Bridge",url:"https://chromewebstore.google.com/detail/dero-rpc-bridge/nmofcfcaegdplgbjnadipebgfbodplpd"},{name:"Firefox RPC Bridge",url:"https://addons.mozilla.org/en-US/firefox/addon/dero-rpc-bridge/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"}]}

    switch( app?.toLowerCase()){
      case "web":
        return web
      case "g45w":
        return g45w
      case "engram":
        return engram
      case "cli":
        return cli
      default:
        return null
    }
  }
export default getWalletAppData;