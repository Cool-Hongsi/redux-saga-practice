import { combineReducers } from 'redux';
import todoReducer from './todo/reducer';
import githubReducer from './github/reducer';

export default combineReducers({
    todoReducer,
    githubReducer,
    // Other Reducers...
});