import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component{
    constructor(props){
        super(props);

        this.state = {
            todoInput : ''
        };

        this.setTodo = this.setTodo.bind(this);
    }

    setTodo = (e) => {
        this.setState({
            todoInput : e.target.value
        })
    };

    render(){

        const { todoList, onSelectedAdd, onSelectedRemove } = this.props;

        return(
            <div>
                <h3>TODO</h3>
                <input type="text" placeholder="Todo Data" onChange={this.setTodo} />
                <button onClick={() => onSelectedAdd(this.state.todoInput)}>Send</button>
                <br/>
                {todoList.map((el, index) => {
                    return(
                        <div key={index} onClick={() => onSelectedRemove(el.id)} style={{textDecoration : el.completed ? "line-through" : "none"}}>
                            {el.id} | {el.data}
                        </div>
                    )
                })}
            </div>
        )

    }
};

Todo.propTypes = {
    todoList : PropTypes.array,
    onSelectedAdd : PropTypes.func,
    onSelectedRemove : PropTypes.func
};