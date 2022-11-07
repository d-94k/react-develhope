import React from "react";

export default class Counter extends React.Component {
    constructor (props) {
        super (props);
        this.state = { counter: 0 };
        setInterval (() => {
            this.setState (prevState => ({ counter: prevState.counter + 1}))
        }, 1000)
    }

    render () {
        return <h1>Counter: {this.state.counter}</h1>
    }
}