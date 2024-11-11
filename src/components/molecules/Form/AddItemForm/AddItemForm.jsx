import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useBook from "../../../../hooks/useBook/useBook";
import "./AddItemForm.css";

const AddItemForm = () => {
    const { addBook } = useBook();
    const  initialState = {
        title: "",
        author: "",
        cover: "",
        price: 0,
        isbn: "",
        stock: 0,
        language: "",
        synopsis: "",
    };
    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {};
        if(!formData.title) errors.title = "Title is required";
        if(!formData.author) errors.author = "Author is required";
        if(!formData.synopsis) errors.synopsis = "Synopsis is required";
        if(formData.price < 0) errors.price = "Price cannot be less than 0";
        if(!/^\d{13}$/.test(formData.isbn)) errors.isbn = "ISBN must be 13 digits long";

        if (Object.keys(errors).length > 0 ) {
            setFormErrors(errors);
            return;
        }

        try {
            await addBook(formData);
            navigate("/dashboard/books");
        } catch (error) {
            console.error("Error adding book: ", error);
        }

    };

    const handleCancel = () => {
        setFormData(initialState);
        navigate("/dashboard/books");
    }

    return (
        <div className="form-container">
            <div className="form-box">
                <form onSubmit={ handleSubmit }>
                    <div className="form-row">
                        <div className="title">
                            <label htmlFor="title">Título del libro</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={ formData.title }
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="author-cover-row">
                        <div className="author-item">
                            <label htmlFor="author">Autora</label>
                            <input
                                id="author"
                                name="author"
                                type="text"
                                value={formData.author}
                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            />
                        </div>
                        <div className="cover-item">
                            <label htmlFor="cover">Portada</label>
                            <input
                                id="cover"
                                name="cover"
                                type="file"
                                onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="price-isbn-stock-row">
                        <div className="price-item">
                            <label htmlFor="price">Precio</label>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                value={formData.price}
                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            />
                        </div>
                        <div className="isbn-item">
                            <label htmlFor="isbn">ISBN</label>
                            <input
                                id="isbn"
                                name="isbn"
                                type="text"
                                value={formData.isbn}
                                onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
                            />
                        </div>
                        <div className="stock-item">
                            <label htmlFor="stock">Stock</label>
                            <input
                                id="stock"
                                name="stock"
                                value={formData.stock}
                                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                                type="number"
                                min="0"
                            >
                            </input>
                        </div>
                    </div>
                    <div className="language-row">
                        <div className="language-item">
                            <label htmlFor="language">Idioma</label>
                            <select
                                id="language"
                                name="language"
                                value={formData.language}
                                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                            >
                                <option value="spanish">Español</option>
                                <option value="english">Inglés</option>
                            </select>
                        </div>
                    </div>
                    <div className="synopsis-row">
                        <div className="synopsis-item">
                            <label htmlFor="synopsis">Sinopsis</label>
                            <textarea
                                id="synopsis"
                                name="synopsis"
                                value={formData.synopsis}
                                onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
                            ></textarea>
                        </div>
                    </div>
                    <div className="button-row">
                        <button className="SaveButton" type="submit">
                            Guardar
                        </button>
                        <button
                            className="CancelButton"
                            type="button"
                            onClick={ handleCancel }
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItemForm;