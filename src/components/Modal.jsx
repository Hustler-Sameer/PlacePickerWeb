import { useRef, useEffect} from "react";
import { createPortal } from "react-dom";

 function Modal({open ,children }) {
  const dialog = useRef();

  // here the value of open is changed to true or false again and again 

  // useEffect(() => {
  //   if(open === true){
  //     console.log('in open')
  //     dialog.current.showModal();
  //   }
  //   else{
  //     dialog.current.close()
  //   }

  // },[open]);

  useEffect(() => {
    if(open){
      dialog.current.showModal();
  
    }else{
      dialog.current.close(); 
    }


    
  } , [open])
  
  
  
  return createPortal(
    <dialog className="modal" ref={dialog} /*open={open}*/>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
} 

export default Modal;
