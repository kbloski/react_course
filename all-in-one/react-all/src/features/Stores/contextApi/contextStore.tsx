import { createContext, useContext, useEffect, useReducer } from "react";

enum StatusEnum {
    LOADING = "loading",
    READY = 'ready',
}

interface InitialState {
    status: StatusEnum;
    points: number;
}

const initialState: InitialState = {
    status: StatusEnum.LOADING,
    points: 0,
};

interface Action {
    type: string;
    payload?: any;
}

function reducer(state: InitialState, action: Action) {
    switch (action.type) {
        case 'init': 
            return {...state, status: StatusEnum.READY}
        case "setPoints":
            return { ...state, points: action.payload };
        case "addPoints":
            return { ...state, points: state.points + action.payload };
        case "removePoints":
            return { ...state, points: state.points - action.payload };
        default:
            throw new Error("Unknown action");
    }
}

interface StoreContextType {
    status: StatusEnum;
    points: number;
    dispatch: React.Dispatch<Action>;
}

const StoreContextApi = createContext<StoreContextType | undefined>(undefined);

interface StoreProviderProps {
    children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
    const [{ status, points }, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type: 'init'})
    }, [])

    return (
        <StoreContextApi.Provider value={{ status, points, dispatch }} >
            {children}
        </StoreContextApi.Provider>
    );
}

export function usePoints() {
    const context = useContext(StoreContextApi);
    if (context === undefined) {
        throw new Error("Hook useQuiz is used outside of QuizProvider");
    }
    return context;
}
