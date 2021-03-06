import { combineReducers } from 'redux';
import carts from './carts';
import deatil from './deatil';
import filterProduct from './filterProduct';
import sortName from './sortName';
import sortPrice from './sortPrice';
import sortStatus from './sortStatus';
import register from './register';
import user from './user';


const myReducers = combineReducers({
    carts,
    deatil,
    filterProduct,
    sortName,
    sortPrice,
    sortStatus,
    register,
    user,
});

export default myReducers;
