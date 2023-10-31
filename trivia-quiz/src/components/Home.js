import React from "react";

const Home = ({ onStartQuiz }) => {
    return (
        <div className="home">
            <h1>Welcome to General Quiz!</h1>
            <button onClick={onStartQuiz}>Start</button>
        </div>
    );
}

export default Home;
