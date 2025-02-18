import { useQuiz } from "../context/QuizContetx"

export default function StartScreen(){
    const { numQuestions, dispatch} = useQuiz()
    
    function handleStart(){
        dispatch({ type: "startQuiz" })
    }

    return <div className="start">
        <h2>Welcome to The React Quiz!</h2>
        <h3>{numQuestions} question to test your React mastery</h3>
        <button className="btn" onClick={handleStart}>Let's start</button>
    </div>
}