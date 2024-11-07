import React, { useState } from "react";
import "./Card.css";
import AddToCartButton from "../../atoms/Button/AddtocartButton/AddtocartButton";
const Card = () => {
    return (
        <div className ="Card">
            <AddToCartButton/>
        </div>
    )
}
export default Card;
