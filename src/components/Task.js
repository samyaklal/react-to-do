import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <p className="toDoItem">{this.props.task}</p>
        );
    }
}

export default Task;