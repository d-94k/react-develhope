import { useEffect, useState } from "react";

export default function Counter ({initVal = 0, counterAmount = 10, intervalAmount = 1000}) {

    const [counter, setCounter] = useState (initVal);

    useEffect (() => {setInterval(() => {
        setCounter ((counter) => {return counter + counterAmount})
    }, intervalAmount)}, [counter, initVal, counterAmount, intervalAmount])

    return <h1>Counter stands at: {counter}</h1>
}