var data = JSON.parse(localStorage.getItem('DEATIL'))
var initialState = data ? data : [];

const deatil = (state = initialState, action) => {

    var { product } = action;


    switch (action.type) {
        case 'DEATIL_CART':
            state.push(product);

            localStorage.setItem('DEATIL', JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
}

export default deatil;
