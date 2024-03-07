import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const useAttempt = () => {
        setAttemptsLeft((prevAttempts) => Math.max(prevAttempts - 1, 0));
    };

    const gainAttempts = () => {
        const additionalAttempts = parseInt(requestedAttempts, 10);
        if (!isNaN(additionalAttempts)) {
            setAttemptsLeft(
                (prevAttempts) => prevAttempts + additionalAttempts
            );
        }
    };
    const handleRequestChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleRequestChange}
                placeholder="Request attempts"
            />
            <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={gainAttempts}>Gain</button>
        </div>
    );
}
