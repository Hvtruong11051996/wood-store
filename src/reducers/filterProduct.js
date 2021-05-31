var initialState = {
    name: '',
    status: -1
};

const filterProduct = (state = initialState, action) => {

    switch (action.type) {
        case 'FITER_PRODUCT':
            return {
                name: action.filter.name,
                status: parseInt(action.filter.status ?? -1, 10)
            };

        default: return state;
    }
}

export default filterProduct;
