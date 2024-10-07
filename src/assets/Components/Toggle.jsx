import { useState } from "react";

export default function Toggle(){
    const [isHappy, setIsHappy] = useState(true);
    const [btnText, setBtnText] = useState("Make me albine"); // I used a blck emoji instead.
    return(
    <div>
        <h1> {isHappy ? "☺" : "☻"}</h1>
   {/*      <p>{toString(isHappy)}</p> */}
{/*    This is how it was before:
            <button onClick={() => {
            setIsHappy(!isHappy)}}>Toggle</button> 
            Then we set the tristuff to define text and stuff*/}
        <button onClick={() => {
            setIsHappy(!isHappy);
            // It can be switched the name so it fit with the description, or...
            isHappy ? setBtnText("Make me black") : 
            setBtnText("Make me albine");}}> 
                {btnText}
                </button>
    </div>
    );
}