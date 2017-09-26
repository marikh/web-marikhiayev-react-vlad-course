export const cartActionTypes = {
    LOGIN_FIELD_CHANGED: 'LOGIN_FIELD_CHANGED',
    USER_LOGGING_IN: 'USER_LOGGING_IN',
    USER_LOGGED_IN: 'USER_LOGGED_IN'
}

export const addProductToCart = (addedProductId) => ({
    type: cartActionTypes.ADD_PRODUCT_TO_CART,
    addedProductId: addedProductId
})

export const deleteProductFromCart = (productId) => ({
    type: cartActionTypes.DELETE_PRODUCT_FROM_CART,
    productId: productId
})


export const loginAction = () => (dispatch, getState) => {
    
}