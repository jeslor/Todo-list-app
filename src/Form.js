import React, { Component } from 'react';
import { v4 as uIDS } from "uuid";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.addHandler = this.addHandler.bind(this);
        this.addTodo = this.addTodo.bind(this)
    }

    addHandler(evt) {
        this.setState({ name: evt.target.value })
    }

    addTodo(evt) {
        evt.preventDefault();
        let newTodo = { ...this.state, id: uIDS(), isDone: false, showEdit: false }
        this.props.submitted(newTodo);
        this.setState({ name: '' })
    }


    render() {
        return (
            <div>
                <form className="form1" onSubmit={this.addTodo}>
                    <label htmlFor="addTodo">Add a todo</label>
                    <input
                        id="addTodo"
                        type="text"
                        value={this.state.name}
                        placeholder="new todo"
                        onChange={this.addHandler}
                    />
                    <button>Add</button>
                </form>

            </div>
        )
    }
}
