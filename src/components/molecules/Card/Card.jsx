import React, { useState } from "react";
import "./Card.css";
import AddToCartButton from "../../atoms/Button/AddtocartButton/AddtocartButton";
import Synopsis from '../../atoms/Synopsis/Synopsis';

const Card = ({ product }) => { 
    console.log(product);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);  

    const toggleFavorite = () => {
        setIsFavorite(prevState => !prevState);
    };

    const getSynopsis = (description, maxLength = 100) => {
        const shortSynopsis = description.slice(0, maxLength);
        return shortSynopsis.length < description.length ? shortSynopsis + "..." : shortSynopsis;
    };

    const handleReadMore = () => {
        setIsExpanded(true);  
    };

    return (
        <div className="Card">
            <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-author">{product.author}</p>
                <div className="product-cover">
                    <img src={product.cover} alt={product.title} />
                </div>
                <p className="product-price">Precio: {product.price} €</p>
                <p className="product-language">Idioma: {product.language}</p>
            </div>
            <Synopsis text={isExpanded ? product.description : `${getSynopsis(product.description)}...`} />
            {!isExpanded && <a href="#" className="read-more-link" onClick={handleReadMore}>Leer más...</a>}

            {}
            <div className="card-actions">
                <AddToCartButton />
                <div className="fav-icon" onClick={toggleFavorite}>
                    {isFavorite ? "♥" : "♡"}
                </div>
            </div>
        </div>
    );
}

export default Card;
