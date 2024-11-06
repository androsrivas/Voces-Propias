import { useEffect, useState } from "react";
import { getAllBooks } from "../../services/ApiBooksService";

const Books = () => {
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
    {
        books.map((book) => (
            <div key={ book.id }>
                <h4>{ book.title }</h4>
                <p>{ book.author }</p>
                <img src={ book.cover } alt="Portada del libro" />
            </div>
        ))
    }
    </>
  )
}

export default Books