import React, { useEffect, useState } from 'react';
import './product.css';

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
        <div className="wood-product__pill">
          <div className="new">
            <h5>NEW PRODUCT</h5>
          </div>
          <div className="most">
            <h5>MOST POPULAR</h5>
          </div>
          <div className="top">
            <h5>TOP TRENDING</h5>
          </div>
          <div className="sale">
            <h5>SALE</h5>
          </div>
        </div>
        <div className="wood-product__content">
          <div className="wood-product__content-items">
            <div className="row">
              {productList}
            </div>
          </div>
        </div>
      </div>
      <div className="products-more">
        <span><a>Xem Thêm</a></span>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
  );
}

export default Products;