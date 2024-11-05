import React, { useState } from 'react';
import Input from '../../atoms/Input'; 
import FileInput from '../../atoms/FileInput';
import Select from '../../atoms/Select'; 


const AddItemForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [file, setFile] = useState('');
    const [price, setPrice] = useState('');
    const [isbn, setIsbn] = useState('');
    const [stock, setStock] = useState('');


    const handleTitleChange = (event) => {
        setTitle(event.target.value); 
    };

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value); 
    };

    const handleFileChange = (event) => {
        setFile(event.target.value); 
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value); 
    };

    const handleIsbnChange = (event) => {
        setIsbn(event.target.value); 
    };

    const handleStockChange = (event) => {
        setStock(event.target.value);
    };
    
    const stockOptions = [
        { value: 'in-stock', label: 'Con stock' },
        { value: 'out-of-stock', label: 'Sin stock' }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos ingresados:', { title, author, file, price, isbn, stock });
    };
    


    return (
        <form onSubmit={handleSubmit} className="form-container">
            <label>Título</label>
            <Input value={title} onChange={handleTitleChange} />
            
            <label>Autora</label>
            <Input value={author} onChange={handleAuthorChange} />

            <label>Portada</label>
            <FileInput setFile={handleFileChange} />

            <label>Precio</label>
            <Input value={price} onChange={handlePriceChange} />

            <label>ISBN</label>
            <Input value={isbn} onChange={handleIsbnChange} />

            <label>Stock</label>
            <Select value={stock} onChange={handleStockChange} options={stockOptions} />

            <button type="submit">Guardar</button>
        </form>
    );
};

export default AddItemForm;
