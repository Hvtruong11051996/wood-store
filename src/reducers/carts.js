
var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : [];

const carts = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            const newCart = [...state];
            newCart.push(action.product)

            localStorage.setItem('CART', JSON.stringify(state));
            return state = newCart;

        default: return [...state];
    }
}

export default carts;