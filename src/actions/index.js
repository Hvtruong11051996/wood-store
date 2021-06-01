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

export const actionGetDeatil = (product) => {
    return {
        type: 'GET_DEATIL',
        product: product,
    }
}

export const actFiterProduct = (filter) => {
    return {
        type: 'FITER_PRODUCT',
        filter: filter,
    }
}

export const actSortByName = (sort) => {
    return {
        type: 'SORT_BY_NAME_PRODUCT',
        sort: sort,
    }
}

export const actSortByPrice = (sort) => {
    return {
        type: 'SORT_BY_PRICE_PRODUCT',
        sort: sort,
    }
}

export const actSortByStatus = (sort) => {
    return {
        type: 'SORT_BY_STATUS_PRODUCT',
        sort: sort,
    }
}

export const actRegister = (user) => {
    return {
        type: 'ACTION_REGISTER',
        user: user,
    }
}

export const actUserLogin = (user) => {
    return {
        type: 'USER_LOGIN',
        user: user,
    }
}