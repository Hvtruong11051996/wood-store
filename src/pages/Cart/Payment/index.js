import React from 'react';
import HeaderTop from '../../../components/Header/HeaderTop'
import './payment.css';

function Payment(props) {
  return (
    <div className="wood-payment">
      <HeaderTop></HeaderTop>
      <div className="wood-payment__info container">
        <h3>Thông Tin Khách Hàng</h3>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Họ và tên ... " />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Số điện thoại ..." />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Địa chỉ gia hàng ..." />
          </div>
          <button type="submit" className="btn btn-primary">Complete purchase</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;