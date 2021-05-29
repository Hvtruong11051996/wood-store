const initialState = []

const deatil = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_DEATIL':
            const newDeatil = [...action.product]

            return newDeatil;

        default: return state;
    }
}

export default deatil;
