import "./HeaderMobile.css";

function HeaderMobile({ icon: Icon }) {
  return (
    <header className="m-header">
        {Icon && <Icon className="icon"/>}
    </header>
  )
}

export default HeaderMobile