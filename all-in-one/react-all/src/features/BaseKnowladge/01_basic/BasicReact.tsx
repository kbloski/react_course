import { useEffect, useState } from "react"

// Props in JSX
// import PropTypes from "prop-types";
// BasicReact.propTypes = {
//     children: PropTypes.node.isRequired,
//     message: PropTypes.string, 
// };

type BasicReactProps = {
    message : string
}

function BasicReact({ message} : BasicReactProps){
    // useRef
    const [counter, setCounter] = useState(0)
    const counterMessage = `Current counter value is ${counter}` // this change when component state rerender

    function handleAddToCounter(
        number: number
    ){
        setCounter( val => val + number) // the best way to change value into
    }

    useEffect(
        () => {
            const intervalId = setInterval(
                () => console.log("IntervalId"),
                1000
            );
            return () => {
                // clear effect when component unmounted
                clearInterval(intervalId);
            };
        },
        [] /* Lista zależności (wtedy ponownie się wykonuje funkcja zwrotna) */
    );

    useEffect(
        () => {
            console.log(`Use Effect - change counter value - ${counter}`);
        },
        [
            counter,
        ] /* Lista zależności (wtedy ponownie się wykonuje funkcja zwrotna) */
    );

    return <>
        <div>
            <div>Props message: { message }</div>
            <div>State counter Message: { counterMessage }</div>
            <button onClick={() => handleAddToCounter( 1)}>Increment Counter</button>
            <button onClick={() => handleAddToCounter( -1)}>Decrement Counter</button>
        </div>
    </>
}

export default BasicReact;