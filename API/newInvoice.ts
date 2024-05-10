"use server";
import { InvoiceRequestBody } from "@/types";


async function newInvoice(invoice:InvoiceRequestBody){
  
  
  
    try {
      const accessToken = process.env.BITCART_API;
      const response = await fetch(`http://127.0.0.1:80/api/invoices`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(invoice)
        
      });

         if (!response.ok) {
        throw new Error('Failed to fetch invoices');
      }
     console.log("response",response)
      const data = await response.json();
      console.log(data)
     return data;
    } catch (error) {
      console.error('Error submitting form:', error);
      return(error)
    }
  }
  

  export default newInvoice;