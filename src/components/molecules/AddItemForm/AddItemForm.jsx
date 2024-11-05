import React, { useState } from 'react';
import Input from '../atoms/Input'; 

const AddItemForm = () => {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value); 
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log('Título ingresado:', title); 
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <Input value={title} onChange={handleChange} />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default AddItemForm;
