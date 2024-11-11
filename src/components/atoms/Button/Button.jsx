import "./Button.css";

function Button({ btnText }) {
  return (
    <button className="btn-add-item">
        { btnText }
    </button>
  )
}

export default Button