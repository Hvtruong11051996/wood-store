import { combineReducers } from 'redux';
import carts from './carts';
import deatil from './deatil';


const myReducers = combineReducers({
    carts,
    deatil,
});

export default myReducers;
