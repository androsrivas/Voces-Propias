import "./MenuMobile.css";

function MenuMobile({icon: Icon}) {
  return (
    <aside className="menuMobile">
      {Icon && <Icon icon={ Icon } className="icon"/>}
    </aside>
  )
}

export default MenuMobile