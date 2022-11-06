import React from "react";

export default class Welcome extends React.Component {
    render () {
        return (
            <>
                <p>Welcome, {this.props.name ? this.props.name : "guest"}!</p>
                <p>Your age is {this.props.age}</p>
            </>
        )
    }
}