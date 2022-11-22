import React, { useState } from "react";

export default function ClickCounter () {

    const [counter, setCounter] = useState (0);

    function incrementCounter () {
        setCounter (counter => counter +1);
    }

    return (
        <>
            <h1>Count: {counter}</h1>
            <button onClick={incrementCounter}>Click to increment!</button>
        </>
    )
}