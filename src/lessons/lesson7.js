import React from "react";
// Side effects: Any code that affects an outside system
// Examples of side effects: Local storage, API, websockets, two states to keep in sync
// Not side effects: Maintain state, keeping the UI in sync with the data

// useEffect runs when: First render and every re-render of the component
// It will not run when: The values of the dependencies in the array stay the same between renders

// Dependencies array is:
// The second parameter to the useEffect function
// A way for React to know whether it should re-run the effect function

export default function Lesson7() {
    const [starWarsdata, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    React.useEffect(function() {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`).then(res => res.json()).then(data => setStarWarsData(data))
    }, [count])
    return (
        <div>
            <p>The count is  {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next character</button>
            <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
        </div>
    )
}