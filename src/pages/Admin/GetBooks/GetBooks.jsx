import { useContext } from "react";
import { BookContext } from "../../../context/BookContext/BookContext";
import { Link } from "react-router-dom";
import Table from "../../../components/molecules/Table/Table";
import Button from "../../../components/atoms/Button/Button";
import useScreenSize from "../../../hooks/useScreenSize/useScreenSize";
import "./GetBooks.css";


const GetBooks = () => {
    const books = useContext(BookContext);
    const width = useScreenSize();

  return (
    <>
      {/* {width < 768 ? <Button btnText={}/> : <Button />} */}
      <Link to={"/dashboard/new-book"}><Button btnText="Añadir libro"/></Link>
      <Table data={ books } className="table"/>
    </>
  )
}

export default GetBooks