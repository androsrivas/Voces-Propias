import { Outlet } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize/useScreenSize";
import MenuMobile from "../../components/molecules/MenuMobile/MenuMobile";
import Menu from "../../components/molecules/Menu/Menu";

const Layout = () => {
  const width = useScreenSize();

  return (
    <>
      {width < 768 ? <MenuMobile /> : <Menu />}
      <Outlet />
        
    </>
  )
}

export default Layout