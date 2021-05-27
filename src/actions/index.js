export const actAddToCart = (product, quantity) => {
    return {
        type: 'ADD_TO_CART',
        product: product,
        quantity
    }
}

export const actUpDateCart = (product, quantity) => {
    return {
        type: 'UPDATE_CART',
        product: product,
        quantity
    }
}

export const actDeleteCart = (product) => {
    return {
        type: 'DELETE_CART',
        product: product,
    }
}