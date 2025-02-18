import { useQuiz } from "../context/QuizContetx";

export default function FinishScreen() {
    const { points, maxPossiblePoints, highscore, dispatch} = useQuiz()
    
    const percentage = Math.ceil((points / maxPossiblePoints) * 100);
    let emoji;

    if (percentage >= 800) emoji = "🔥";
    else if (percentage >= 40) emoji = "👏";
    else if (percentage >= 10) emoji = "😥";
    else emoji = "💩";

    function handleRestart(){
        dispatch({type: 'restart'})
    }

    return (
        <>
            <p className="result">
                <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
                {maxPossiblePoints} ({percentage}%)
            </p>
            <p className="highscore">Highscore: {highscore} points</p>
            <button className="btn" onClick={handleRestart}>
                Restart quiz
            </button>
        </>
    );
}
