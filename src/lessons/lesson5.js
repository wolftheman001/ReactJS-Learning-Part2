import React from "react";

export default function Lesson5() {
    const [messages, setMessages] = React.useState(["a", "b"])
    return (
        <div>
            {/* {messages.length <= 0 && <h1>You're all caught up!'</h1>} */}
            {messages.length === 0 ? <h1>You're all caught up!</h1> : <h1>You have {messages.length} unread {messages.length === 1 ? "message" : "messages"}</h1>}
        </div>
    )
}