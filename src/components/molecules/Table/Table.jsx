import { useState, useEffect } from "react";
import IconSection from "../../atoms/IconSection/IconSection";
import { getBooks } from "./Table.js";

function Table() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then((data) => setBooks(data));
    }, []);

  return (
    <table>
        <thead>
            <tr>
                <th>Acción</th>
                <th>Título</th>
                <th>Autora</th>
                <th>Portada</th>
                <th>Sinopsis</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>ISBN</th>
                <th>Idioma</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book, index) => (
              <tr key={ index }>
                <td>{ IconSection }</td>
                <td>{ book.title }</td>
                <td>{ book.author }</td>
                <td>{ book.cover }</td>
                <td>{ book.description }</td>
                <td>{ book.stock }</td>
                <td>{ book.price }</td>
                <td>{ book.ISBN }</td>
                <td>{ book.language }</td>
              </tr>  
            ))}
        </tbody>
    </table>
  )
}

export default Table