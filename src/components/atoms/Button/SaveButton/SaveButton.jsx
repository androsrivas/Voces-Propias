const SaveButton = ({ label, onClick, type = "button" }) => {
  return (
      <button className="save-button" onClick={onClick} type={type}>
          {label}
      </button>
  );
};

export default SaveButton;
