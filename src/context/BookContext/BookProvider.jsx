import useBook from "../../hooks/useBook/useBook";
import { BookContext } from "../BookContext/BookContext";

const BookProvider = ({ children }) => {
  const {books, addBook, fetchBooks, updateBook, deleteBook, selectedBook, setSelectedBook} = useBook();

  return (
    <BookContext.Provider 
      value={{
        books, 
        addBook, 
        fetchBooks, 
        updateBook, 
        deleteBook, 
        selectedBook, 
        setSelectedBook
      }}
    >
      { children }
    </BookContext.Provider>
  )
}

export default BookProvider