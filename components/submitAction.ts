"use server";



async function submitResponse(data:any){
 
   
  
    try {
      const key = process.env.API_KEY;
      const response = await fetch(`https://api.vbout.com/1/emailmarketing/addcontact.json?key=${key}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log(response)
  
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
  
      // Handle success
      console.log('Form submitted successfully');
      return("success")
    } catch (error) {
      console.error('Error submitting form:', error);
      return(error)
    }
  }
  

  export default submitResponse;