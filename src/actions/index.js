export const actAddToCart = (product, quantity) => {
    return {
        type: 'ADD_TO_CART',
        product: product,
        quantity
    }
}