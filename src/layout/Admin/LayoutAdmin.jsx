import { Outlet } from "react-router-dom";
// import Menu from "../components/organisms/Menu/Menu";
// import Header from "../components/organisms/Menu/Menu";
// import Footer from "../components/organisms/Footer/Footer";

const LayoutAdmin = () => {
  return (
    <div className="app">
      <Menu className="menu"/> 
      <Header className="header"/>
      <div className="outlet">
        <Outlet/>
      </div>
        
    </div>
  )
}

export default LayoutAdmin