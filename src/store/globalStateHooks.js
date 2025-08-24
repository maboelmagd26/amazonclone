import { useContext } from "react";
import { GlobalStateContext, SnackbarContext } from "./globalStateContexts";
export const useAmazon = () => useContext(GlobalStateContext);
export const useSnackbar = () => useContext(SnackbarContext);
