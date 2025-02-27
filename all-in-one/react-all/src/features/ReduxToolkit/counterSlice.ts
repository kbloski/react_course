import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


// createAsyncThunk
export const fetchCounter = createAsyncThunk(
    'counter/fetchCounter',
    async (_, { rejectWithValue }: { rejectWithValue: (value: any) => void }) => {
        try {
            const response = await fetch('https://api-error')

            if (!response.ok) {
                    throw new Error('Server error')
                }

            const data = await response.json()
            // Send data to reducer
            return {
                message: 'this is action.payload data',
                counter: 333,
                data,
            }
        } catch (error) {
            // Send error to reducer
            return rejectWithValue(error)
        }
    }
)
    

 
// Slice 
interface CounterState {
    status: string,
    error: string,
    counter: number,
}

const initialState : CounterState = {
    status: '',
    error: '',
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

    // CREATE ASYNC THUNK
    extraReducers: builder => {
        // Sending request
        builder.addCase( fetchCounter.pending, (state, action) => {
            state.status = 'loading'
        })

        // Success
        builder.addCase( fetchCounter.fulfilled, (state, action) => {
            state.status = 'success'
            if (!action.payload) return;
            state.counter = action.payload.counter
            
        })

        // Error
        builder.addCase( fetchCounter.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message || 'Problem with fetching counter data.'
        })
    }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

