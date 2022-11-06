import React from "react";
import Age from "./Age";

export default class Welcome extends React.Component {
    render () {
        return (
            <>
                <p>Welcome, {this.props.name ? this.props.name : "guest"}!</p>
                {this.props.age ? <Age age={this.props.age} /> : 'Please, enter your age.'}
            </>
        )
    }
}