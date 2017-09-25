import { cartActionTypes } from './actions'
import { productsActionTypes } from '../Products/actions'

const productsIDs = [
    '123123-234-2341-123123-123123',
    '123123-12342-456456-123123-123123',
];

const INITIAL_STATE = productsIDs;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_PRODUCT_TO_CART:
      return [
        ...state,
        action.addedProductId
      ]

    case cartActionTypes.DELETE_PRODUCT_FROM_CART:
    case productsActionTypes.DELETE_PRODUCT:
      return state.filter(cartProductId =>
        cartProductId !== action.productId
      )

    default:
      return state
  }
};

export const getCartProductsSelector = (state) => {
    return state.cart.map(cartProductId => state.allProducts.find(product => product.id === cartProductId));
}