export const cartActionTypes = {
    ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
    DELETE_PRODUCT_FROM_CART: 'DELETE_PRODUCT_FROM_CART'
}

export const addProductToCart = (addedProductId) => ({
    type: cartActionTypes.ADD_PRODUCT_TO_CART,
    addedProductId: addedProductId
})

export const deleteProductFromCart = (productId) => ({
    type: cartActionTypes.DELETE_PRODUCT_FROM_CART,
    productId: productId
})
