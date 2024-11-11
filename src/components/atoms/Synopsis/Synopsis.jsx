import React, { useState } from "react";
import './Synopsis.css';

const Synopsis = ({ text, maxWords = 30, url }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSynopsis = () => {
        setIsOpen(!isOpen);
    };

    const getShortenedText = () => {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };

    return (
        <div className="synopsis-container">
            <div className="synopsis-header">
                <span>Sinopsis</span>
                <button className="toggle-button" onClick={toggleSynopsis}>
                    {isOpen ? "-" : "+"}
                </button>
            </div>
            <div className={`synopsis-text ${isOpen ? 'open' : ''}`}>
                {isOpen || text.split(' ').length <= maxWords ? (
                    text
                ) : (
                    getShortenedText()
                )}
            </div>
            {text.split(' ').length > maxWords && !isOpen && (
                <a href={url} className="read-more-link">Leer más</a>
            )}
        </div>
    );
};

export default Synopsis;
