import { useQuiz } from "../context/QuizContetx";

export default function Question(){
    const { questions, dispatch, answer, questionIndex } = useQuiz();
    const question = questions[questionIndex];

    function handleClickOption( index ){
        dispatch({ type: 'newAnswer', payload: index})
    }
    const hasAnswered = answer !== null;

    return (
        <div>
            <h4>{question.question}</h4>
            <div className="questions">
                {question.options.map((option, index) => (
                    <Option
                        key={index}
                        option={option}
                        className={`${index === answer && 'answer'} ${
                            hasAnswered ? (index === question.correctOption ? 'correct' : 'wrong') : ''}`}
                        disabled={ hasAnswered }
                        onClick={() => handleClickOption(index)}
                    />
                ))}
            </div>
        </div>
    );
}

function Option({option, onClick, className, disabled}){
    return <button 
        className={`btn btn-option ${className}`}
        disabled={disabled}
        key={option} 
        onClick={onClick}
    >
            {option}
        </button>
}