import { thunk} from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import AccountReducer from './accounts/accountSlice';
import CustomerReducer from "./customers/customerSlice"

import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    account: AccountReducer,
    customer: CustomerReducer
})

const store = createStore( 
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk) )
);





export default store;
