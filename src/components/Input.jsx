import '../output.css';

function Input({placeholder, className = "",...prop}){
    return(
        <input placeholder = {placeholder} className={`bg-transparent border ${className}`}
        {...prop}>

        </input>
    );
}

export default Input;