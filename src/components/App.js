import React, { Component } from 'react';
import Task from './Task'
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {toDoList: []};
    }
    
    componentDidMount() {
        fetch("toDoList.json").then(resp => {
            resp.json().then(data => {
                this.setState({toDoList: data.tasks});
            });
        });
    }
    
    render() {
        let toDoList = this.state.toDoList.map((item, index) => {
            return <Task key={index} task={item.task}></Task>;
        });
        
        return (
            <div className="App">
                <h1>To Do List</h1>
                <div className="toDoList">{toDoList}</div>
            </div>
        );
    }
}

export default App;
