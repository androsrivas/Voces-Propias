import Breadcrumb from "../../atoms/Breadcrumb/Breadcrumb";
import { FaHome } from "react-icons/fa";
import BtnLogOut from "../../atoms/Button/LogOutButton/BtnLogOut";
import "./Header.css";

function Header() {
  const breadcrumbMap = {
    app: "Dashboard",
    books: "Books",
    "new-book": "Add New Book",
  };

  return (
    <header className="header">
        <Breadcrumb icon={ FaHome } breadcrumbMap={breadcrumbMap}/>
        <BtnLogOut className="btn-logout" text="Desconectar"/>
    </header>
  )
}

export default Header