import React from "react";

export default function Nav(props) {
    return (
        <div className="navbar">
            <div className="container d-flex p-4 justify-content-between text-white">
                <h2>Meme Generator</h2>
                <h5>React Learning - Project 3</h5>
                <div className="d-flex">
                    <h5>Light</h5>
                    <div onClick={props.toggleDark}>
                        {props.dark ? <i class="fa-solid fa-toggle-on switch-icon ml-2 mr-2"></i> : <i class="fa-solid fa-toggle-on switch-icon fa-rotate-180 ml-2 mr-2"></i>}
                    </div>
                <h5>Dark</h5>
                </div>
            </div>
        </div>
    )
}