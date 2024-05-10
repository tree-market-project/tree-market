"use client"
import { Currency } from "@/types";
import btcIcon from "@/public/images/currency-icons/btc-icon.png"
import bchIcon from "@/public/images/currency-icons/bch-icon.png"
import bnbIcon from "@/public/images/currency-icons/bnb-icon.png"
import deroIcon from "@/public/images/currency-icons/dero-icon.png"
import ethIcon from "@/public/images/currency-icons/eth-icon.png"
import ltcIcon from "@/public/images/currency-icons/ltc-icon.png"
import xmrIcon from "@/public/images/currency-icons/xmr-icon.png"
import maticIcon from "@/public/images/currency-icons/matic-icon.png"
import trxIcon from "@/public/images/currency-icons/trx-icon.png"
import usdtIcon from "@/public/images/currency-icons/usdt-icon.png"

function getCurrencyData(symbol:string){
  const btc:Currency = {name:"Bitcoin",symbol:"btc",icon:btcIcon, currency:"btc"}
  const bch:Currency = {name:"Bitcoin Cash",symbol:"bch",icon:bchIcon, currency:"bch"}
  const bnb:Currency = {name:"BNB",symbol:"bnb",icon:bnbIcon,currency:"bnb"}
  const dero:Currency = {name:"Dero",symbol:"dero",icon:deroIcon,currency:"dero"}
  const eth:Currency = {name:"Ethereum",symbol:"eth",icon:ethIcon,currency:"eth"}
  const ltc:Currency = {name:"Litecoin",symbol:"ltc",icon:ltcIcon,currency:"ltc"}
  const xmr:Currency = {name:"Monero",symbol:"xmr",icon:xmrIcon,currency:"xmr"}
  const matic:Currency= {name:"Polygon",symbol:"matic",icon:maticIcon,currency:"matic"}
  const trx:Currency={name:"Tron",symbol:"trx",icon:trxIcon,currency:"trx"}
  const usdtETH:Currency={name:"Tether ERC20",symbol:"usdt",icon:usdtIcon,currency:"eth"}
  const usdtMATIC:Currency={name:"Tether MATIC",symbol:"usdt",icon:usdtIcon,currency:"matic"}
  const usdtTRX:Currency={name:"Tether TRC20",symbol:"usdt",icon:usdtIcon,currency:"trx"}
    switch( symbol.toLowerCase()){
      case "btc":
        return btc
      case "bch":
        return bch
      case "bnb":
        return bnb
      case "dero":
        return dero
      case "eth":
        return eth
      case "ltc":
        return ltc
      case "xmr":
        return xmr
      case "matic":
        return matic
      case "trx":
        return trx
      case "usdteth":
        return usdtETH
      case "usdtmatic":
        return usdtMATIC
      case "usdttrx":
        return usdtTRX
      default:
        return dero
    }
  }
export default getCurrencyData;