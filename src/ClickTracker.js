import React from "react";

export default class ClickTracker extends React.Component {
    state = { 
        str: ''
    }
    
    clickReveal = (event) => {
        this.setState({
            str: event.target.innerHTML
        });
    }

    render () {
        return (
            <>
                <h1>Which button was last clicked?</h1>
                <button onClick={this.clickReveal}>First Button</button>    
                <button onClick={this.clickReveal}>Second Button</button>
                <button onClick={this.clickReveal}>Third Button</button>
                <h1>The last button you clicked is... {this.state.str}</h1>
            </>
        )
    }
}