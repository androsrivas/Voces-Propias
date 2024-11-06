import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tag.css";


function Tag({ icon, text }) {
  return (
    <>
        <FontAwesomeIcon icon={ icon } />
        <p>{ text }</p>
    </>
  )
}

export default Tag