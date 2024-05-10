"use server";
import { InvoiceRequestBody } from "@/types";


async function newTreeInvoice(invoice:InvoiceRequestBody){
  
  
  
    try {
      const response = await fetch(`http://tree.market:5001/service/newTreeInvoice/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoice)
        
      });

         if (!response.ok) {
        throw new Error('Failed to fetch invoices');
      }
     console.log("response",response)
      const data = await response.json();
      console.log(data)
     return JSON.stringify(data);
    } catch (error) {
      console.error('Error submitting form:', error);
      return(JSON.stringify(error))
    }
  }
  

  export default newTreeInvoice;