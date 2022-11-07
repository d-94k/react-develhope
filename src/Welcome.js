import React from "react";
import Age from "./Age";

export default class Welcome extends React.Component {
    render () {
        return (
            <>
                <p>Welcome, {this.props.name ? this.props.name : "guest"}!</p>
                {this.props.age > 18 && this.props.age < 65 && this.props.name == 'John' ? <Age age={this.props.age} /> : 'Please be between 18 and 65, and be John'}
            </>
        )
    }
}