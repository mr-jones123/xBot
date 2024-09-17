import "../output.css";
function Button({text,className= "", ...prop}){
    return (
        <button className={`bg-white font-sans rounded-2xl px-4 py-2 ${className}`}{...prop} >{text}</button>
    );
}
export default Button;