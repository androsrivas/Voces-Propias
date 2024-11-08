import Logo from "../../atoms/Logo/Logo";
import Nav from "../Nav/Nav";
import "./Menu.css";

function Menu() {
  return (
    <section className="menu">
        <Logo className="logo"/>
        <Nav className="nav"/>
    </section>
  )
}

export default Menu