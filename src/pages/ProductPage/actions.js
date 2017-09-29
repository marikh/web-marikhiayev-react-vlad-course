export const actionTypes = {
    NAVIGATED_TO_PRODUCT_PAGE: 'NAVIGATED_TO_PRODUCT_PAGE',
}

export const navigatedToProductPageAction = (productId) => ({
    type: actionTypes.NAVIGATED_TO_PRODUCT_PAGE,
    productId: productId
})
