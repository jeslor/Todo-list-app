import React, { Component } from 'react'

export default class Form2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.val
        }
        this.editTodo = this.editTodo.bind(this);
        this.edited = this.edited.bind(this);
    }

    editTodo(evt) {
        this.setState({ name: evt.target.value })
    }



    edited(evt) {
        evt.preventDefault();
        this.props.edited(this.props.id, this.state.name)
    }



    render() {

        return (
            <div>
                <form className="form2" onSubmit={this.edited}>
                    <input onChange={this.editTodo} type="text" placeholder="edit todo" value={this.state.name} />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}
