import { notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { actAddToCart } from '../../actions';
import Footer from '../../components/Footer';
import HeaderTop from '../../components/Header/HeaderTop';
import './deatil.css';
import Slide from './Slide';



function Deatil(props) {

  const match = useRouteMatch();
  const id = match.params.id
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function callProduct() {

      try {
        const requestUrl = `https://my-json-server.typicode.com/Hvtruong11051996/api-woody/data/${id}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const data = responseJSON;

        setProduct(data);
      } catch (error) {
        console.log(error.message);
      }

    }

    callProduct();
  }, [])

  const openNotification = () => {
    notification.success({
      message: 'Thông Báo :',
      description:
        'Sản Phẩm Đã Được Thêm Vào Giỏ Hàng  !',
    });
  };

  const onAddToCart = (product) => {
    const action = actAddToCart(product, 1);
    dispatch(action)
  }


  return (
    <div className="wood__deatil">
      <div className="wood__deatil-menu">
        <HeaderTop></HeaderTop>
      </div>
      <div className="wood-product__deatil container">
        <div className="wood-product__deatil-img">
          <div className="detail-img__preview">
            <img src={`/${product.images}`} alt="dec"></img>
          </div>
        </div>
        <div className="wood-product__deatil-content">
          <div className="deatil-content__title">
            <h2>{product.name}</h2>
          </div>
          <div className="deatil-content__dec">
            <p>{product.introduce}</p>
            <div className="deatil-content__status">
              <h4>Trạng Thái: </h4>
              <p>
                <i className={product.status === true ? 'far fa-check-circle' : 'fas fa-exclamation-circle'}></i>
                <span> {product.status === true ? 'Còn Hàng' : 'Hết Hàng'}</span>
              </p>
            </div>
          </div>
          <div className="deatil-content__price">
            <span className="sale">$ {product.sale}</span>
            <span className="price">$ {product.price}</span>
          </div>
          <hr></hr>
          <div className="deatil-content__add">
            <Link to="/carts">
              <button onClick={openNotification}>
                <i className="fas fa-cart-plus"></i>
                <p onClick={() => onAddToCart(product)}>ADD TO CART</p>
              </button>
            </Link>
          </div>
          <div className="deatil-content__sale">
            <h2>KHUYẾN MÃI KHI MUA HÀNG</h2>
            <p>
              <i className="far fa-check-circle"></i>
              <span>Miễn phí ship hàng toàn quốc cho đơn hàng trên 2 triệu.</span>
            </p>
            <p>
              <i className="far fa-check-circle"></i>
              <span>Với đơn hàng dưới 2 triệu, phí ship đồng giá 30k.</span>
            </p>
            <p>
              <i className="far fa-check-circle"></i>
              <span>Nhận hàng và kiểm tra trước khi thanh toán.</span>
            </p>
            <p>
              <i className="far fa-check-circle"></i>
              <span>Giao hàng nhanh 60 phút trong nội thành Hà Nội. Tp HCM.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="wood-product__dec container">
        <div className="wood-product__dec-content">
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>
      </div>
      <Slide></Slide>
      <Footer></Footer>
    </div>
  );
}

export default Deatil;