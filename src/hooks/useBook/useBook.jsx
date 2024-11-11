import { useState, useEffect } from "react";
import { 
    createBook as apiCreateBook,
    getAllBooks as apiGetAllBooks,
    updateBook as apiUpdateBook,
    deleteBook as apiDeleteBook
} from "../../services/ApiBooksService";

const useBook = () => {
    const [books, setBooks] = useState([]);

    //Function to shorten description 
    const shortenDescription = (description, wordLimit = 13) => {
        if (!description) return "";
        const words = description.split(" ");
        const shortDescription = words.slice(0, wordLimit).join(" ");
        return shortDescription + (words.length > wordLimit ? "..." : "");
    };

    // CREATE: add new book
    const addBook = async (newBookData) => {
        try {
        const newBook = await apiCreateBook(newBookData);
        setBooks((prevBooks) => [...prevBooks, newBook]);
        return newBook;
        } catch (error) {
        console.error("Failed to add book: ", error);
        throw error;
        }
    };

    // READ: get all books
    const fetchBooks = async() => {
        try {
        const booksFromAPI = await apiGetAllBooks();
        setBooks(booksFromAPI);
        } catch (error) {
        console.error("Failed to retrieve books: ", error);
        throw error;
        }
    };

    // UPDATE: edit  existing book
    const updateBook = async (updatedBookData) => {
        try {
            const updatedBook = await apiUpdateBook(updatedBookData);
            setBooks((prevBooks) =>
                prevBooks.map((book) =>
                    book.id === updatedBook.id ? updatedBook : book
                )
            );
            return updatedBook;
        } catch (error) {
            console.error("Failed to update book:", error);
            throw error;
        }
    };

    // DELETE: remove book
    const deleteBook = async (bookId) => {
        try {
        await apiDeleteBook(bookId);
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
        } catch (error) {
        console.error("Failed to delete book: ", error);
        throw error;
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return {
        books,  
        shortenDescription,
        addBook,
        fetchBooks,
        updateBook,
        deleteBook
    }
};

export default useBook