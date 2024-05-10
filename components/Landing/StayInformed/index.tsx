"use client"

import { useEffect, useState } from "react";
//import axios from 'axios';

import submitResponse from "../../submitAction";



const StayInformed = () =>{
  const [jobs,setJobs] = useState(false)
  const [funding,setFunding] = useState(false)
  const [captchaValue, setCaptchaValue] = useState(0);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [captchaError,setCaptchaError] = useState(false)
  const [submissionStatus,setSubmissionStatus] = useState("")
  const [emailError,setEmailError] = useState(false)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  

  const generateCaptcha = () => {
    // Generate a simple math problem as a CAPTCHA
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = Math.random() > 0.5 ? '+' : '-';
    const captcha = `${num1} ${operation} ${num2}`;

    // Store the solution in state
    setCaptchaValue(operation === '+' ? num1 + num2 : num1 - num2);

    // Set the generated CAPTCHA text
    setCaptchaText(captcha);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
   

    const validEmail = emailPattern.test(event.target.email.value)
    const validCaptcha = (parseInt(captchaInput,10) === captchaValue)
    
    setEmailError(!validEmail)
    setCaptchaError(!validCaptcha)
    if (validCaptcha && validEmail) {
setSubmissionStatus("waiting")

      // CAPTCHA solved successfully, proceed with form submission
      // Your form submission logic here
     // alert('Form submitted successfully!');
      // Clear CAPTCHA input
      setCaptchaInput('');
      // Regenerate CAPTCHA
      generateCaptcha();
      setCaptchaError(false)
      try{

      
      
    
    let subscriptions = [""]
    
  
    const formData = new FormData(event.currentTarget);
    
   
    
    const requestBody = {
      email: formData.get('email'),
      status: 'active',
      listid: 126019,
      
      fields: {
        894013: 0,
        894011:subscriptions,
        892121: "",
        
        894014: "",
  
      }
     

      
    };
  
   
   
      const response = await submitResponse(requestBody)
      if(response=="success"){
        setSubmissionStatus("success")
        return
      }else{
        setSubmissionStatus("fail")
      }
    }
  
  catch(error)
  {console.error("Error submitting form:", error);
  setSubmissionStatus("fail");
  }

  }
        
    else {
     
      generateCaptcha();
      setSubmissionStatus("fail")
    }
     
  }
  
  useEffect(() => generateCaptcha(), []);

return (
    <div className="newsletter-container flex flex-col gap-4 bg-gray-50 rounded-2xl p-4 shadow-sm shadow-gray-400">

    <form onSubmit={handleSubmit} className="space-y-2">
    <h3 className="font-semibold pb-2 px-2">Stay Informed</h3>
      
        <div className="input-email relative grid items-center px-2 py-2 shadow-inner ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
          <label htmlFor="email" className="text-sm font-semibold px-2">Email*</label>
          <input type="email" name="email" id="email" placeholder="Enter a valid email address" className={`${emailError?'ring-red-400':''} py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2`}/>
        </div>{/* input email*/}
       {emailError&& <div className="error pt-1 mt-2">
          <p className="text-sm ring-1 ring-red-400 rounded-lg bg-red-100 px-4 py-1 cursor-default">Please enter a valid email address.</p>
        </div>}{/*email error*/}
        <div className="notification info flex items-center border-2 border-gray-200 bg-amber-50 px-3 py-1 rounded-sm gap-2">
                      <div className="pt-1 px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <g clip-path="url(#clip0_14775_469299)">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z" fill="#94A3B8"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_14775_469299">
                          <rect width="24" height="24" fill="white"/>
                          </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-sm">
                        <p>Opt-in to stay up to date with latest news.</p>
                      </div>
                    </div>

        <div className="selections mx-auto w-11/12">

</div>{/*selections */}

<div className="clear-both h-6"></div>
        <div className="captcha bg-gray-100 rounded-lg px-4 py-4 mx-auto w-11/12 sm:w-3/4 text-center space-y-2 shadow-lg">
          <h4>Solve the following math problem:</h4>
          <div className="container grid grid-flow-row justify-center items-center gap-1">
            <div className="problem w-11/12 mx-auto text-lg font-semibold ring-1 ring-gray-300 rounded-lg bg-gray-300 py-1 cursor-default">{captchaText}</div>
            <div className="answer my-1">
              <input type="number"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          
          required placeholder="Enter the answer here" className="py-1 text-base bg-transparent shadow-inner rounded-lg w-full focus:border-none focus:ring-0 focus:ring-inset px-2 text-center"/>  
            </div>{/*answer*/}
          </div>{/*container*/}
         { captchaError && <div className="error pt-1">
            <p className="text-sm ring-1 ring-red-400 rounded-lg bg-red-100 px-4 py-1 cursor-default">Incorrect CAPTCHA. Please try again.</p>
          </div>}{/*error*/}
        </div>{/*captcha*/}


        <div className="clear-both h-8"></div>

        <button type={"submit"} className="btn-add px-4 w-full">
        <div className="text-center bg-[#b8dbc6] py-4 rounded-lg font-normal cursor-pointer shadow-md hover:shadow-inner">
	Sign Up
</div>
        </button>{/*btn-add*/}

     
    
     <div className="validations w-full sm:w-[600px] mx-auto">
       { submissionStatus == "fail"?
        <div className="error pt-1 mt-2 mx-6 text-center">
          <p className="text-sm ring-1 ring-red-400 rounded-lg bg-red-100 px-4 py-1 cursor-default">There was an error submitting the form. Please review and try again.</p>
        </div>//fail
: submissionStatus == "success"?
        <div className="success pt-1 mt-2 mx-6 text-center">
          <p className="text-sm ring-1 ring-green-400 rounded-lg bg-green-100 px-4 py-1 cursor-default">Thank you! Your submission has been sent to the team.</p>
        </div> //sucess
         
         : submissionStatus =="waiting"?

         <div className="success pt-1 mt-2 mx-6 text-center">
          <p className="text-sm ring-1 ring-blue-400 rounded-lg bg-blue-100 px-4 py-1 cursor-default">Waiting..</p>
        </div> //waiting
         
         :""}
      </div>
     
      {/*validations*/}
    </form>{/*form-container*/}
  </div>
)
}

export default StayInformed;