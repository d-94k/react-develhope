import React from "react";

export default class Welcome extends React.Component {
    render () {
        return <p>Welcome, {this.props.name}!</p>
    }
}

Welcome.defaultProps = {
    name: 'Unregistered user'
}