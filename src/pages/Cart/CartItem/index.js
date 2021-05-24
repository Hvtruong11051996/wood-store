import { DeleteOutlined } from '@ant-design/icons';
import { Button, notification, Popconfirm, Space } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './cartItem.css';

const openNotification = () => {
  notification.open({
    message: 'Thông Báo !',
    description:
      'Xóa Sản Phẩm Thành Công !',
  });
};

function CartItem(props) {
  return (
    <section className="cart-items container">
      <h3>
        <span className="cart-items__mess">Mua Hàng Thành Công !</span>
      </h3>
      <div className="cart-items__table">
        <table className="table product-table">
          <thead>
            <tr>
              <th></th>
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng Cộng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&amp;hei=445&amp;fmt=jpeg&amp;qlt=95&amp;op_sharpen=0&amp;resMode=bicub&amp;op_usm=0.5,0.5,0,0&amp;iccEmbed=0&amp;layer=comp&amp;.v=K7ik72" alt="" className="img-fluid z-depth-0" />
              </th>
              <td>
                <h3>
                  <strong>Iphone 6 Plus</strong>
                </h3>
              </td>
              <td>15$</td>
              <td className="center-on-small-only">
                <span className="qty">1 </span>
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