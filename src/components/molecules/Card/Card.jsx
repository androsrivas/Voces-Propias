import React, { useState } from "react";
import "./Card.css";
import AddToCartButton from "../../atoms/Button/AddtocartButton/AddtocartButton";
import Synopsis from '../../atoms/Synopsis/Synopsis';

const Card = () => {
    const product = {
        title: "Título del libro",
        author: "Autora del libro",
        cover: "https://picsum.photos/200/300",
    };
    const synopsisText = "lorem ipsum blablabalorem ipsum blablabalorem ipsum blablabalorem ipsum blablabalorem ipsum blablabalorem ipsum blablabalorem ipsum blablabalorem ipsum blablabal";
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
        setIsFavorite(prevState => !prevState);
    };

    return (
        <div className="Card">
            <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-author"> {product.author}</p>
                <div className="product-cover">
                    <img src={product.cover} />
                </div>
            </div>
            <Synopsis text={synopsisText} />
            <AddToCartButton />
            <div className="fav-icon" onClick={toggleFavorite}>
                {isFavorite ? "♥" : "♡"}
            </div>
        </div>
    );
}

export default Card;
