import React from "react";

export default function Lesson1() {
    function clickCheck() {
        console.log("Clicked")
    }
    function mouseHover() {
        alert("Hovered Image")
    }
    return (
        <div className="container">
            <img onMouseMove={mouseHover} src="images/night.gif" alt=""></img>
            <button onClick={clickCheck}>Click me</button>
        </div>
    )
}