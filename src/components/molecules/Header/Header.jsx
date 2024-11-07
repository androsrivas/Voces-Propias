import Breadcrumb from "../../atoms/Breadcrumb/Breadcrumb";
import BtnLogOut from "../../atoms/Button/LogOutButton/BtnLogOut";
import "./Header.css";

function Header() {
  return (
    <header className="header">
        <Breadcrumb className="bcContainer"/>
        <BtnLogOut className="btn-logout" text="Desconectar"/>
    </header>
  )
}

export default Header