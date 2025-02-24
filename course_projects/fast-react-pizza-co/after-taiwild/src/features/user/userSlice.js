import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: 'Kamil'
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName( state, actions) {
            state.username = actions.payload;
        }
    }
})

export const { updateName } = userSlice.actions;

export default userSlice.reducer;