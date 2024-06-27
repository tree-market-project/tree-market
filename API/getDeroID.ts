"use server";

import { DeroID } from "@/types";
import hex2a from "@/utils/hex2a";
import getDNSRegistry from "./getDNSRegistry";



async function getDeroID(scid:string){

  let id:DeroID = {scid:scid,registeredNames:[]}

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
        throw new Error('Failed to fetch token data');
      }
     console.log("response",response)
      const data = await response.json();
      console.log("response json",data)
     
      if(data.result.stringkeys.description){
        id.description = hex2a(data.result.stringkeys.decimals)
      }
     
      if(data.result.stringkeys.image_url){
        id.image = hex2a(data.result.stringkeys.image_url)
      }
      if(data.result.stringkeys.iconURLHdr){
        id.image=hex2a(data.result.stringkeys.iconURLHdr)
      }
      if(data.result.stringkeys.name){
        id.names  = [hex2a(data.result.stringkeys.name)]
      }
      if(data.result.stringkeys.nameHdr){
        id.names=[hex2a(data.result.stringkeys.nameHdr)]
      }
      if(data.result.stringkeys.OWNER){
        id.address=hex2a(data.result.stringkeys.OWNER)
      }
      
      if(data.result.stringkeys.metadata){
        let metadata = JSON.parse(hex2a(data.result.stringkeys.metadata))
        id.names = [metadata.name]
        
        id.image=metadata.image
       const regex = /ipfs:\/\/([a-zA-Z0-9]{46})/;

 id.image = id.image?.replace(regex, 'https://ipfs.io/ipfs/$1');



      }

      const registry = await getDNSRegistry()
      const keys = Object.keys(registry);

      // Iterate over the keys to find the matching data value
      for (let key of keys) {
        if (key.startsWith("data:")) {
          
          const name = key.split(":")[1];
          console.log(key,name,scid,hex2a(registry[key]))
          if (hex2a(registry[key]) === scid) {
            id.registeredNames?.push(name)
          }
        }
      }

      if(id.registeredNames?.length){
        id.registered=true 
      }
      
      console.log("deroID: ",id)
     
      
      return id

     
    } catch (error) {
      console.error('Error fetching token:', error);
      return(JSON.stringify(error))
    }
  }
  

  export default getDeroID;