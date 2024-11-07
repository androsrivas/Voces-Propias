import React, { useState } from 'react';
import Input from '../../atoms/Input'; 
import FileInput from '../../atoms/FileInput';
import Select from '../../atoms/Select'; 
import TextArea from '../../atoms/TextArea'; 
import { Link } from 'react-router-dom';
import "./AddItemForm.css";

const AddItemForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [file, setFile] = useState('');
    const [price, setPrice] = useState('');
    const [isbn, setIsbn] = useState('');
    const [stock, setStock] = useState('');
    const [language, setLanguage] = useState('');
    const [synopsis, setSynopsis] = useState('');



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
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const languageOptions = [
        { value: 'spanish', label: 'Español' },
        { value: 'english', label: 'Inglés' }

    ];

    const handleSynopsisChange = (event) => {
        setSynopsis(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos ingresados:', { title, author, file, price, isbn, stock, synopsis });
    };
    

    return (
        <form onSubmit={handleSubmit} className="form-container form-box">
            <div className='form-row title'>
                <label>Título</label>
                <Input value={title} onChange={handleTitleChange} />
            </div>
            <div className='form-row'>
                <label>Autora</label>
                <Input value={author} onChange={handleAuthorChange} />

                <label>Portada</label>
                <FileInput setFile={handleFileChange} />
            </div>
            <div className='form-row'>
                <label>Precio</label>
                <Input value={price} onChange={handlePriceChange} />
                <label>ISBN</label>
                <Input value={isbn} onChange={handleIsbnChange} />
                <label>Stock</label>
                <Select value={stock} onChange={handleStockChange} options={stockOptions} />
            </div>
            <div className='form-row'>
            <label>Idioma</label>
            <Select value={language} onChange={handleLanguageChange} options={languageOptions} />
            </div>

            <div className='form-row'>
                <label>Sinopsis</label>
                <TextArea value={synopsis} onChange={handleSynopsisChange} rows="4" />
            </div>
            <div className='form-row'>
                <button type="submit">Guardar</button>
            </div>
            <div>
                <Link to={"/app/books"}><button>Cancelar</button></Link>
            </div>
        </form>
    );
};

export default AddItemForm;