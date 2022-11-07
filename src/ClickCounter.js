import React from "react";

export default class ClickCounter extends React.Component {
    constructor (props) {
        super (props);
        this.state = { counter: 0 }
    }

    handleClick = () => {
        this.setState(prevState => ({ counter: prevState.counter+1 }))
    }

    render () {
        return (
            <>
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.handleClick}>Click to increment</button>
            </>
        )
    }
}