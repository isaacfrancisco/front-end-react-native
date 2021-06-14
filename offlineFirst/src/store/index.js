import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  offlineMiddleware,
  suspendSaga,
  consumeActionMiddleware,
} from 'redux-offline-queue';
import rootReducer from './ducks';
import rootSaga from './sagas';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(offlineMiddleware());
middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());

const createAppropriateStore = createStore;

const store = createAppropriateStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;
