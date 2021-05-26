import React, { Component } from 'react';
import './productSale.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

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

    const productSale = products.filter(product => {
      return product.sale > 0
    })

    const productList = productSale.map((product, index) => {
      return (
        <div className="product-slide" key={index}>
          <div className="product-slide__img">
            <img src={product.images} alt="slide ảnh"></img>
          </div>
          <div className="product-slide__name">
            <h4>{product.name}</h4>
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