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
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Họ và tên ... " />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Số điện thoại ..." />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Địa chỉ gia hàng ..." />
          </div>
          <button type="submit" class="btn btn-primary">Complete purchase</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;