import { useEffect, useReducer } from "react";
import { useQuestions } from "./hooks/useQuestions";
import Header from "./components/Header";
import Footer from './components/Footer.js'
import Loader from './components/Loader'
import Error from './components/Error'
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question"; 
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer.js";
import { useQuiz } from "./context/QuizContetx.js";

function App() {
  const { status } = useQuiz();

  return (
      <div className="app">
          <Header />
            <Main>
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && (
                    <StartScreen />
                )}
                {status === "active" && (
                    <>
                        <Progress/>
                        <Question />
                        <Footer>
                            <Timer />
                            <NextButton/>
                        </Footer>
                    </>
                )}
                {status === "finished" && (
                    <FinishScreen />
                )}
            </Main>
      </div>
  );
}

export default App;
