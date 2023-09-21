import React from "react";
import Count from "./count";
 export default function AppState() {
    // const [isImportant, setIsImportant] = React.useState("Yes")
    // function handleClick() {
    //     setIsImportant("No") 
    //     console.log("Clicked", isImportant)
    // }
    const [number, setNumber] = React.useState(0)

    /* If you ever need the old value of state to help you determine the new value of state, you should pass a callback function to your state setter function instead of using state directly. This callback function will receive the old value of state as its parameter, which you can then use it to determine your new value of state. */
    function addNumber() {
        setNumber(prevCount => prevCount + 1)
    }
    function subNumber() {
        setNumber(prevCount => prevCount - 1)
    }
    return(
        // <div className="text-center bg-dark p-5">
        //     <h1 className="p-5 text-white">Is state important to know?</h1>
        //     <div className="rounded bg-white" onClick={handleClick}>
        //         <h1>{isImportant}</h1>
        //     </div>
        // </div>
        <div className="container text-center p-5 d-flex bg-dark">
            <button className="rounded bg-secondary border-0 w-50 text-white" onClick={subNumber}>-</button>
            <Count number={number}/>
            <button className="rounded bg-secondary border-0 w-50 text-white" onClick={addNumber}>+</button>
        </div>
    )
 }