import React from "react";
import Age from "./Age";

export default class Welcome extends React.Component {
    render () {
        return (
            <>
                <p>Welcome, {this.props.name ? this.props.name : "guest"}!</p>
                {this.props.age > 18 ? <Age age={this.props.age} /> : 'Sorry, you must be over 18.'}
            </>
        )
    }
}