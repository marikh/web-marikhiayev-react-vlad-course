import { actionTypes } from './actions'
import { globalActions } from '../../common/globalActions'

const INITIAL_STATE = {
  productId : undefined,
  canAddToCart : false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.NAVIGATED_TO_PRODUCT_PAGE:
      return {
        ...state,
        productId : action.productId,
      }

    case globalActions.USER_LOGGED_IN:
      return {
        ...state,
        canAddToCart: true,
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

export const getCanAddToCartSelector = (state) => {
  return state.productPage.canAddToCart;
}
