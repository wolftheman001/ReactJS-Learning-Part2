import React from "react";

export default function Box(props) {
    console.log("True or false", props.on)
    const [status, setStatus] = React.useState(props.on)
    function toggleOnOff() {
        setStatus(prevStatus => !prevStatus)
    }
    const styles = {
        backgroundColor: props.on ? "#222222" : "#cccccc"
    }
    return (
        <div style={styles} className="dark-border ml-3" onClick={props.click}></div>
    )
}