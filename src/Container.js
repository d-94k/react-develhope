import React from "react";

export default class Container extends React.Component {
    render () {
        return (
            <div style={{backgroundColor: 'white', border: '2px solid red'}}>
                {this.props.children}
            </div>
        )
    }
} 