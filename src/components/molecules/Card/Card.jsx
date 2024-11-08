import React, { useState } from "react";
import "./Card.css";
import AddToCartButton from "../../atoms/Button/AddtocartButton/AddtocartButton";
import Synopsis from '../../atoms/Synopsis/Synopsis';

const Card = ({ product }) => { 
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
        setIsFavorite(prevState => !prevState);
    };

    const getSynopsis = (description) => {
        const words = description.split(" "); 
        const shortSynopsis = words.slice(0, 13).join(" "); 
        return shortSynopsis;
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
                <p className="product-stock">Stock: {product.stock}</p>
                <p className="product-isbn">ISBN: {product.ISBN}</p>
                <p className="product-language">Idioma: {product.language}</p>
            </div>
            <Synopsis text={`${getSynopsis(product.description)}...`} />
            <a href="#" className="read-more-link">Leer más...</a>
            <AddToCartButton />
            <div className="fav-icon" onClick={toggleFavorite}>
                {isFavorite ? "♥" : "♡"}
            </div>
        </div>
    );
}

export default Card;
