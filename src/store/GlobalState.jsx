import { useReducer } from "react";
import { GlobalStateContext } from "./globalStateContexts";
import { appReducer, initialState } from "./appReducer";
const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const addToBasket = (product) =>
    dispatch({ type: "ADD_TO_BASKET", item: { ...product } });
  const getProductsNumber = () => {
    let itemsNumber = 0;
    if (state.basket.length > 0) {
      for (let index = 0; index < state.basket.length; index++) {
        itemsNumber++;
      }
      return itemsNumber;
    }
    return 0;
  };
  const getTotalPrice = (basket) => {
    return basket.reduce((acc, current) => acc + current.price, 0);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        dispatch,
        addToBasket,
        getProductsNumber,
        getTotalPrice,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
