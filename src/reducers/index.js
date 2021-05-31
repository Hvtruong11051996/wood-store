import { combineReducers } from 'redux';
import carts from './carts';
import deatil from './deatil';
import filterProduct from './filterProduct';
import sortName from './sortName';
import sortPrice from './sortPrice';
import sortStatus from './sortStatus';


const myReducers = combineReducers({
    carts,
    deatil,
    filterProduct,
    sortName,
    sortPrice,
    sortStatus,
});

export default myReducers;
