import { useEffect, useState } from "react";
import { getAllBooks } from "../../../services/ApiBooksService";
import { Link } from "react-router-dom";

const GetBooks = () => {
    const [books, setBooks] = useState([]);

    const getAllBooksFromService = async () => {
        const response = await getAllBooks();
        setBooks(response);
    }

    useEffect(() => {
        getAllBooksFromService();
    }, []);

  return (
    <>
        <Link to={"/app/new-book"}><button>Añadir libro</button></Link>
        {/* TODO: añadir table para mostrar todos los datos de la db */}
        <div>
            
            {
                books.map((book) => (
                    <div key={ book.id }>
                        <h4>{ book.title }</h4>
                        <p>{ book.author }</p>
                        <img src={ book.cover } alt="Portada del libro" />
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default GetBooks