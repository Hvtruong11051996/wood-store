var initialState = {
    by: '',
    value: 1
};

const sortName = (state = initialState, action) => {

    switch (action.type) {
        case 'SORT_BY_NAME_PRODUCT':
            return {
                by: action.sort.by,
                value: action.sort.value
            }

        case 'SORT_BY_PRICE_PRODUCT':
            return {
                by: action.sort.by,
                value: action.sort.value
            }

        default: return state;
    }
}

export default sortName;
