import React, { useEffect, useState } from "react";

export default function ClickCounter ({onCounterChange}) {

    const [counter, setCounter] = useState (0);
    
    useEffect (() => {onCounterChange(counter)}, [counter]);


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