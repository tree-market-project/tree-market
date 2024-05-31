"use client"
import { ReactNode } from "react"

type ModalProps = {
    children:ReactNode;
    id:string;
    setShow:any;
}

export const Modal: React.FC<ModalProps> = ({children,id,setShow})=>{
    return(
        <dialog open id={id} className="z-50 modal w-full h-full overflow-y-scroll bg-gray-300 bg-opacity-50 flex items-center">
            <div className="modal-box relative pb-4 max-h-screen overflow-y-scroll bg-gray-100 rounded-lg ring-1 ring-gray-300 w-11/12 mx-auto max-w-screen-sm shadow-md shadow-gray-400">
         <div className="modal-action">
        <div>
          <button onClick={()=>setShow(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
      </div>
      {children}
      </div>
        </dialog>
    )
}