import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import HeaderTop from '../../components/Header/HeaderTop';
import Loading from '../../components/Loading';
import './cart.css';
import CartItem from './CartItem';
import Payment from './Payment';

function Cart(props) {

  const cartList = useSelector(state => state.carts);

  const pay = (data) => {
    console.log(data);
  }

  return (
    <div className="wood-cart">
      <Loading></Loading>
      <HeaderTop></HeaderTop>
      <CartItem cartList={cartList}></CartItem>
      <Payment test={pay}></Payment>
      <Footer></Footer>
    </div>
  );
}

export default Cart;