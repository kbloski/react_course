import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


// createAsyncThunk
export const fetchCounter = createAsyncThunk(
    'counter/fetchCounter',
    async (_, {rejectWithValue}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        return response.json()
    }
)

  
  
 

 
 
 
// Slice 
interface CounterState {
    counter: number
}

const initialState : CounterState = {
    counter: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
        state.counter += 1
        },
        decrement: (state) => {
        state.counter -= 1
        },
    },
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

function async(_: any, arg1: {}): import("@reduxjs/toolkit").AsyncThunkPayloadCreator<unknown, void, { state?: unknown; dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>; extra?: unknown; rejectValue?: unknown; serializedErrorType?: unknown; pendingMeta?: unknown; fulfilledMeta?: unknown; rejectedMeta?: unknown }> {
    throw new Error("Function not implemented.")
}
