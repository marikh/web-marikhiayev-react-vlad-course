export const productsActionTypes = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    DELETE_PRODUCT: 'DELETE_PRODUCT'
}

export const addProduct = (newProduct) => ({
    type: productsActionTypes.ADD_PRODUCT,
    newProduct: newProduct
})

export const deleteProduct = (productId) => ({
    type: productsActionTypes.DELETE_PRODUCT,
    productId: productId
})


