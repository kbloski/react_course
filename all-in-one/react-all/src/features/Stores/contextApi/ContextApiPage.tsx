import { StoreProvider } from "./contextStore"

export default function ContextApiPage(){

    return <StoreProvider>
        <div>
            <h2>Context api in use</h2>
            <Content />
        </div>
    </StoreProvider>
}

import { usePoints } from "./contextStore";


// content component
function Content() {
    const { status, points, dispatch } = usePoints();

    function handleResetPoints() {
        dispatch({ type: "setPoints", payload: 0 });
    }

    function handleAdd() {
        dispatch({ type: "addPoints", payload: 10 });
    }

    function handleRemove() {
        dispatch({ type: "removePoints", payload: 10 });
    }

    return (
        <div>
            <div>Status: {status}</div>
            <div>Points: {points}</div>

            <div>
                <button onClick={handleResetPoints}>Reset points</button>
                <button onClick={handleAdd}>Add points</button>
                <button onClick={handleRemove}>Remove points</button>
            </div>
        </div>
    );
}