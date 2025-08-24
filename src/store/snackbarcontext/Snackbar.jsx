import "./snackbar.css";
const Snackbar = ({ isOpen, handleClose, message, severity }) => {
  return (
    <div
      className={`snackbar ${isOpen ? "show" : ""} ${severity}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>{message}</span>
      <button onClick={handleClose}>X</button>
    </div>
  );
};

export default Snackbar;
