import Logo from "../../atoms/Logo/Logo";
import TagSection from "../TagSection/TagSection";
import "./Menu.css";

function Menu() {
  return (
    <section className="menu">
        <Logo className="logo"/>
        <TagSection className="tags"/>
    </section>
  )
}

export default Menu