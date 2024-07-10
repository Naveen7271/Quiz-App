// Button.js
import React from 'react';

function Button({ onClick, text, status, disabled }) {
    return (
        <button
            onClick={onClick}
            className={`button ${status || ''}`}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;