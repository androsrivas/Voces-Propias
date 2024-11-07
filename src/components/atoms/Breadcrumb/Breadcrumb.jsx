import React from "react";
import { BsSlash } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb({ icon: Icon, className }) {
  const location = useLocation();
  const path = location.pathname.split("/").filter((segment) => segment);
  return (
    <div className="bcContainer">
        <ul className="breadcrumbd">
          {/* Home icon as the first breadcrumb */}
          <li>
            <Link to={"/app"}>{Icon && <Icon className="homeIcon"/>}</Link>
          </li>

          {/* Breadcrumb separator */}
          {path.length > 0 && (
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
                      {decodeURIComponent(segment)}
                    </Link>
                  ) : (
                    <span className="bcCurrent">{decodeURIComponent(segment)}</span>
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