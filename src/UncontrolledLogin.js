import React, { createRef } from "react";

export default class UncontrolledLogin extends React.Component {
    _username = createRef ();
    _password = createRef ();
    _checkbox = createRef ();

    inputHandler = () => {
        console.log (
            {
                username: this._username.current.value,
                password: this._password.current.value,
                remember: this._checkbox.current.checked
            }
        )
    }

    inputReset = () => {
        this._username.current.value = '';
        this._password.current.value = '';
        this._checkbox.current.checked = false;
    }


    render () {
        return (
            <>
                <h3>UncontrolledLogin.js form:</h3>
                <input ref={this._username} autoFocus /> 
                <input ref={this._password} type="password" />   
                <input ref={this._checkbox} type="checkbox"  />
                <button onClick={this.inputHandler}>Login</button>
                <button onClick={this.inputReset}>Reset</button>
            </>
        )
    }
}