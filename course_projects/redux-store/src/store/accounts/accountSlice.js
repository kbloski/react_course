import { createSlice } from "@reduxjs/toolkit";
import reducer from "../customers/customerSlice";

const initialState = {
    balance: 112,
    loan: 0,
    loanPurpose: "",
};

const accountSLice = createSlice({
    name: "account",
    initialState: initialState,
    reducers: {
        deposit(state, actions){
            state.balance +=actions.payload
            // return { ...state, balance: state.balance + action.payload };
        },
        withdraw( state, actions){
            state.balance -= actions.payload
        },
        requestLoan(state, actions){
            // if (state.loan > 0) return; 
            console.log( actions.payload)
            state.loan = actions.payload.loan,
            state.loanPurpose = actions.payload.loanPurpose
        },
        payLoan(state, actions){
            console.log( state.loan)
            if (!state.loan) return;
            state.balance -= state.loan
            state.loan = 0;
            state.loanPurpose = ''
        },
        deposit(amount , currency){}
    }
})
export const {deposit,withdraw,requestLoan,payLoan } = accountSLice.actions;

export default accountSLice.reducer;

