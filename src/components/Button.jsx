import "../output.css";
function Button({text,className= "", ...prop}){
    return (
        <button className={`bg-white px-6 py-3 font-sans text-xl rounded-2xl 
        hover:btn-hover ${className}`}{...prop} >{text}</button>
    );
}
export default Button;