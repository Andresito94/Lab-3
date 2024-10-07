
import { useState } from "react"; // The {} means it is not the main function.


export default function Counter(){
// variable that it is going to be in the state and a 
// function that can change the state
const[counter, setCounter] = useState(0); // If it start with 0 in this case
// but it can be places as anything that need to start with.

return(
    <div>
        <h1>{counter}</h1>
{/*     This is the version without filter.    
        <button onClick={() => 
            setCounter(counter - 1 )}>
                Decrease Juan</button> */}
        <button onClick={() => // We add an if statement to set a top to 10
            setCounter(counter > -10 ? counter - 1 : counter)}> {/* // Level Juan coding */}
                Decrease Juan</button>
        <button onClick={() => 
            setCounter(counter < 10 && counter + 1)}> {/* // Level 
            tree coding. It breaks after 10 as it is not defined 
            what to do after number 10, so use the other juan 
            for now*/}
                Increment Juan</button>
            <br />
            <button onClick={() => 
            setCounter(0)}>
                Rezet</button>
        
    </div>
)
/* It must not be used counter++ i in the return. 
Because the counter does not update until the component is refreshed

*/

/*      By using this method the problem is that it will not work as 
it will not refresh the web page. That it is the main function of react.
We can use Hooks, it is an improvement of the react system
so we an see changes in the same web page.     

let counter = 0;
    return(
        <div>
        <h1>{counter}</h1>
        <button onClick={() => counter++}>Plus Juan</button>
        </div>
    ); */
}
/*
function foo(){
    let counter = 0;
    return(counter++) // It is not outside the scope. So it does not work.
}*/