import axios from 'axios'; 
import React, { useState, useEffect } from 'react';
import Card from "../../../components/molecules/Card/Card";

function ProductListView() {
    const [products, setProducts] = useState([]); 
    
    useEffect(() => {
        axios.get("http://localhost:4000/books")  
            .then(response => {
                setProducts(response.data);  
            })
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <Card 
                    key={product.id} 
                    title={product.title} 
                    author={product.author} 
                    cover={product.cover} 
                    price={product.price} 
                    description={product.description} 
                />
            ))}
        </div>
    );
}

export default ProductListView;
