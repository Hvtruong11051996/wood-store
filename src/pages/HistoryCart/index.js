import { CloseOutlined, EditOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { useSelector } from 'react-redux';
import HeaderTop from '../../components/Header/HeaderTop';
import Footer from '../../components/Footer';
import './history.css';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function HistoryCart(props) {

  const carts = useSelector(state => state.carts)
  console.log(carts);

  const biiCart = carts.map((cart, index) => {
    const cartItem = cart.product
    if (cartItem) {
      return (
        <div className="history-cart">
          <div className="history-cart__img">
            <img src={cartItem.images} alt="images"></img>
          </div>
          <div className="history-cart__text">
            <h3>{cartItem.name}</h3>
            <p><strong>Quantity : </strong> {cart.quantity}</p>
            <span><strong>Price : </strong>  $ {cartItem.price}</span>
          </div>
        </div>
      )
    }
  })

  return (
    <div className="wood-history">
      <HeaderTop></HeaderTop>
      <div className="wood-history__content container">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tất Cả" key="1">
            {biiCart}
          </TabPane>
          <TabPane tab="Chờ Duyệt" key="2">
            {biiCart}
          </TabPane>
          <TabPane tab="Đã Xét Duyệt" key="3">
            <div>
              <h3>Không Có Đơn Hàng Nào Đã Xét Duyệt.</h3>
              <p>Trở về Trang Chủ Click vào đây <Link to="/"><HomeOutlined /> Home</Link></p>
            </div>
          </TabPane>
        </Tabs>
        <div className="history-cart__status">
          <Button
            type="danger"
            className="btn-cancel-order-call btn-cancel-order-call--delete"
          >
            <CloseOutlined /> Hủy đơn hàng
              </Button>
          <Button
            type="primary"
            className="btn-cancel-order-call btn-cancel-order-call--status"
          >
            <SyncOutlined spin /> Trạng thái : Chờ xét duyệt
              </Button>
          <Button
            type="gray-6"
            className="btn-cancel-order-call btn-cancel-order-call--edit"
          >
            <EditOutlined />  Chỉnh sửa
              </Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HistoryCart;