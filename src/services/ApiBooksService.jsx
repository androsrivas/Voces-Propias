import axios from "axios";

const apiBooksUrl = "http://localhost:3000/books";

// PRODUCT LIST VIEW
const getAllBooks = async () => {
    const response = await axios.get(apiBooksUrl);
    return response.data;
}

// NEW BOOK VIEW
const createBook = async (newBook) => {
    const response = await axios.post(apiBooksUrl, newBook);
    return response.data;
}

// UPDATE BOOK VIEW
const updateBook = async (book) => {
    const response = await axios.put(apiBooksUrl, book);
    return response.data;
}

// DELETE BOOK VIEW
const deleteBook = async (book) => {
    const response = await axios.delete(apiBooksUrl, book);
    return response.data;
}

export {
    getAllBooks,
    createBook,
    updateBook,
    deleteBook,
}