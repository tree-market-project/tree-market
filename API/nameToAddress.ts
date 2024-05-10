"use server";



async function nameToAddress(name:string){

    const addressData = {
        "jsonrpc": "2.0",
        "id": "1",
        "method": "DERO.NameToAddress",
        "params": {
            "name": name,
            "topoheight":-1
        }
    }
  
  
  
    try {
      const response = await fetch(`http://tree.market:10102/json_rpc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addressData)
        
      });

         if (!response.ok) {
        throw new Error('Failed to fetch invoices');
      }
     console.log("response",response)
      const data = await response.json();
      if(data.error){
        return ""
      }else{
        return (data.result.address);
      }
      
     
    } catch (error) {
      console.error('Error submitting form:', error);
      return(JSON.stringify(error))
    }
  }
  

  export default nameToAddress;