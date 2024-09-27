import "../output.css";
import ChatContainer from "./ChatContainer.jsx";
import Input from "./Input.jsx";
import { useRef, useEffect, useState } from "react";
function Chat (){
    const inputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    useEffect(()=>{
        document.title = "xBot Chat"
    },[])

    async function postMethod (e) {
        e.preventDefault();
        try {
            setLoading(true);
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
            setResponseMessage(responseJSON.body.choices[0].message.content);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }
    return(
       <section className="min-h-screen overflow-auto px-10">
            <div className="h-screen flex flex-col gap-3 items-center">   
                <ChatContainer 
                    userInput={inputRef.current ? inputRef.current.value : ""}
                    AIResponse={responseMessage}
                />

                <div className="fixed bottom-0 flex-shrink-0 bg-licorice pb-4">
                    <form method = "POST" className="w-full" onSubmit={postMethod}>
                        <Input text="Input Something..." ref={inputRef}/>
                    </form>
                    </div>
                </div>
       </section>
    );

}

export default Chat;