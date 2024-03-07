import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "black",
        "white"
    ];

    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <label key={color} style={{ marginRight: "10px" }}>
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => handleColorChange(color)}
                            style={{ marginRight: "5px" }}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                You have chosen {selectedColor}.
            </div>
        </div>
    );
}
