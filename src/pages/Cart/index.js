import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import HeaderTop from '../../components/Header/HeaderTop';
import './cart.css';
import CartItem from './CartItem';
import Payment from './Payment';

function Cart(props) {

  const cartList = useSelector(state => state.carts);

  return (
    <div className="wood-cart">
      <HeaderTop></HeaderTop>
      <CartItem cartList={cartList}></CartItem>
      <Payment></Payment>
      <Footer></Footer>
    </div>
  );
}

export default Cart;