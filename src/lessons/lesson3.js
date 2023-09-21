import React from "react";

export default function Lesson3() {
    const [things, setThings] = React.useState(['Thing 1', 'Thing 2'])
    function addNew() {
        const newText = `Thing ${things.length + 1}`
        setThings(current => [...current, newText])
    }
    const render = things.map(ren => 
        <p key={ren} className="text-white mt-5">{ren}</p>
    )
    return(
        <div className="container text-center p-5 bg-success">
            <div>
                <button type="submit" onClick={addNew} className="rounded text-white w-50 display-4 bg-success border border-white">Add Item</button>
                {render}
            </div>
        </div>
    )
}