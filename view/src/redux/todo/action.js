/* Action Type Definition */
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';
export const REMOVE_TODO_FAILURE = 'REMOVE_TODO_FAILURE';

/* Action Function Definition */
let initialId = 0;

export const addTodo = (todoData) => {
    return { type : ADD_TODO, id : initialId++, data : todoData, completed : false };
};

export const removeTodo = (todoDataId) => {
    return { type : REMOVE_TODO, id : todoDataId };
};