import axios from 'axios'; 
import React, { useState, useEffect } from 'react';
import Card from "../../../components/molecules/Card/Card";

function ProductListView() {
    const [products, setProducts] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(response => {
                setProducts(response.data); 
            })
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductListView;
