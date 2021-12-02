import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./reducers";
import rootWatcher from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootWatcher);
