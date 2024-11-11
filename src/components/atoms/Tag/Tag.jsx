import "./Tag.css";

function Tag({ icon: Icon, text }) {
  return (
    <div className="tagContainer">
        {Icon && <Icon icon={ Icon } className="icon"/>}
        <span>{ text }</span>
    </div>
  )
}

export default Tag