import { combineReducers } from 'redux';
import carts from './carts';
import deatil from './deatil';
import filterProduct from './filterProduct';


const myReducers = combineReducers({
    carts,
    deatil,
    filterProduct,
});

export default myReducers;
