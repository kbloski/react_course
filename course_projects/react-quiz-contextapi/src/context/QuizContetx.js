import { createContext, useContext, useEffect, useReducer } from "react";
import { useQuestions } from "../hooks/useQuestions";


const initialState = {
    status: "loading",
    questions: [],
    questionIndex: 0,
    answer: null,
    points: 0,
    highscore: 0,
    maxQuizTime: 300,
};

function reducer(state, action) {
    switch (action.type) {
        case "dataReceived":
            return {
                ...state,
                questions: action.payload,
                status: "ready",
            };
        case "dataFailed":
            return {
                ...state,
                status: "error",
            };
        case "startQuiz":
            return {
                ...state,
                status: "active",
            };
        case "newAnswer":
            const question = state.questions[state.questionIndex];

            return {
                ...state,
                answer: action.payload,
                points:
                    action.payload === question.correctOption
                        ? (state.points = state.points + question.points)
                        : state.points,
            };
        case "nextQuestion":
            return {
                ...state,
                answer: null,
                questionIndex: ++state.questionIndex,
            };

        case "finish":
            return {
                ...state,
                status: "finished",
                highscore:
                    state.points > state.highscore
                        ? state.points
                        : state.highscore,
            };
        case "restart":
            return {
                ...initialState,
                questions: state.questions,
                status: "ready",
                highscore: state.highscore,
            };
        default:
            throw new Error("Unknown action");
    }
}

const QuizContext = createContext();

export function QuizProvider({children}){
    const [{
        status, 
        questions, 
        questionIndex, 
        answer, 
        points, 
        highscore, 
        maxQuizTime
    }, dispatch] = useReducer( reducer, initialState)

    const { questions : dataQuestions , isLoading, error } = useQuestions()
    const maxPossiblePoints = !!questions.length ? questions.reduce( (acc, question) => acc += question.points, 0) : 0
    const numQuestions = questions.length;


    useEffect(() => {
        if (error){
        return dispatch({ type: "dataFailed" });
        } 
        else if (dataQuestions){
        return dispatch({ type: "dataReceived", payload: dataQuestions });
        }
    }, [dataQuestions, error]);

        return <QuizContext.Provider value={{
                status, 
                questionIndex,
                questions,
                answer,
                points,
                highscore,
                maxQuizTime,
                maxPossiblePoints,
                numQuestions,
                dispatch
            }}
        >
            {children}
        </QuizContext.Provider>
}

export function useQuiz(){
        const context = useContext(QuizContext);
        if (context === undefined) throw new Error("Hook useQuis is use out of QuizProvider")
        return context;
}