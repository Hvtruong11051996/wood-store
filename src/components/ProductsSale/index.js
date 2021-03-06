import React, { Component } from 'react';
import './productSale.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="product-item__next" onClick={onClick}><i className="fas fa-chevron-right"></i></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="product-item__pre" onClick={onClick}><i className="fas fa-chevron-left"></i></div>
  );
}

class ProductsSale extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const { products } = this.props;

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplaySpeed: 3000,
      autoplay: true,
      accessibility: true,
      nextArrow: <SampleNextArrow onClick={() => { this.onNext() }} />,
      prevArrow: <SamplePrevArrow onClick={() => { this.onPrev() }} />,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };

    const URLFriendly = (str) => {
      str = str.toLowerCase();

      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
      str = str.replace(/(đ)/g, 'd');

      str = str.replace(/([^0-9a-z-\s])/g, '');

      str = str.replace(/(\s+)/g, '-');

      str = str.replace(/^-+/g, '');

      str = str.replace(/-+$/g, '');

      return str;
    }

    const productSale = products.filter(product => {
      return product.sale > 0
    })

    const productList = productSale.map((product, index) => {
      const URL = URLFriendly(product.name)

      return (
        <div className="product-slide" key={index}>
          <div className="product-slide__img">
            <img src={product.images} alt="slide ảnh"></img>
          </div>
          <div className="product-slide__name">
            <Link to={`/deatil/${URL}.${product.id}.html`}>
              <h4>{product.name}</h4>
            </Link>
          </div>
          <div className="product-slide__text">
            <div className="product-slide__sale">
              <p>${product.sale}</p>
            </div>
            <div className="product-slide__price">
              <p>${product.price}</p>
            </div>
          </div>
        </div>
      )
    })


    return (

      <div className="container product-item" >
        <div className="product-item__sale-header"><h2>Product Sale</h2></div>
        <div className="product-item__sale">
          <h4>Sản Phẩm Sale</h4>
        </div>
        <div className="row">
          <div className="col col-6">
            <Slider {...settings}>
              {productList}
            </Slider>

          </div>
        </div>
      </div >

    )
  }
}

export default ProductsSale;