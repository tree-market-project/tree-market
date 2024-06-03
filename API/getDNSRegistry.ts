"use server";





async function getDNSRegistry(){

  

   

    const getRegistryData = {
      "jsonrpc": "2.0",
      "id": "1",
      "method": "DERO.GetSC",
      "params": {
          "scid": "ead31b12a6e5565cf24247ce8414e9e476c56d3b45358a5e4b7345053923c6da",
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
        body: JSON.stringify(getRegistryData)
        
      });

         if (!response.ok) {
        throw new Error('Failed to fetch token data');
      }
     console.log("response",response)
      const data = await response.json();
      //console.log("response json",data)
     
     
     

      
      
     
      
      return data.result.stringkeys

     
    } catch (error) {
      console.error('Error fetching registry:', error);
      return(JSON.stringify(error))
    }
  }
  

  export default getDNSRegistry;