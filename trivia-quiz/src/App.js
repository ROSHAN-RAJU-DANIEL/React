import React, { useState } from "react";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Results from "./components/Results";
import questions from "./questions.json";

function App() {
  const [step, setStep] = useState("home");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleStartQuiz = () => {
    setStep("question");
  };

  const handleAnswerSubmit = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("results");
    }
  }

  const handleRestartQuiz = () => {
    setStep("home");
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <div className="App">
      {step === "home" && <Home onStartQuiz={handleStartQuiz} />}
      {step === "question" && (
        <Questions
          question={questions[currentQuestion]}
          onAnswerSubmit={handleAnswerSubmit}
          Next={handleNext}
          isLastQuestion={currentQuestion === questions.length - 1}
        />
      )}
      {step === "results" && (
        <Results
          score={score}
          totalQuestions={questions.length}
          onRestartQuiz={handleRestartQuiz}
        />
      )}
    </div>
  );
}

export default App;
