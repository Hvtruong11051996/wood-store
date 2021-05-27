import { DeleteOutlined } from '@ant-design/icons';
import { Button, InputNumber, notification, Space } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actDeleteCart, actUpDateCart } from '../../../actions';
import CartTotal from '../CartTotal';
import './cartItem.css';

const openNotification = () => {
  notification.warning({
    message: 'Thông Báo !',
    description:
      'Xóa Sản Phẩm Thành Công !',
  });
};

function CartItem(props) {

  const dispatch = useDispatch()
  const carts = useSelector(state => state.carts)

  const { cartList } = props;

  const upDateCart = (product, quantity) => {
    if (quantity > 0) {
      const action = actUpDateCart(product, quantity)
      dispatch(action);
    }

  }

  const deleteCart = (product) => {
    const action = actDeleteCart(product)
    console.log(action);
    dispatch(action);
  }

  const totalCart = (product, quantity) => {
    const price = product.price
    const sale = product.sale
    if (quantity > 0) {
      return price * quantity - sale
    }
  }


  function onChange(value) {
    console.log('changed', value);
  }

  return (
    <section className="cart-items container">
      <div className="cart-items__table">
        <table className="table product-table">
          <thead>
            <tr>
              <th></th>
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Sale</th>
              <th>Số Lượng</th>
              <th>Tổng Cộng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((cartItem, index) => {
              const item = cartItem.product
              const quantity = cartItem.quantity
              return (
                <tr key={index}>
                  <th scope="row">
                    <img src={item.images} alt="" className="img-fluid z-depth-0" />
                  </th>
                  <td>
                    <h3>
                      <strong>{item.name}</strong>
                    </h3>
                  </td>
                  <td> {item.price} $</td>
                  <td> {item.sale} $</td>
                  <td className="center-on-small-only">

                    <div className="btn-group radio-group" data-toggle="buttons">
                      <label
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick={() => upDateCart(item, quantity - 1)}
                      >
                        <span>—</span>
                      </label>
                      <InputNumber
                        className="cart-items__quantity"
                        min={1} max={10}
                        defaultValue={quantity}
                        onChange={onChange}
                        value={quantity}
                      />
                      <label
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick={() => upDateCart(item, quantity + 1)}
                      >
                        <span>+</span>
                      </label>
                    </div>
                  </td>
                  <td>{totalCart(item, quantity)}$</td>
                  <td>
                    <Space onClick={() => deleteCart(item)}>
                      <Button type="danger" onClick={openNotification}> <DeleteOutlined />Delete</Button>
                    </Space>
                  </td>
                </tr>
              )
            })}
            <CartTotal carts={carts}></CartTotal>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CartItem;