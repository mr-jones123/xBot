import "../output.css";
import Button from "./Button.jsx";
import TextArea from "./Textarea.jsx";
import Input from "./Input.jsx";
import { useRef } from "react";
function Chat (){
    const inputRef = useRef(null);

    async function postMethod (e) {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/chat", {
                method : "POST",
                body :  JSON.stringify(
                    {
                    role: "user", 
                    content: inputRef.current.value
                    }
                ),
                headers: {
                    "Content-type" : "application/json"
                }
            })
            const responseJSON = await response.json();
            console.log(responseJSON.body.choices[0].message.content);
        } catch (error) {
            console.error(error);
        }
    }
    return(
       <section className="min-h-screen  px-10">
            <div className="min-h-screen flex flex-col items-center">   
                <div className="">
                
                </div>
                <div className="absolute bottom-0 ">
                    <form method = "POST" className="w-full" onSubmit={postMethod}>
                        <Input text="Input Something..." ref={inputRef}/>
                    </form>
                </div>
            </div>
       </section>
    );

}

export default Chat;