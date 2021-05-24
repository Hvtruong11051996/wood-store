import { CloseOutlined, EditOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import HeaderTop from '../../components/Header/HeaderTop';
import './history.css';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function HistoryCart(props) {
  return (
    <div className="wood-history">
      <HeaderTop></HeaderTop>
      <div className="wood-history__content container">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tất Cả" key="1">
            <div className="history-cart">
              <div className="history-cart__img">
                <img src="https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg" alt="images"></img>
              </div>
              <div className="history-cart__text">
                <h3>Việt Nam</h3>
                <p><strong>Quantity : </strong> 1</p>
                <span><strong>Price : </strong>  $ 5.99</span>
              </div>
            </div>
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
          </TabPane>
          <TabPane tab="Chờ Duyệt" key="2">
            <div className="history-cart">
              <div className="history-cart__img">
                <img src="https://anhdep123.com/wp-content/uploads/2021/02/hinh-nen-gai-xinh-full-hd-cho-dien-thoai.jpg" alt="images"></img>
              </div>
              <div className="history-cart__text">
                <h3>Trung Quốc</h3>
                <p><strong>Quantity : </strong> 1</p>
                <span><strong>Price : </strong>  $ 5.99</span>
              </div>
            </div>
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
          </TabPane>
          <TabPane tab="Đã Xét Duyệt" key="3">
            <div className="history-cart">
              <div className="history-cart__img">
                <img src="https://thuthuatnhanh.com/wp-content/uploads/2019/12/anh-gai-xinh-de-thuong-cap-3-580x580.jpg" alt="images"></img>
              </div>
              <div className="history-cart__text">
                <h3>Hàn Quốc</h3>
                <p><strong>Quantity : </strong> 1</p>
                <span><strong>Price : </strong>  $ 5.99</span>
              </div>
            </div>
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
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default HistoryCart;