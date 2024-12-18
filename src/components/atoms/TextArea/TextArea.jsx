const TextArea = ({ value, onChange, rows }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            rows={rows}
            className="textarea-class"
        />
    );
};

export default TextArea;