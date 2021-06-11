import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSaga from './sagas';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

function createAppropriateStore() {
  if (__DEV__) {
    console.tron.createStore;
  } else {
    createStore;
  }
}

const store = createAppropriateStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;
