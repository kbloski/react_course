import { useReducer } from "react"

type InitialState = {
    message: string,
    counter: number
}

type Action = {
    type: string,
    payload?: any
}

const initialState : InitialState = {
    message: '',
    counter: 0
}

function reducer(state: InitialState, action: Action){
    switch (action.type){
        case 'increment':
            return {
                ...state,
                message: 'Increment',
                counter: ++state.counter
            }
        case 'decrement':
            return {
                ...state,
                message: 'Decrement',
                counter: --state.counter
            }
        default:
            throw new Error("Unknown action.")

    }
}

export default function ReducerPage(){
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>
                useReducer to hook w React, który działa podobnie do useState,
                ale jest bardziej odpowiedni dla złożonych stanów i logiki
                aktualizacji. Jest inspirowany wzorcem Redux, ale działa
                lokalnie w komponencie.
            </p>
            <div>
                <button onClick={() => dispatch({ type: "increment" })}>
                    Increment
                </button>
                <button onClick={() => dispatch({ type: "decrement" })}>
                    Decrement
                </button>
            </div>
            <div>Counter {state.counter}</div>
            <div>Message {state.message}</div>
        </div>
    );

}