const Select = ({ value, onChange, options }) => {
    return (
        <select value={value} onChange={onChange} className="select-class">
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
