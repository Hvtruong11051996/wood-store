var initialState = {
    by: '',
    value: 1
};

const sortStatus = (state = initialState, action) => {

    switch (action.type) {

        case 'SORT_BY_STATUS_PRODUCT':
            return {
                by: action.sort.by,
                value: action.sort.value
            }

        default: return state;
    }
}

export default sortStatus;
