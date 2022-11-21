import React from "react";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import Hello from './Hello';
import InteractiveWelcome from "./InteractiveWelcome";
import Welcome from "./Welcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";
import TodoList from "./TodoList";
import Container from "./Container";

export default class App extends React.Component {
    render () {
        return (
            <div>
              <Hello />
              <Welcome name="Simon" age={100} />
              <Counter initVal={10} counterAmount={100} intervalAmount={300} />
              <ClickCounter />
              <ClickTracker />
              <InteractiveWelcome />
              <Login />
              <UncontrolledLogin />
              <TodoList />
              <Container>
                <p>This is a paragraph</p>
              </Container>
            </div>
        )
    }
}