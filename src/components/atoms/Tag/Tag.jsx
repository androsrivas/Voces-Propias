import "./Tag.css";

function Tag({ icon: Icon, text }) {
  return (
    <div className="tagContainer">
        {Icon && <Icon className="tagIcon"/>}
        <span>{ text }</span>
    </div>
  )
}

export default Tag