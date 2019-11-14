import { ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, REMOVE_TODO, REMOVE_TODO_SUCCESS, REMOVE_TODO_FAILURE } from './action';
import { put, takeLatest } from 'redux-saga/effects';

export function* todoAddFunc(action){
    try {
        yield put( { type : ADD_TODO_SUCCESS, id : action.id, data : action.data, completed : action.completed } );
    } catch (err) {
        yield put( { type : ADD_TODO_FAILURE, errMsg : err } );
    }
};

export function* todoRemoveFunc(action){
    try {
        yield put( { type : REMOVE_TODO_SUCCESS, id : action.id } );
    } catch (err) {
        yield put( { type : REMOVE_TODO_FAILURE, errMsg : err } );
    }
};

export function* todoSagaWatcher(){
    yield takeLatest(ADD_TODO, todoAddFunc);
    yield takeLatest(REMOVE_TODO, todoRemoveFunc);
};