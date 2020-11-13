import React, { Component } from 'react';
import "./Todo.css";
import Form2 from "./Form2";

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log("IN TODO CONSTRUCTOR");
    }

    componentDidUpdate(prevState, prevProps) {
        console.log(this.props.name);
        console.log(prevProps.name);
    }

    render() {

        return (
            <div className="Todowrapper">
                <div className="Todo">
                    <p style={this.props.linethrough ? { textDecoration: "line-through", color: "orange" } : null} id="p1" onClick={this.props.isdone}>{this.props.name} </p>
                    <p id="p2">
                        <i onClick={this.props.edit} className="fa fa-pencil"></i>
                        <i onClick={this.props.deletetodo} className=" fa fa-trash"></i>
                    </p>
                </div>
                <div className="EditForm">
                    {this.props.showing ? <Form2 id={this.props.id} val={this.props.name} edited={this.props.edited} /> : null}
                </div>
            </div>
        )
    }
}
