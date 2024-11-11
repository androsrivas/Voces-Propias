import { useContext } from "react";
import { BookContext } from "../../../context/BookContext/BookContext";
import { Link } from "react-router-dom";
import Table from "../../../components/molecules/Table/Table";
import "./GetBooks.css";

const GetBooks = () => {
    const books = useContext(BookContext);

  return (
    <>
        <Link to={"/new-book"}><button>Añadir libro</button></Link>
        <Table data={ books }/>
    </>
  )
}

export default GetBooks