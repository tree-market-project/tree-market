"use server";



async function getProgress(){

    const getProgressData = {
        "jsonrpc": "2.0",
        "id": "1",
        "method": "DERO.GetSC",
        "params": {
            "scid": "e6e6ae9c8fd2a951d6027103393839b99d1a7d49ebd43e06c9978955e60d27e4",
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
        body: JSON.stringify(getProgressData)
        
      });

         if (!response.ok) {
        throw new Error('Failed to fetch invoices');
      }
     console.log("response",response)
      const data = await response.json();
     return (data.result.stringkeys.usdRaised);
    } catch (error) {
      console.error('Error submitting form:', error);
      return(JSON.stringify(error))
    }
  }
  

  export default getProgress;