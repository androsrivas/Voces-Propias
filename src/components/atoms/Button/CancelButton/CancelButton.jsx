import React from 'react';
import './CancelButton.css';

const CancelButton = ({ label, onClick, type = "button" }) => {
    return (
        <button className="CancelButton" onClick={onClick} type={type}>
            {label}
        </button>
    );
};

export default CancelButton;
