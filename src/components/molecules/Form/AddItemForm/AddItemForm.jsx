import React, { useState } from "react";
import "./AddItemForm.css";

const AddItemForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        cover: null,
        price: "",
        isbn: "",
        stock: "inStock",
        language: "spanish",
        synopsis: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    return (
        <div className="form-container">
            <div className="form-box">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="title">
                            <label htmlFor="title">Título del libro</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={formData.title}
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </div>
                        <div className="cover-item">
                            <label htmlFor="cover">Portada</label>
                            <input
                                id="cover"
                                name="cover"
                                type="file"
                                onChange={handleFileChange}
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
                                onChange={handleChange}
                            />
                        </div>
                        <div className="isbn-item">
                            <label htmlFor="isbn">ISBN</label>
                            <input
                                id="isbn"
                                name="isbn"
                                type="text"
                                value={formData.isbn}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="stock-item">
                            <label htmlFor="stock">Stock</label>
                            <input
                                id="stock"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                            onClick={() => console.log("Acción cancelada")}
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