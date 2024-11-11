import { deleteBook } from "../../services/ApiBooksService";

const useBookActions = () => {
    const handleDelete = async (bookId) => {
        const confirmDelete = window.confirm("¿Estás segura de querer borrar el libro?");
        if (confirmDelete) {
            await deleteBook(bookId);
            alert("Libro borrado exitosamente")
        }
    }
  return (
    handleDelete
  )
}

export default useBookActions