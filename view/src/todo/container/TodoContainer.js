import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../component/Todo';
import { addTodo, removeTodo } from '../../redux/todo/action';
import PropTypes from 'prop-types';

class TodoContainer extends Component{
    shouldComponentUpdate = (nextProps, nextState) => {
        const { todoList } = this.props;

        // Call render()
        if(todoList !== nextProps.todoList){
            return true;
        }

        // NOT Call render()
        else{
            return false;
        }
    };

    onSelectedAdd = (todoData) => {
        const { addTodo } = this.props;
        addTodo(todoData);
    };

    onSelectedRemove = (todoDataId) => {
        const { removeTodo } = this.props;
        removeTodo(todoDataId);
    };

    render(){

        const { todoList } = this.props;

        return(
            <Todo
                todoList={todoList}
                onSelectedAdd={this.onSelectedAdd}
                onSelectedRemove={this.onSelectedRemove}
            />
        )

    }
};

const mapStateToProps = (state) => {
    return {
       todoList : state.todoReducer 
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (todoData) => { dispatch(addTodo(todoData)) },
        removeTodo : (todoDataId) => { dispatch(removeTodo(todoDataId)) }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);

TodoContainer.propTypes = {
    todoList : PropTypes.array,
    addTodo : PropTypes.func,
    removeTodo : PropTypes.func
};