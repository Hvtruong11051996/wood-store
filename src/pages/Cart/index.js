import React from 'react';
import HeaderTop from '../../components/Header/HeaderTop';
import './cart.css';
import CartItem from './CartItem';
import Payment from './Payment';
import Footer from '../../components/Footer';

function Cart(props) {
  return (
    <div className="wood-cart">
      <HeaderTop></HeaderTop>
      <CartItem></CartItem>
      <Payment></Payment>
      <Footer></Footer>
    </div>
  );
}

export default Cart;