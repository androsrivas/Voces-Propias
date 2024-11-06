import axios from "axios";

const apiBooksUrl = "http://localhost:3000/products";

const getAllBooks = async () => {
    const response = await axios.get(apiBooksUrl);
    return response.data;
}

export {
    getAllBooks,
}