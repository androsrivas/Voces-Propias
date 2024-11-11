import { Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import useScreenSize from "../../hooks/useScreenSize/useScreenSize";
import MenuMobile from "../../components/molecules/MenuMobile/MenuMobile";
import Menu from "../../components/molecules/Menu/Menu";
import Header from "../../components/molecules/Header/Header";
import HeaderMobile from "../../components/molecules/HeaderMobile/HeaderMobile";
import BookProvider from "../../context/BookContext/BookProvider";
import "./Layout.css";



const Layout = () => {
  const width = useScreenSize();

  return (
    <div className="admin-layout">
      <BookProvider>
        {width < 768 ? <MenuMobile className="menu-mobile" icon={ FaHome }/> : <Menu className="menu-desktop"/>}
        {width < 768 ? <HeaderMobile className="header-mobile" icon={ MdOutlineLogout } /> : <Header className="header-desktop"/>}
        <main className="outlet">
          <Outlet />
        </main>
      </BookProvider>  
    </div>
  )
}

export default Layout