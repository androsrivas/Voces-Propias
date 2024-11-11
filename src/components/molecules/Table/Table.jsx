import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { BookContext } from "../../../context/BookContext/BookContext";
import useBook from "../../../hooks/useBook/useBook";

function Table() {
  const {books, shortenDescription} = useBook(BookContext);
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
        {
            books.map((book) => (
              <tr key={book.id} >
                <td>
                  <section className="icon-section">
                    <FaEye />
                    <FaPen />
                    <FaTrashAlt />
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