import { GET_POST_GITHUB, GET_POST_GITHUB_SUCCESS, GET_POST_GITHUB_FAILURE } from './action';
import { put, takeLatest, call } from 'redux-saga/effects';
import { getPostAPI } from './async';

export function* githubGetPost(action){
    try {
        const response = yield call(getPostAPI, action.id);
        yield put( { type : GET_POST_GITHUB_SUCCESS, payload : response.data } );
    } catch (err) {
        yield put( { type : GET_POST_GITHUB_FAILURE, errMsg : err } );
    }
};

export function* githubSagaWatcher(){
    yield takeLatest(GET_POST_GITHUB, githubGetPost);
};