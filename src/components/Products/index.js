import React, { useEffect, useState } from 'react';
import './product.css';
import Pills from './data';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Products(props) {

  const { products } = props;

  const productList = products.map((product, index) => {
    return (
      <div className="col-sm-3 col-6" key={product.id}>
        <div className="wood-product__content-img">
          <img src={product.images} alt="product"></img>
          <div className="wood-product__content-icons">
            <ul>
              <li><i className="fas fa-cart-plus"></i></li>
              <li><i className="la la-eye"></i></li>
              <li><i className="la la-heart-o"></i></li>
            </ul>
          </div>
        </div>
        <div className="product-slide__name">
          <h4>{product.name}</h4>
        </div>
        <div className="product-slide__text">
          <div className="product-slide__sale">
            <p>$ {product.sale}</p>
          </div>
          <div className="product-slide__price">
            <p>$ {product.price}</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="container wood-products">
      <div className="wood-product__header">
        <h2>Wood Product</h2>
      </div>
      <div className="wood-product__navtab">
        <ul className="wood-product__pill">
          <Tabs defaultActiveKey="1" onChange={callback}>
            {Pills.map((pill, index) => {
              return (
                <TabPane tab={pill.title} key={index}>

                </TabPane>
              )
            })}
          </Tabs>

        </ul>
        <div className="wood-product__content">
          <div className="wood-product__content-items">
            <div className="row">
              {productList}
            </div>
          </div>
        </div>
      </div>
      <div className="products-more">
        <span><Link to="/products">Xem Thêm</Link></span>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
  );
}

export default Products;