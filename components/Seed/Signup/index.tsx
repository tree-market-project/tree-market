"use client"

import { useEffect, useState } from "react";
//import axios from 'axios';

import submitResponse from "../../submitAction";



const Signup = () =>{
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
    
    if(event.target.news_checkbox.checked){
      subscriptions.push("News")
    }
    if(event.target.testing_checkbox.checked){
      subscriptions.push("Beta & Usability Testing")
    }
    
    const requestBody = {
      email: formData.get('email'),
      status: 'active',
      listid: 126019,
      
      fields: {
        894013: formData.get('offer_amt') || 0,
        894011:subscriptions,
        892121: formData.get('name')||"",
        
        894014: formData.get('job_post')||"",
  
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
    <div className="signup relative grid">
    <div className="form-container grid mx-auto w-full lg:w-[991px]">
      
      <form onSubmit={handleSubmit} className="form-fields px-4 sm:px-8 py-10 bg-gray-50 rounded-3xl shadow-lg w-full sm:w-[600px] mx-auto">
      <div className="title text-center mb-6">
                    <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-bold text-gray-500">SEED</h2>
                    <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold text-gray-400">The New World</h3>
                  </div>{/* <!-- title --> */}
                  <div className="ring-1 ring-black p-4 mb-8 rounded-sm font-['Rasa'] text-lg font-normal">
                    Please sign up and we&apos;ll get in touch soon with all the details for the launch.
                  </div>
           
        <div className="input-name relative grid items-center px-2 py-2 shadow-inner ring-1 ring-gray-900/5 mx-auto w-full rounded-lg mb-4">
          <label htmlFor="input_name" className="text-sm font-semibold px-2">Full Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset focus:ring-gray-50 px-2"/>
        </div>{/*input tile */}

        <div className="input-email relative grid items-center px-2 py-2 shadow-inner ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
          <label htmlFor="email" className="text-sm font-semibold px-2">Email*</label>
          <input type="email" name="email" id="email" placeholder="Enter a valid email address" className={`${emailError?'ring-red-400':''} py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2`}/>
        </div>{/* input email*/}
       {emailError&& <div className="error pt-1 mt-2">
          <p className="text-sm ring-1 ring-red-400 rounded-lg bg-red-100 px-4 py-1 cursor-default">Please enter a valid email address.</p>
        </div>}{/*email error*/}

        <div className="selections mx-auto w-11/12">

          <div className="news-checkbox grid grid-flow-col justify-start items-center gap-3 mx-auto w-full mt-6 mb-8">
            <input id="news_checkbox" type="checkbox"  className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2"/>
            <label htmlFor="news_checkbox" className="checkbox text-base">News</label>
          </div>{/*news checkbox */} 

          <div className="testing-checkbox grid grid-flow-col justify-start items-center gap-3 mx-auto w-full mt-6 mb-8">
            <input id="testing_checkbox" type="checkbox" value="" className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2"/>
            <label htmlFor="testing_checkbox" className="checkbox text-base">Beta & Usability Testing</label>
          </div>{/*testing checkbox */}

          <div className="funding-checkbox grid grid-flow-col justify-start items-center gap-3 mx-auto w-full mt-8 mb-4">
            <input id="opportunity_checkbox" type="checkbox" value={funding?"checked":""} className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2" onChange={()=>{setFunding(!funding)}}/>
            <label htmlFor="opportunity_checkbox" className="checkbox text-base">SEED Tokens — Declaration of Interest</label>
          </div>{/*funding checkbox */}
          { funding && <div className="offer-amt">
            <div className="input-amount relative grid items-center px-2 py-2 shadow-inner ring-1 ring-gray-900/5 mx-auto w-full rounded-lg mb-2">
              <label htmlFor="offer_amt" className="text-sm font-semibold px-2">Total # SEED Tokens you plan to obtain</label>
              <input type="text" name="offer_amt" id="offer_amt" placeholder="Enter an amount" className="py-1 text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
            </div>{/* input-amount */}
          </div>}

          <div className="job-postings grid grid-flow-col justify-start items-center gap-3 mx-auto w-full mt-6 mb-4">
            <input id="jobs_checkbox" type="checkbox" value={jobs?"checked":""} className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2" onChange={()=>setJobs(!jobs)}/>
            <label htmlFor="jobs_checkbox" className="checkbox text-base">Job Positions</label>
          </div>{/* job-postings */}

          {jobs? <div className="jobs w-full">
            <div className="input-job relative grid items-center px-2 py-2 shadow-inner ring-1 ring-gray-900/5 mx-auto rounded-lg mb-2">
              <label htmlFor="job_post" className="job-post text-sm font-semibold px-2">What do you bring to the table?</label>
              <textarea name="job_post" id="job_post" placeholder="What is your dream job?
How many hours/week can you dedicate? 
How long do you plan to commit?" className="py-1 textsm bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 h-48"></textarea>
            </div>{/* input job */}
          </div>:""}{/* jobs */}

         

         {/* offer-amt */}
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

      </form>{/*form-fields*/}
    
     <div className="validations w-full sm:w-[600px] mx-auto">
       { submissionStatus == "fail"?
        <div className="error pt-1 mt-2 mx-6 text-center">
          <p className="text-sm ring-1 ring-red-400 rounded-lg bg-red-100 px-4 py-1 cursor-default">There was an error submitting the form. Please review and try again.</p>
        </div>//fail
: submissionStatus == "success"?
        <div className="success pt-1 mt-2 mx-6 text-center">
          <p className="text-sm ring-1 ring-green-400 rounded-lg bg-green-100 px-4 py-1 cursor-default">Thank you! Your submission has been sent to the team..</p>
        </div> //sucess
         
         : submissionStatus =="waiting"?

         <div className="success pt-1 mt-2 mx-6 text-center">
          <p className="text-sm ring-1 ring-blue-400 rounded-lg bg-blue-100 px-4 py-1 cursor-default">Waiting..</p>
        </div> //waiting
         
         :""}
      </div>
     
      {/*validations*/}
    </div>{/*form-container*/}
  </div>
)
}

export default Signup;