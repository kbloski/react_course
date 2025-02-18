import { useDispatch, useSelector, useStore } from "react-redux"
import { decrement, increment } from "./counterSlice";

function ContentReduxStore(){
    // const store = useStore() // get store object

    const store = useSelector((state: { counter: { counter: number} }) => state.counter)
    const dispatch = useDispatch();

    function handleIncrement(){
        // console.log( increment())
        dispatch({ type: "counter/increment", payload: undefined });
    }
    function handleDecrement(){
        dispatch( decrement())
    }

    return <>
        <div>Counter: {store.counter}</div>
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Increment</button>
        </div>
    </>
}


export default ContentReduxStore;