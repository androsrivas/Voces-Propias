import { useState, useEffect } from "react";
import { 
    createBook as apiCreateBook,
    getAllBooks as apiGetAllBooks,
    getBook as apiGetOneBook,
    updateBook as apiUpdateBook,
    deleteBook as apiDeleteBook
} from "../../services/ApiBooksService";

const useBook = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState();

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
        setSelectedBook(booksFromAPI);
        } catch (error) {
        console.error("Failed to retrieve books: ", error);
        throw error;
        }
    };

    // READ: fetch a book
    const fetchBook = async(bookId) => {
        try {
            const bookFromAPI = await apiGetOneBook(bookId);
            setBooks(bookFromAPI);
            setSelectedBook(null);
            return bookFromAPI;
        } catch (error) {
            console.error("Failed to retrieve book: ", error);
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
            if(selectedBook?.id === updatedBook.id) { 
                setSelectedBook(updatedBook) 
            };
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
        if (selectedBook?.id === bookId) {
            setSelectedBook(null);
        };
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
        fetchBook,
        updateBook,
        deleteBook
    }
};

export default useBook