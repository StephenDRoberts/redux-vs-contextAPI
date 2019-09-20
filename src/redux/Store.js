import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {itemReducer} from './modules/itemReducer.js';

const reducer = combineReducers({
    itemReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store;