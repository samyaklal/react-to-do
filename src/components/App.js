import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.dispatch({type: "GET_TO_DO_LIST"});
    }
    
    render() {
        console.log(this.props);
        let toDoList = this.props.toDoList.map((item, index) => {
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

const convertStateToProps = (state) => {
    return {toDoList: state.toDoList};
}

const convertDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(convertDispatchToProps, convertStateToProps)(App);
