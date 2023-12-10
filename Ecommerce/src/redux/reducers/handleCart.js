const cart = [];

const handleCartReducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "DEL_CART":
      if (action.completeRemoval) {
        return state.filter((item) => item.id !== action.payload.id);
      }

    case "ADDITEM": {
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    }
    case "DELITEM": {
      const exist = state.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        return state.filter((x) => x.id !== exist.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    }
    default:
      return state;
  }
};

export default handleCartReducer;
