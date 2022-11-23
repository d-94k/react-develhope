import { useEffect, useState } from "react";

export default function Counter (props) {

    const [counter, setCounter] = useState (props.initVal);

    useEffect (() => {setInterval(() => {
        setCounter ((counter) => {return counter + props.counterAmount})
    }, props.intervalAmount)}, [counter])

    return <h1>Counter stands at: {counter}</h1>
}