import { TbSlash } from "react-icons/tb";
import "./BreadCrumb.css";

function Breadcrumb({ props }) {
  return (
    <div className="bc">
        <ul>
            <li>{ props }</li>
            {/* <img src={ TbSlash }/> */}
            <li>{ props }</li>
            {/* <img src={ TbSlash }/> */}
            <li>{ props }</li>
            {/* <img src={ TbSlash }/> */}
        </ul>
    </div>
  )
}

export default Breadcrumb