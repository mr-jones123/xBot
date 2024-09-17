import Button from "./Button.jsx";
   import Input from "./Input.jsx";
   import "../output.css";
   import { useEffect } from "react";

   function Signup() {
     useEffect(() => {
       document.title = "Login";
     }, []);
     return (
        <section className="min-h-screen flex justify-center items-center px-8">

          <div className="bg-white flex flex-col items-center rounded-lg px-3 py-4">
            <h1 className="font-mono font-black text-3xl mb-6">Log In</h1>
            <form className="flex flex-col items-center gap-4">
              <Input placeholder="Email " className="border-licorice rounded-lg placeholder-gray-600
              placeholder-opacity-75 px-3 focus:input-focus-black-border"
               type = "email" />
              <Input placeholder="Password "className="border-licorice rounded-lg placeholder-gray-600
              placeholder-opacity-75 px-3 focus:input-focus-black-border" 
              type = "password"/>
              <Button text = "Login" className="border border-licorice px-3 py-2 hover:btn-turnToBlack-hover"/>
            </form>
          </div>
        
        </section>
     ); 
   }

   export default Signup;
   