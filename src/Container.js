import React from "react";

export default class Container extends React.Component {
    render () {
        return (
            <div style={{backgroundColor: 'white', border: '2px solid red'}}>
                <div>{this.props.title}</div>
                {this.props.children}
            </div>
        )
    }
} 