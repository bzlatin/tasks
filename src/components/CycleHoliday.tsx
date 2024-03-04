import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "New Year"
    | "Valentine"
    | "Halloween"
    | "Christmas"
    | "Independence";

const holidaysByYear: Record<Holiday, string> = {
    "New Year": "🎆",
    Valentine: "💘",
    Halloween: "🎃",
    Christmas: "🎄",
    Independence: "🎇"
};

const holidaysAlphabetically: Holiday[] = [
    "Christmas",
    "Halloween",
    "Independence",
    "New Year",
    "Valentine"
];
const holidaysByYearOrder: Holiday[] = [
    "New Year",
    "Valentine",
    "Independence",
    "Halloween",
    "Christmas"
];
export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("New Year");
    const nextHolidayAlphabetically = () => {
        const currentIndex = holidaysAlphabetically.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysAlphabetically.length;
        setCurrentHoliday(holidaysAlphabetically[nextIndex]);
    };
    const nextHolidayByYear = () => {
        const currentIndex = holidaysByYearOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByYearOrder.length;
        setCurrentHoliday(holidaysByYearOrder[nextIndex]);
    };

    return (
        <div>
            <p>Holiday: {holidaysByYear[currentHoliday]}</p>
            <Button onClick={nextHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={nextHolidayByYear}>Advance by Year</Button>
        </div>
    );
}
