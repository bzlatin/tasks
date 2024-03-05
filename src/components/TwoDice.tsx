import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<Number>(2);
    const [rightDie, setRightDie] = useState<Number>(3);

    const rollLeftDie = () => setLeftDie(d6());
    const rollRightDie = () => setRightDie(d6());
    return (
        <div>
            <span
                style={{ display: "inline-block", marginRight: "10px" }}
                data-testid="left-die"
            >
                {leftDie}
            </span>
            <span
                style={{ display: "inline-block", marginLeft: "10px" }}
                data-testid="right-die"
            >
                {rightDie}
            </span>
            <div>
                <Button onClick={rollLeftDie}>Roll Left</Button>
                <Button onClick={rollRightDie}>Roll Right</Button>
            </div>
            {leftDie === 1 && rightDie === 1 && <p>Lose</p>}
            {leftDie !== 1 && leftDie === rightDie && <p>Win</p>}
        </div>
    );
}
