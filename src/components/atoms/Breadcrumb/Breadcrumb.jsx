import React from "react";
import { BsSlash } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb({ icon: Icon, breadcrumbMap }) {
  const location = useLocation();
  const path = location.pathname
    .split("/")
    .filter((segment) => segment && segment !== "app");
  
  return (
    <div className="bcContainer">
        <ul className="breadcrumb">
          {/* Home icon*/}
          <li>
            <Link to={"/app"}>{Icon && <Icon className="icon"/>}</Link>
          </li>

          {/* Breadcrumb separator */}
          {path.length > 1 && (
            <li>
              <BsSlash className="separatorIcon"/>
            </li>
          )} 

          {/* Dynamic breadcrumb */}
          {path.map((segment, index) => {
            const pathTo = `/app/${path.slice(0, index + 1).join("/")}`;
            const isLast = index === path.length - 1;

            return(
              <React.Fragment key={ index }>
                <li>
                  {!isLast ? (
                    <Link to={ pathTo } className="bcLink">
                      {breadcrumbMap[segment] || segment}
                    </Link>
                  ) : (
                    <span className="bcCurrent">{breadcrumbMap[segment] || segment}</span>
                  )}
                </li>   
              </React.Fragment>
            )
          })}
        </ul>
    </div>
  )
}

export default Breadcrumb