import React from "react";

export default function WinWidth() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    React.useEffect(function() {
        function watchWidth() {
            setWindowWidth(this.window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    return (
        <h1 className="mt-3 text-white">Window Width: {windowWidth}</h1>
    )
}