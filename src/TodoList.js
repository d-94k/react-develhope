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
            items: [...this.state.items, this.state.text]
        })
    }

    resetTodos = () => {
        this.setState ({
            items: [],
            text: ''
        })
    }

    removeTodo = (el) => {
        this.setState ({
            items: this.state.items.filter (item => item !== el)
        })
    }
    render () {
        return (
            <>
                <h1>Todo list:</h1>
                {this.props.render(this.state.items, this.removeTodo)}
                <input onChange={this.handleChange} value={this.state.text} />
                <button onClick={this.handleSubmit}>Add Todo</button>
                <button onClick={this.resetTodos}>Reset Todos</button>
            </>
        )
    }
}
