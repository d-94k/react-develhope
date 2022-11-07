import React from "react";
import Counter from "./Counter";
import Hello from './Hello';
import Welcome from "./Welcome";

export default class App extends React.Component {
    render () {
        return (
            <div>
              <Hello />
              <Welcome name="Simon" age={10} />
              <Counter initVal={10} counterAmount={100} intervalAmount={300} />
            </div>
        )
    }
}