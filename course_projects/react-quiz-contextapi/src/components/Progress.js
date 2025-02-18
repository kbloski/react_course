import { useQuiz } from "../context/QuizContetx";

export default function Progress() {
    const { questionIndex, numQuestions, points, maxPossiblePoints, answer} = useQuiz()

    return (
        <header className="progress">
            <progress max={numQuestions} value={questionIndex + Number(!!answer)} />
            <p>
                Question <strong>{questionIndex + 1}</strong> / {numQuestions}
            </p>
            <p>
                <strong>{points}/{maxPossiblePoints}</strong> Points
            </p>
        </header>
    );
}
