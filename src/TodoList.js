import React from "react";

export default class TodoList extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            items: [],
            text: ''
        }
    }

    handleChange = (event) => {
        this.setState ({
            text: event.target.value
        })
    }

    handleSubmit = () => {
        this.setState ({
            items: this.state.items.concat({text: this.state.text, id: Date.now()}),
            text: ''
        })
    }

    resetTodos = () => {
        this.setState ({
            items: [],
            text: ''
        })
    }

    render () {
        return (
            <>
                <h1>Todo list:</h1>
                <ul>{this.state.items.map(item => <li key={item.id}>{item.text}</li>)}</ul>
                <input onChange={this.handleChange} value={this.state.text} />
                <button onClick={this.handleSubmit}>Add Todo</button>
                <button onClick={this.resetTodos}>Reset Todos</button>
            </>
        )
    }
}