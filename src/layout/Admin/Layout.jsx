import { Outlet } from "react-router-dom";
import Menu from "../../components/molecules/Menu/Menu";
import Header from "../../components/molecules/Header/Header";
import "./Layout.css";


const Layout = () => {
  return (
    <body className="app">
      <Menu className="menu"/> 
      <Header className="header"/>
      <div className="outlet">
        <Outlet/>
      </div>
        
    </body>
  )
}

export default Layout