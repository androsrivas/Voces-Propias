const Input = ( { value, onChange}) => {
    return (
        <input
        type="text"
        value={value}
        onChange={onChange}
        className="input-class"
        />
    )
}
export default Input;