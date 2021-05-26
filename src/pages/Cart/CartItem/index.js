import { DeleteOutlined } from '@ant-design/icons';
import { Button, notification, Popconfirm, Space } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { useSelector } from 'react-redux';
import './cartItem.css';

const openNotification = () => {
  notification.open({
    message: 'Thông Báo !',
    description:
      'Xóa Sản Phẩm Thành Công !',
  });
};

function CartItem(props) {

  const { cartList } = props;

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
              return (
                <tr key={index}>
                  <th scope="row">
                    <img src={cartItem.images} alt="" className="img-fluid z-depth-0" />
                  </th>
                  <td>
                    <h3>
                      <strong>{cartItem.name}</strong>
                    </h3>
                  </td>
                  <td>$ {cartItem.price}</td>
                  <td>$ {cartItem.sale}</td>
                  <td className="center-on-small-only">
                    <span className="qty">1</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                      <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                        <span>—</span>
                      </label>
                      <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                        <span>+</span>
                      </label>
                    </div>
                  </td>
                  <td>15$</td>
                  <td>
                    <Space>
                      <Popconfirm title="Bạn chắc chắn muốn xóa không ?" okText="Yes" cancelText="No">
                        <Button type="danger" onClick={openNotification}> <DeleteOutlined />Delete</Button>
                      </Popconfirm>
                    </Space>
                  </td>
                </tr>
              )
            })}

            <tr>
              <td colSpan="3"></td>
              <td>
                <h4>
                  <strong>Tổng Tiền</strong>
                </h4>
              </td>
              <td>
                <h4>
                  <strong>15$</strong>
                </h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CartItem;