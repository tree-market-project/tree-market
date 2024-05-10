"use server";



async function getInvoices(){
  
  
  
    try {
      const accessToken = process.env.BITCART_API;
      const response = await fetch(`http://127.0.0.1:80/api/invoices`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
        
      });

         if (!response.ok) {
        throw new Error('Failed to fetch invoices');
      }
     
      const data = await response.json();
  
     return data;
    } catch (error) {
      console.error('Error submitting form:', error);
      return(error)
    }
  }
  

  export default getInvoices;