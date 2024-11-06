import React, { useState } from 'react';
import Input from '../../atoms/Input/Input'; 
import FileInput from '../../atoms/FileInput/FileInput';
import Select from '../../atoms/Select/Select'; 
import TextArea from '../../atoms/TextArea/TextArea';
import './additemform.css'; 

const AddItemForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [file, setFile] = useState('');
    const [price, setPrice] = useState('');
    const [isbn, setIsbn] = useState('');
    const [stock, setStock] = useState('');
    const [language, setLanguage] = useState('');
    const [synopsis, setSynopsis] = useState('');

    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleAuthorChange = (event) => setAuthor(event.target.value);
    const handleFileChange = (event) => setFile(event.target.value);
    const handlePriceChange = (event) => setPrice(event.target.value);
    const handleIsbnChange = (event) => setIsbn(event.target.value);
    const handleStockChange = (event) => setStock(event.target.value);
    const handleLanguageChange = (event) => setLanguage(event.target.value);
    const handleSynopsisChange = (event) => setSynopsis(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos ingresados:', { title, author, file, price, isbn, stock, synopsis });
    };

    const stockOptions = [
        { value: 'in-stock', label: 'Con stock' },
        { value: 'out-of-stock', label: 'Sin stock' }
    ];

    const languageOptions = [
        { value: 'spanish', label: 'Español' },
        { value: 'english', label: 'Inglés' }
    ];

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-box">
                <div className="form-row">
                    <div className="title">
                        <label>Título</label>
                        <Input className="input-class" value={title} onChange={handleTitleChange} />
                    </div>
                    <div className="author-cover-row">
                        <div className="author-item">
                            <label>Autora</label>
                            <Input value={author} onChange={handleAuthorChange} />
                        </div>
                        <div className="cover-item">
                            <label>Portada</label>
                            <FileInput setFile={handleFileChange} />
                        </div>
                    </div>
                    <div className="price-isbn-stock-row">
                        <div className="price-item">
                            <label>Precio</label>
                            <Input value={price} onChange={handlePriceChange} />
                        </div>
                        <div className="isbn-item">
                            <label>ISBN</label>
                            <Input value={isbn} onChange={handleIsbnChange} />
                        </div>
                        <div className="stock-item">
                            <label>Stock</label>
                            <Select value={stock} onChange={handleStockChange} options={stockOptions} />
                        </div>
                    </div>
                    <div className="language-row">
                        <label>Idioma</label>
                        <Select value={language} onChange={handleLanguageChange} options={languageOptions} />
                    </div>
                    <div className="synopsis-row">
                        <label>Sinopsis</label>
                        <TextArea value={synopsis} onChange={handleSynopsisChange} rows="4" />
                    </div>
                    <div className="form-row">
                        <button type="submit">Guardar</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddItemForm;
