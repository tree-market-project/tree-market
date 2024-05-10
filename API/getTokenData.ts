"use server";

import { balance } from "@/types";
import hex2a from "@/utils/hex2a";



async function getToken(scid:string){

    const getTokenData = {
        "jsonrpc": "2.0",
        "id": "1",
        "method": "DERO.GetSC",
        "params": {
            "scid": scid,
            "code":false,
            "variables":true
        }
    }
  
  
  
    try {
      const response = await fetch(`http://tree.market:10102/json_rpc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(getTokenData)
        
      });

         if (!response.ok) {
        throw new Error('Failed to fetch invoices');
      }
     console.log("response",response)
      const data = await response.json();
      let decimals = 0
      if(data.result.stringkeys.decimals){
        decimals = data.result.stringkeys.decimals
      }
      let imageURL =""
      let name =""
      let symbol=""
      if(data.result.stringkeys.image_url){
        imageURL = hex2a(data.result.stringkeys.image_url)
      }
      if(data.result.stringkeys.iconURLHdr){
        imageURL=hex2a(data.result.stringkeys.iconURLHdr)
      }
      if(data.result.stringkeys.name){
        name = hex2a(data.result.stringkeys.name)
      }
      if(data.result.stringkeys.nameHdr){
        name=hex2a(data.result.stringkeys.nameHdr)
      }
      if(data.result.stringkeys.symbol){
        symbol=hex2a(data.result.stringkeys.symbol)
      }
      if(data.result.stringkeys.metadata){
        let metadata = JSON.parse(hex2a(data.result.stringkeys.metadata))
        name = metadata.name
        symbol =metadata.symbol
        imageURL=metadata.image
       const regex = /ipfs:\/\/([a-zA-Z0-9]{46})/;

 imageURL = imageURL.replace(regex, 'https://ipfs.io/ipfs/$1');



      }

      if(!symbol){
        symbol=name
      }
      if(!name){
        name=symbol
      }
      
     
      let token:balance = {decimals:decimals,iconURL:imageURL,name:name,symbol:symbol,scid:scid}
      console.log("token: ",token)
      return token

     
    } catch (error) {
      console.error('Error submitting form:', error);
      return(JSON.stringify(error))
    }
  }
  

  export default getToken;