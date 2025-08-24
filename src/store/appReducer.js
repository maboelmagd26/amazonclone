// الحالة الابتدائية
const initialState = {
  basket: [],
  user: null,
};

// Reducer
function appReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET": {
      const index = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.item.id}) as it's not in the basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    }
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
}

export { initialState, appReducer };
