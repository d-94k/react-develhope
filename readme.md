Q: Modify the Counter component so that the interval is initialized within the componentDidMount life cycle method instead of the constructor. Is the constructor still required?

A: This would work as well:

``` import React from "react";

export default class Counter extends React.Component {
    
    state = { counter: this.props.initVal }

    componentDidMount () {
        setInterval (() => {
            this.setState (prevState => ({ counter: prevState.counter + this.props.counterAmount }))
        }, this.props.intervalAmount)
    }

    render () {
        return <CounterDisplay counter={this.state.counter} />
    }
}

class CounterDisplay extends React.Component {
    render () {
        return <h1>Counter: {this.props.counter}</h1>
    }
}
```
