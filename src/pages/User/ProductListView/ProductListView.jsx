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
    console.log(products)

    return (
        <div className="cards-container">
            {products.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductListView;
