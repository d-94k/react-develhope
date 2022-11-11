import React from "react";

export default class Login extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            username: '',
            password: '',
            remember: false
        }
    }

    inputHandler = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState ({
            [name] : value
        })
    }

    onLogin = () => {
        /* ... */;
    }

    render () {
        return (
            <>
                <h3>Login.js form:</h3>
                <input name="username" value={this.state.username} onChange={this.inputHandler} /> 
                <input name="password" type="password" value={this.state.password} onChange={this.inputHandler} />   
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.inputHandler} />
                <button disabled={this.state.username !== '' && this.state.password !== '' ? false : true} onClick={this.onLogin}>Login</button> 
            </>
        )
    }
}