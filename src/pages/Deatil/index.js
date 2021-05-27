import React, { useEffect, useState } from 'react';
import HeaderTop from '../../components/Header/HeaderTop';
import './deatil.css';
import ProductsSale from '../../components/ProductsSale';
import Footer from '../../components/Footer';
import { useSelector } from 'react-redux';


function Deatil(props) {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function callProduct() {

      try {
        const requestUrl = 'https://my-json-server.typicode.com/Hvtruong11051996/api-woody/db';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data } = responseJSON;
        setProduct(data);
      } catch (error) {
        console.log(error.message);
      }

    }

    callProduct();
  }, [])

  return (
    <div className="wood__deatil">
      <div className="wood__deatil-menu">
        <HeaderTop></HeaderTop>
      </div>
      <div className="wood-product__deatil container">
        <div className="wood-product__deatil-img">
          <div className="detail-img__preview">
            <img src="images/SingleProduct/Group 1059.png" alt="dec"></img>
          </div>
        </div>
        <div className="wood-product__deatil-content">
          <div className="deatil-content__title">
            <h2>Truck</h2>
          </div>
          <div className="deatil-content__dec">
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
            <div className="deatil-content__status">
              <h4>Trạng Thái: </h4>
              <p>
                <i className="far fa-check-circle"></i>
                <span> Còn Hàng</span>
              </p>
            </div>
          </div>
          <div className="deatil-content__price">
            <span>$ 59.99</span>
          </div>
          <hr></hr>
          <div className="deatil-content__add">
            <button>
              <i className="fas fa-cart-plus"></i>
              <p>ADD TO CART</p>
            </button>
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
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.

          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well- balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
        </div>
      </div>
      <ProductsSale products={products}></ProductsSale>
      <Footer></Footer>
    </div>
  );
}

export default Deatil;