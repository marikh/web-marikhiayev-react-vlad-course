import { cartActionTypes } from './actions'
import { productsActionTypes } from '../Products/actions'

const productsInCart = [
    { productId: '123123-234-2341-123123-123123', cartItemId: 1 },
    { productId: '123123-12342-456456-123123-123123', cartItemId: 2 }
];

const INITIAL_STATE = productsInCart;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_PRODUCT_TO_CART:

      return [
        ...state,
        { productId : action.addedProductId, 
          cartItemId : state.reduce((maxId, product) => Math.max(product.cartItemId, maxId), -1) + 1 }
      ]

    case cartActionTypes.DELETE_PRODUCT_FROM_CART:
      return state.filter(cartProduct =>
        cartProduct.cartItemId !== action.cartItemId
      )

    case productsActionTypes.DELETE_PRODUCT:
      return state.filter(cartProduct =>
        cartProduct.productId !== action.productId
      )

    default:
      return state
  }
};

export const getCartProductsSelector = (state) => {
    return state.cart.map(cartProduct => 
    { 
      return { cartItemId: cartProduct.cartItemId, 
      ...state.allProducts.find(product => product.id === cartProduct.productId) }
    });
}