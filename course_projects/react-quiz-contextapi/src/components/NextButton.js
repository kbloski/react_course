import { useQuiz } from "../context/QuizContetx";

export default function NextButton() {
    const { dispatch, answer, index, numQuestions } = useQuiz()

    function handleNext() {
        dispatch({ type: "nextQuestion" });
    }
    
    function handleFinish(){
        dispatch({type: 'finish'})
    }

    if (answer === null) return null;

    if (index < numQuestions-1)
        return (
            <button className="btn btn-ui" onClick={handleNext}>
                Next
            </button>
            
        );
    if ( index === numQuestions-1) 
        return <button className="btn btn-ui" onClick={handleFinish}>
            Finish
        </button>
}