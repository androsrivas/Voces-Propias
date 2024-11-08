import { Outlet } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize/useScreenSize";
import MenuMobile from "../../components/molecules/MenuMobile/MenuMobile";
import Menu from "../../components/molecules/Menu/Menu";
import { FaHome } from "react-icons/fa";



const Layout = () => {
  const width = useScreenSize();

  return (
    <>
      {
        width < 768 ? 
        <MenuMobile 
          className="menuMobile"
          icon={ FaHome }
        /> : 
        <Menu className="menu"/>
      }
      <Outlet />
        
    </>
  )
}

export default Layout