import React from "react";

function Results({ score, totalQuestions, onRestartQuiz }) {
    return (
        <div className="results">
            <h2>Quiz Results</h2>
            <p>You scored {score} out of {totalQuestions}.</p>
            <button onClick={onRestartQuiz}>Play Again</button>
        </div>
    );
}

export default Results;
