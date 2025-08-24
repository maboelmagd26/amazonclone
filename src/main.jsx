import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./main.css";
import SnackbarProvider from "./store/snackbarcontext/SnackbarContext";
import GlobalStateProvider from "./store/GlobalState";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </SnackbarProvider>
  </StrictMode>
);
