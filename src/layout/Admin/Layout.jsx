import { Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import useScreenSize from "../../hooks/useScreenSize/useScreenSize";
import MenuMobile from "../../components/molecules/MenuMobile/MenuMobile";
import Menu from "../../components/molecules/Menu/Menu";
import Header from "../../components/molecules/Header/Header";
import HeaderMobile from "../../components/molecules/HeaderMobile/HeaderMobile";
import "./Layout.css";
import { Link } from "react-router-dom";



const Layout = () => {
  const width = useScreenSize();

  return (
    <div className="app">
      <section className="fixed-section">
        <Link to="app">{width < 768 ? <MenuMobile className="menu-mobile" icon={ FaHome }/> : <Menu className="menu-desktop"/>}</Link>
        {width < 768 ? <HeaderMobile icon={ MdOutlineLogout }/> : <Header className="header"/>}
      </section>
      <Outlet />
        
    </div>
  )
}

export default Layout