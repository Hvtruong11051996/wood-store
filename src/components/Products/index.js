import React, { useEffect, useState } from 'react';
import './product.css';
import Pills from './data';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const callback = (key) => {
  console.log(key);
}

function Products(props) {

  const { products } = props;

  const showRatting = (ratting) => {
    var result = [];
    for (var i = 1; i <= ratting; i++) {
      result.push(<i key={i} className="fa fa-star"></i>);
    }
    for (var j = 1; j <= (5 - ratting); j++) {
      result.push(<i key={i + j} className="far fa-star"></i>);
    }
    return result;
  }

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
        <div className="product-slide__ratting">
          {showRatting(product.ratting)}
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

  const productNew = products.filter(product => {
    return product.ratting === 3
  })

  const productTop = products.filter(product => {
    return product.ratting > 3
  })

  const productSale = products.filter(product => {
    return product.sale > 0
  })

  return (
    <div className="container wood-products">
      <div className="wood-product__header">
        <h2>Wood Product</h2>
      </div>
      <div className="wood-product__navtab">
        <ul className="wood-product__pill">
          <Tabs defaultActiveKey="0" onChange={callback}>
            <TabPane tab="ALL PRODUCT" key="0">
              <div className="wood-product__content">
                <div className="wood-product__content-items">
                  <div className="row">
                    {productList}
                  </div>
                </div>
              </div>
            </TabPane>

            <TabPane tab="NEW PRODUCT" key="1">
              <div className="wood-product__content">
                <div className="wood-product__content-items">
                  <div className="row">
                    {productNew.map((product, index) => {
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
                          <div className="product-slide__ratting">
                            {showRatting(product.ratting)}
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
                    })}
                  </div>
                </div>
              </div>
            </TabPane>

            <TabPane tab="TOP PRODUCT" key="2">
              <div className="wood-product__content">
                <div className="wood-product__content-items">
                  <div className="row">
                    {productTop.map((product, index) => {
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
                          <div className="product-slide__ratting">
                            {showRatting(product.ratting)}
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
                    })}
                  </div>
                </div>
              </div>
            </TabPane>

            <TabPane tab="SALE PRODUCT" key="3">
              <div className="wood-product__content">
                <div className="wood-product__content-items">
                  <div className="row">
                    {productSale.map((product, index) => {
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
                          <div className="product-slide__ratting">
                            {showRatting(product.ratting)}
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
                    })}
                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </ul>
      </div>

      <div className="products-more">
        <span><Link to="/products">Xem Thêm</Link></span>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
  );
}

export default Products;