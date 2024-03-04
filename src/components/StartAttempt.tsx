import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [isInProgress, setIsInProgress] = useState(false);

    const startQuiz = () => {
        setIsInProgress(true);
        setAttempts((prevAttempts) => prevAttempts - 1);
    };

    const stopQuiz = () => {
        setIsInProgress(false);
    };
    const mulligan = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <button
                onClick={startQuiz}
                disabled={isInProgress || attempts === 0}
            >
                Start Quiz
            </button>
            <button onClick={stopQuiz} disabled={!isInProgress}>
                Stop Quiz
            </button>
            <button onClick={mulligan} disabled={isInProgress}>
                Mulligan
            </button>
            <p>Attempts left: {attempts}</p>
            <p>Quiz is {isInProgress ? "in progress" : "not in progress"}.</p>
        </div>
    );
}
