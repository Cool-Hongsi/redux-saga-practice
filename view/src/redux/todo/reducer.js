import { ADD_TODO_SUCCESS, ADD_TODO_FAILURE, REMOVE_TODO_SUCCESS, REMOVE_TODO_FAILURE } from './action';
import produce from 'immer';

export default function todoReducer(state = [], action){
    switch(action.type){
        case ADD_TODO_SUCCESS:
            return produce(state, draftState => {
                draftState.push({
                    id : action.id,
                    data : action.data,
                    completed : action.completed
                });
            });
        case ADD_TODO_FAILURE:
            console.log(action.errMsg);
            return state;
        case REMOVE_TODO_SUCCESS:
            return produce(state, draftState => {
                draftState[action.id].completed = !draftState[action.id].completed;
            });
        case REMOVE_TODO_FAILURE:
            console.log(action.errMsg);
            return state;
        default:
            return state;
    }
};