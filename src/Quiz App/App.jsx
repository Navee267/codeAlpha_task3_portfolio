import { useState } from "react";
import questions from "./questions.json";
import { useEffect } from "react";

export const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [timer, setTimer] = useState(10);

    const checkAnswer = (selectedOption) => {
        if (selectedOption == questions[currentQuestion].correctOption) {
            setScore((prevScore) => prevScore + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setTimer(10);
        }
        else {
            setShowScore(true);
        }
    }

    const restart = () => {
        setScore(0);
        setShowScore(false);
        setTimer(10);
        setCurrentQuestion(0);
    };

    useEffect(() => {
        let interval;
        if (timer >0 && !showScore)
        {
            interval = setInterval(()=>{
                setTimer((prevValue)=>prevValue -1)
            },1000);
        }
        else{
            clearInterval(interval);
            setShowScore(true)
        }

        return ()=>clearInterval(interval);
    }, [timer, showScore])
    return (
        <>
            <div className="quiz-app">
                {
                    showScore ? (<div className="score-section">
                        <h2>Your Score Is {score}/{questions.length}</h2>
                        <button onClick={restart}>Restart</button>
                    </div>) : (
                        <div className="question-section">
                            <h2>Question {currentQuestion + 1}</h2>
                            <p>{questions[currentQuestion].question}</p>
                            <div className="options">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button key={index} onClick={() => checkAnswer(option)}>{option}</button>
                                ))}
                            </div>
                            <div className="timer">
                                Time Left : <span>{timer}s</span>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
};

export default App;
