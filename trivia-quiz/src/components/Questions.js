import React, { useState, useEffect } from "react";
import '../styles/question.css'

const Question = ({ question, onAnswerSubmit, Next, isLastQuestion }) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedAnswer(option);
    };

    const submitAnswer = () => {
        setSubmitted(true);
        onAnswerSubmit(selectedAnswer);
    };

    useEffect(() => {
        setSubmitted(false);
    }, [question]);

    return (
        <div className="question">
            <h2>{question.question}</h2>
            {question.options.map((option, index) => (
                <div key={index}>
                    <label>
                        <input
                            type="radio"
                            value={option}
                            checked={selectedAnswer === option}
                            onChange={() => handleOptionSelect(option)}
                            disabled={submitted}
                        />
                        <span
                            style={{
                                color:
                                    submitted && option === question.correctAnswer
                                        ? "green"
                                        : submitted && selectedAnswer === option
                                            ? "red"
                                            : "inherit",
                            }}
                        >
                            {option}
                        </span>
                    </label>
                </div>
            ))}
            <button onClick={submitAnswer} disabled={submitted}>
                Submit
            </button>
            <button onClick={() => Next()}>
                {isLastQuestion ? "See Results" : "Next"}
            </button>
        </div>
    );
}

export default Question;
