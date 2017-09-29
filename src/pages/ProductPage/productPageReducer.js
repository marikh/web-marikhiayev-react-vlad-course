import { actionTypes } from './actions'

const INITIAL_STATE = {
  productId : undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.NAVIGATED_TO_PRODUCT_PAGE:
      return {
        ...state,
        productId : action.productId,
      }

    default:
      return state
  }
};

export const getCurrentProductIdSelector = (state) => {
  return state.productPage.productId;
}

export const getCurrentProductSelector = (state) => {
  const currentProductId = getCurrentProductIdSelector(state);
  if(currentProductId == null)
    return null;

  return state.allProducts.find(product => product.id === currentProductId);
}