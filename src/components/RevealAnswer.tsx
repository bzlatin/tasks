import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const answer = 42;
    return (
        <div>
            <Button
                onClick={() => {
                    setIsVisible(!isVisible);
                }}
            >
                Reveal Answer
            </Button>
            {isVisible && <p>{answer}</p>}
        </div>
    );
}
