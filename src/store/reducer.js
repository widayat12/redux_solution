import * as actionType from "./action";

const initialState = {
  ingredients: {
    salad: 0,
    meat: 0,
    bacon: 0,
    cheese: 0,
  },
  totalPrice: 4,
};

const INGREDIENTS_PRICE = {
  salad: 0.5,
  bacon: 0.4,
  meat: 1.2,
  cheese: 0.9,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGRIDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName],
      };
    case actionType.REMOVE_INGRIDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;
