import { useEffect, useRef } from "react";
import "../output.css";

function Textarea() {
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
  
      textarea.style.height = "auto";
 
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    document.title = "xBot";
    adjustHeight();
  }, []); 

  return (
    <textarea
      ref={textareaRef}
      className="bg-transparent border border-white rounded-lg resize-none outline-none text-white text-sm w-full"
      onInput={adjustHeight} 
      placeholder="Type something..."
    />
  );
}

export default Textarea;
