import React from "react";

export default class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        remember: false
      };
    }
  
    inputHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
  
      this.setState({
        [name]: value,
      });
    };
  
    onLogin = () => {
        console.log (this.state);
    }
  
    render() {
      return (
        <>
          <h3>Login.js Input:</h3>
          <input
            name="username"
            value={this.state.username}
            onChange={this.inputHandler}
            placeholder="username"
          />
          <input
            name="password"
            value={this.state.password}
            onChange={this.inputHandler}
            placeholder="password"
          />
          <input
            name="remember"
            type="checkbox"
            checked={this.state.remember}
            onChange={this.inputHandler}
          />
          <button onClick={this.onLogin} disabled={this.state.username !== "" && this.state.password !== "" ? false : true}>Submit</button>
        </>
      );
    }
  }