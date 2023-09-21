import React from "react";

export default function Star(props) {
    console.log(props.isFilled)
    let starIcon = props.isFilled ? "fa-solid fa-star fa-beat display-4" : "fa-regular fa-star fa-beat display-4"
    return (
        <i className={starIcon} onClick={props.handleClick}></i>
    )
}