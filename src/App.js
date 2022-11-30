import React from "react";
import FilteredList from "./FilteredList";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { UncontrolledCarDetails } from "./UncontrolledCarDetails";
// import ClickCounter from "./ClickCounter";
// import ClickTracker from "./ClickTracker";
// import Counter from "./Counter";
// import Hello from './Hello';
// import InteractiveWelcome from "./InteractiveWelcome";
// import Welcome from "./Welcome";
// import Login from "./Login";
// import UncontrolledLogin from "./UncontrolledLogin";
// import TodoList from "./TodoList";
// import Container from "./Container";
// import DisplayLanguage from "./DisplayLanguage";
// import Sum from "./Sum";
// import { GithubUser } from "./GithubUser";
// import GithubUserList  from "./GithubUserList";
// import { HookCounter } from "./HookCounter";
// import { HookForm } from "./HookForm";
// import { HookGithubUser } from "./HookGithubUser";

export default class App extends React.Component {
    render () {
        return (
            <div>
              {/* <Hello />
              <GithubUser username="d-94k" />
              <GithubUserList />
              <Welcome name="Simon" age={100} />
              <Counter initVal={0} counterAmount={1} intervalAmount={1000} />
              <ClickCounter onCounterChange={(item) => {console.log("Counter is at ", item)}} />
              <ClickTracker />
              <InteractiveWelcome />
              <Login />
              <UncontrolledLogin />
              <TodoList render={(arr, removeFunction) => {
                return (
                    arr.map((item, index) => <li key={index}>{item}<button onClick={() => {removeFunction(item)}}>Remove todo</button></li>)
                )
                }} />
              <Container title={<h3>This is a title</h3>}>
                <p>This is a paragraph</p>
              </Container>
              <DisplayLanguage />
              <Sum /> */}
              {/* <HookCounter /> */}
              {/* <HookForm /> */}
              {/* <HookGithubUser username="d-94k" /> */}
              {/* <UncontrolledCarDetails /> */}
              {/* <DisplayLanguage /> */}
              {/* <HookCounter /> */}
              <FilteredList />
            </div>
        )
    }
}