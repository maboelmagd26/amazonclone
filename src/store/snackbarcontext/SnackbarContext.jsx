import { useEffect, useState } from "react";
import { SnackbarContext } from "../globalStateContexts";
import Snackbar from "./Snackbar";
const SnackbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sbMessage, setSbMessage] = useState("");
  const [sbSeverity, setSbSeverity] = useState("error");
  const onSbOpen = (message, severity = "error") => {
    setIsOpen(true);
    setSbMessage(message);
    setSbSeverity(severity);
  };
  const onSbClose = () => setIsOpen(false);
  useEffect(() => {
    if (isOpen) {
      const snackbarDuration = setTimeout(() => {
        return setIsOpen(false);
      }, 3000);
      () => clearTimeout(snackbarDuration);
    }
  }, [isOpen]);
  const snackbarValues = { onSbOpen };

  return (
    <SnackbarContext.Provider value={snackbarValues}>
      {children}
      <Snackbar
        isOpen={isOpen}
        handleClose={onSbClose}
        handleOpen={onSbOpen}
        message={sbMessage}
        severity={sbSeverity}
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
