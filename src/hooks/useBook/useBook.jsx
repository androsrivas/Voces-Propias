import { useState, useEffect } from "react";
import { getAllBooks } from "../../services/ApiBooksService";

const useBook = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const response = await getAllBooks();
        
        // const transformedBooks = response.map((book) => ({
        //     ...book,
        //     description: {
        //         text: formatDescription(book.description.text),
        //     },
        };
        setBooks();
    }
    
    // const formatDescription = (text) => {
    //     if (!text) return "";
    //     const trimmed = text.length > 200
    //         ? text.substring(0, Math.min(text.length, text.lastIndexOf(" ", 200)))
    //         : text;
    //     return trimmed + (trimmed.length === 200 ? ". . ." : "");
    // }

    useEffect(() => {
        getBooks();
    }, []);

    return {books, setBooks}
};

export default useBook