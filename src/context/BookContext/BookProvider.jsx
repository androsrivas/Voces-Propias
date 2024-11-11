import useBook from "../../hooks/useBook/useBook";
import { BookContext } from "../BookContext/BookContext";

const BookProvider = ({ children }) => {
  const {books, setBooks} = useBook();
  return (
    <BookContext.Provider value={{books, setBooks}}>
      { children }
    </BookContext.Provider>
  )
}

export default BookProvider