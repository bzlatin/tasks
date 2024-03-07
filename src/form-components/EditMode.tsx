import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsStudent(event.target.checked);
    };
    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={toggleEditMode}
                />
                <span className="slider round"></span> Edit mode
            </label>
            {isEditMode ? (
                <div>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />{" "}
                        Is a student?
                    </label>
                </div>
            ) : (
                <p>
                    {userName} is {isStudent ? "" : "not "}a student.
                </p>
            )}
        </div>
    );
}
