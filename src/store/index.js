import {createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from './ducks/reducers';

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;