import React from "react";

export default function CustomButton({ text, isSuccess, classContent }) {
    return (
        <button
            className={classContent}
            style={{
                background: isSuccess ? "Green" : "Red",
            }}
        >
            {text}
        </button>
    );
}
