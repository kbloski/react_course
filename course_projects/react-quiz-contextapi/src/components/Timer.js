import { useEffect, useState } from "react";
import { useQuiz } from "../context/QuizContetx";

export default function Timer() {
    const { dispatch, maxQuizTime } = useQuiz();


    const [time, setTime] = useState(maxQuizTime)
    const minuts = Math.floor( time / 60)
    const seconds = time % 60

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (time <= 0){
                dispatch({ type: "finish" });
            } 
            else setTime( t => t - 1);
            
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [ time ]);

    return <div className="timer">
        {String(minuts).padStart(2, '0')} : {String(seconds).padStart(2,'0')}
    </div>;
}
