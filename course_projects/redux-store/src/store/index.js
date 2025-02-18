// import { thunk} from 'redux-thunk'
// import { combineReducers, createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk) )
// );
// const rootReducer = combineReducers({
//     account: AccountReducer,
//     customer: CustomerReducer
// })

// Current usage redux store
import AccountReducer from "./accounts/accountSlice";
import CustomerReducer from "./customers/customerSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        account: AccountReducer,
        customer: CustomerReducer,
    },
});

// Do dispatch można przekazać
// store.dispatch(
//      Obiekt (tylko działania synchoroniczne)
//      { type: 'account/deposit', payload: ...}
//
//      Funckje dzięki temu można wykonywać zadania asynchroniczne
//      (dispatch, getState) => {
//             setTimeout(() => {
//                 dispatch({ type: "account/withdraw", payload: 100 })
//                 // dispatch({ type: "account/deposit", payload: 10 });
//             }, 1);
//         }

// );

export default store;
