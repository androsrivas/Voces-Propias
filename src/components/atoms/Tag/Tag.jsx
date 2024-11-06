import "./Tag.css";


function Tag({ text }) {
  return (
    <div className="tagContainer">
        {/* { icon } */}
        <p>{ text }</p>
    </div>
  )
}

export default Tag