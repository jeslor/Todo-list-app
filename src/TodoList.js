import React, { Component } from 'react';
import { v4 as uIDS } from "uuid";
import Todo from './Todo';
import Form from "./Form";
import "./TodoList.css"

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.submitTodo = this.submitTodo.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.isDoneHandler = this.isDoneHandler.bind(this);
        this.showEditTodo = this.showEditTodo.bind(this);
        this.editTodo = this.editTodo.bind(this)

        console.log("IN CONSTRUCTOR");
    }

    submitTodo(todo) {

        this.setState({ ...this.state, todos: [...this.state.todos, todo] })
    }

    deleteHandler(id) {
        this.setState({ todos: this.state.todos.filter(item => item.id !== id) })
    }

    isDoneHandler(id) {
        let clickedTodo = this.state.todos.findIndex(item => item.id === id);
        let updatedtodos = [...this.state.todos];
        updatedtodos[clickedTodo].isDone = !updatedtodos[clickedTodo].isDone
        this.setState({ todos: updatedtodos })
    }

    showEditTodo(id) {
        let clickedTodo = this.state.todos.findIndex(item => item.id === id);
        let updatedtodos = [...this.state.todos];
        updatedtodos[clickedTodo].showEdit = !updatedtodos[clickedTodo].showEdit
        this.setState({ todos: updatedtodos })
    }

    editTodo(id, newName) {
        // let editedTodo = this.state.todos.findIndex(item => item.id === id);
        // let editedTodos = [...this.state.todos];
        // editedTodos[editedTodo].name = newName;
        // editedTodos[editedTodo].showEdit = false;
        // this.setState({ todos: editedTodos })
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, name: newName, showEdit: false }
            } else {
                return todo
            }
        })
        this.setState({ todos: updatedTodos })
    }

    componentDidMount() {
        console.log("IN COMPONENT DIDI MOUNT");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.todos);
        console.log(this.state.todos);
        console.log("IN COMPONENT DID UPDATE TODO LIST");
    }

    render() {
        console.log("IN THE RENDER METHOD");
        return (
            <div className="TodoList">
                <h1>My Todos : <span style={{ color: "purple" }}>{new Date().toDateString()}</span></h1>
                {this.state.todos.map(item => <Todo
                    id={item.id}
                    name={item.name}
                    key={item.id}
                    deletetodo={() => this.deleteHandler(item.id)}
                    isdone={() => this.isDoneHandler(item.id)}
                    linethrough={item.isDone}
                    edit={() => this.showEditTodo(item.id)}
                    showing={item.showEdit}
                    edited={this.editTodo}
                />)
                }
                <Form submitted={this.submitTodo} />
            </div>
        )
    }
}
