import Tag from "../../atoms/Tag/Tag";
import { FaBook, FaPen, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import "./TagSection.css";


function TagSection({ className }) {
  return (
    <div className={ className }>
        <Tag icon={ FaBook } text="Catálogo"/>
        <Tag icon={ FaPen } text="Autoras"/>
        <Tag icon={ FaUser } text="Usuarios" />
        <Tag icon={ FaGear } text="Configuración"/>
    </div>
  )
}

export default TagSection