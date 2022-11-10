import React from "react";

export default class Login extends React.Component {
    constructor (props) {
        super (props);
        state = {
            username: '',
            password: '',
            remember: false
        }
    }
    render () {
        return (
            <>
                <input name="username" value={this.state.username} /> 
                <input type="password" name="password" value={this.state.password} />   
                <input type="checkbox" name="remember" value={this.state.remember} />  
            </>
        )
    }
}