import React from "react";

export default class Counter extends React.Component {
    constructor (props) {
        super (props);
        this.state = { counter: 0 }

    }

    componentDidMount () {
        setInterval (() => {
            this.setState (prevState => ({ counter: prevState.counter + 0.5}))
        }, 1000)
    }

    render () {
        return <h1>Counter: {this.state.counter}</h1>
    }
}