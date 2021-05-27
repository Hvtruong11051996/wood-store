import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import HeaderTop from '../../../components/Header/HeaderTop';
import './payment.css';

function Payment({ onAdd }) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onHandleSubmit = (data) => {
    onAdd(data)
  }


  return (
    <div className="wood-payment">
      <HeaderTop></HeaderTop>
      <div className="wood-payment__info container">
        <h3>Thông Tin Khách Hàng</h3>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Họ và tên ... "
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-danger">Vui lòng nhập Họ và Tên</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="Số điện thoại ..."
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-danger">Vui lòng nhập số điện thoại </span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="adress"
              placeholder="Địa chỉ gia hàng ..."
              {...register("adress", { required: true })}
            />
            {errors.adress && <span className="text-danger">Vui lòng nhập địa chỉ</span>}
          </div>
          <button type="submit" className="btn btn-primary">Complete purchase</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;