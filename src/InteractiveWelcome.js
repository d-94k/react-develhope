import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { name: '' }
    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }
    render() { 
        return (
            <>
                <Welcome name={this.state.name} age={100}/>
                <p>You can change your name here: </p>
                <input type="text" onChange={this.handleChange} />
            </>
         );
    }
}
 
export default InteractiveWelcome;