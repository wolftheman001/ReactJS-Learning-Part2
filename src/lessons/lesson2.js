import React from "react";

export default function Lesson2() {
    // function getAnswer(isGoingOut) {
    //     return isGoingOut ? "Yes" : "No"
    // }

    // const isGoingOut = true
    
    const [isGoingOut, setGoingOut] = React.useState(Boolean)
    function changeState() {
        setGoingOut(current => !current) 
    }
    console.log(isGoingOut)
    return(
        <div className="container text-center p-5 bg-dark">
            <h1 className="text-white">Do I feel like going out tonight?</h1>
            <div className="rounded bg-white" onClick={changeState}>
                {/* <h1>{getAnswer(true)}</h1> */}
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}