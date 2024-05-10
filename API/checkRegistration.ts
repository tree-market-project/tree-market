"use server";



async function checkRegistration(address:string){

    const addressData = {
        "jsonrpc": "2.0",
        "id": "1",
        "method": "DERO.GetEncryptedBalance",
        "params": {
            "address": address,
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
        return false
      }else{
        return true
      }
      
     
    } catch (error) {
      console.error('Error submitting form:', error);
      return(false)
    }
  }
  

  export default checkRegistration;