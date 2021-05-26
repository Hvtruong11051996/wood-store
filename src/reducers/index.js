import { combineReducers } from 'redux';
import carts from './carts';

const myReducers = combineReducers({
    carts,
});

export default myReducers;
