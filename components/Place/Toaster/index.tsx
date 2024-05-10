"use client"

import { useEffect, useState,useRef,forwardRef, useImperativeHandle, MutableRefObject, RefObject } from "react";

interface ToastMessage {
  id: number;
  text: string;
}
export interface ToasterRef extends MutableRefObject<HTMLDivElement> {
  addMessage: (text: string) => void;
}

const Toaster  = forwardRef<ToasterRef,{}>((props,ref)=>{
  
  const [messages,setMessages] = useState<ToastMessage[]>([]);
  const [visible,setVisible] = useState(false)
 
  const toasterRef = useRef<HTMLDivElement>(document.createElement('div'))

  useEffect(()=>{
    if (messages.length >0){
      setVisible(true);
      const timer= setTimeout(()=>{
        removeMessage(messages[0].id);

      },3000);
      return ()=>clearTimeout(timer)
    }else {
      setVisible(false);
    }
  },[messages])

  const addMessage = (text:string)=>{
    const id = Math.floor(Math.random() * 10000);
    setMessages([...messages,{id,text}])
  };

  useImperativeHandle(ref,()=>({
    addMessage:addMessage,
    current:toasterRef.current,
  }))

  const removeMessage = (id:number) =>{
    setMessages(messages.filter((msg)=>msg.id!==id));
  }
return (
<div ref={toasterRef} className={`toaster-container ${visible ? 'show' : ''} sticky bottom-[133px] left-0 right-0 mx-4 grid gap-2 z-40`}>
  {messages.map((message)=>(
<div key={message.id} className="toaster flex justify-between gap-4 items-center w-full max-w-[480px] mx-auto px-4 py-4 bg-gray-800 text-white rounded-lg">
      <div className="px-2 text-sm font-bold">
        {message.text}
      </div>
      <div onClick={()=>removeMessage(message.id)} className="justify-self-end text-blue-200 text-sm font-medium px-4 py-2 cursor-pointer">
        Dismiss
      </div>
    </div>
  ))}
    
  </div>
  )})
Toaster.displayName = 'Toaster';
  export default Toaster;