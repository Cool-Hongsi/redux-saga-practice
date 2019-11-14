import { all } from 'redux-saga/effects';
import { todoSagaWatcher } from './todo/saga';
import { githubSagaWatcher } from './github/saga';

export default function* rootSaga(){
    yield all( [todoSagaWatcher(), githubSagaWatcher()] );
};