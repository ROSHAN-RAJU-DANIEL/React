import React from "react";

function Home({ onStartQuiz }) {
    return (
        <div className="home">
            <h1>Welcome to the Trivia Quiz!</h1>
            <button onClick={onStartQuiz}>Start</button>
        </div>
    );
}

export default Home;
