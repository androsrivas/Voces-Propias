import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import useBook from "../../../hooks/useBook/useBook";
import useBookActions from "../../../hooks/useBookActions/useBookActions";
import "./Table.css";

function Table() {
  const {books, shortenDescription, fetchBook, updateBook, deleteBook} = useBook();
  const { handleDelete } = useBookActions();
  
  return (
    <table className="table-container">
        <thead className="table-head">
            <tr>
                <th className="table-action">Acción</th>
                <th className="table-title">Título</th>
                <th className="table-title">Autora</th>
                <th className="table-title">Portada</th>
                <th className="table-title">Sinopsis</th>
                <th className="table-title">Stock</th>
                <th className="table-title">Precio</th>
                <th className="table-title">ISBN</th>
                <th className="table-title">Idioma</th>
            </tr>
        </thead>
        <tbody className="table-body">
        {
            books.map((book) => (
              <tr key={book.id} className="item-section">
                <td>
                  <section className="icon-section">
                    <FaEye 
                      className="fa-eye"
                      onClick={() => fetchBook(book.id)}
                      aria-label="Ver detalles"
                    />
                    <FaPen 
                      className="fa-pen"
                      onClick={() => updateBook(book)}
                      aria-label="Editar información"
                    />
                    <FaTrashAlt 
                      className="fa-trash"
                      onClick={() => handleDelete(book.id)}
                      aria-label="Borrar libro"
                    />
                  </section>
                </td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.cover}</td>
                <td>{shortenDescription(book.description)}</td>
                <td>{book.stock}</td>
                <td>{book.price}</td>
                <td>{book.ISBN}</td>
                <td>{book.language}</td>
              </tr>
            ))
          }
        </tbody>
    </table>
  )
}

export default Table