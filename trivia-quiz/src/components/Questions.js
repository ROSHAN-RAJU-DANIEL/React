import React, { useState } from "react";

function Question({ question, onAnswerSubmit, isLastQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleOptionSelect = (option) => {
        setSelectedAnswer(option);
    };

    return (
        <div className="question">
            <h2>{question.question}</h2>
            <ul>
                {question.options.map((option, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={() => handleOptionSelect(option)}
                            />
                            {option}
                        </label>
                    </li>
                ))}
            </ul>
            <button onClick={() => onAnswerSubmit(selectedAnswer)}>
                {isLastQuestion ? "See Results" : "Next"}
            </button>
        </div>
    );
}

export default Question;
