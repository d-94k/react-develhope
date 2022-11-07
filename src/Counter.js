import React from "react";

export default class Counter extends React.Component {
    constructor (props) {
        super (props);
        this.state = { counter: this.props.initVal }

    }

    componentDidMount () {
        setInterval (() => {
            this.setState (prevState => ({ counter: prevState.counter + this.props.counterAmount }))
        }, this.props.intervalAmount)
    }

    render () {
        return <h1>Counter: {this.state.counter}</h1>
    }
}