import React from "react";

export default function Count(props) {
    return (
        <div className="bg-light rounded-circle w-25 h-100">
            <h1>{props.number}</h1>
        </div>
    )
}