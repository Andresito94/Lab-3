import { useState } from "react";
import colors from "../src/data/data";

export default function Squidward(){
    const [squareStuff, setColor] = useState(colors[Math.floor(Math.random() * 20)]); 
    const Color = colors[Math.floor(Math.random()*20)];// [Math.floor(Math.random() * colors.length)]
    const changeColor = () => { // I tryed to make it directly, but I had to make a function appart to do the stuff
        const newColor = colors[Math.floor(Math.random() * 20)]; 
        setColor(newColor);};
    return(
        <div>
             {/* // I expect to only return a button, 
        but you never know if it is going to send an 
        error instead */}
    <button 
    style={{
        width: '50px',
        height: '50px',
        backgroundColor: squareStuff,
        borderRadius: '0'}} /* It is s squarstuff */
    onClick={() => 
        changeColor()}>  {/* On CLick do the function that I wrote earlier  */}
            </button>
            </div>
    )
}