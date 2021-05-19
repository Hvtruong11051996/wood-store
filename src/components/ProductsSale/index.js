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

export default class ProductsSale extends Component {
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


    return (

      <div className="container product-item" >
        <div className="product-item__sale-header"><h2>Product Sale</h2></div>
        <div className="product-item__sale">
          <h4>Sản Phẩm Sale</h4>
        </div>
        <div className="row">
          <Slider {...settings}>
            <div className="col-md-3 col-6">
              <div className="product-slide">
                <div className="product-slide__img">
                  <img src="images/2.png" alt="slide ảnh"></img>
                </div>
                <div className="product-slide__name">
                  <h4>Biplane</h4>
                </div>
                <div className="product-slide__text">
                  <div className="product-slide__sale">
                    <p>$240.00</p>
                  </div>
                  <div className="product-slide__price">
                    <p>$190.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="product-slide">
                <div className="product-slide__img">
                  <img src="images/3.png" alt="slide ảnh"></img>
                </div>
                <div className="product-slide__name">
                  <h4>Biplane</h4>
                </div>
                <div className="product-slide__text">
                  <div className="product-slide__sale">
                    <p>$240.00</p>
                  </div>
                  <div className="product-slide__price">
                    <p>$190.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="product-slide">
                <div className="product-slide__img">
                  <img src="images/4.png" alt="slide ảnh"></img>
                </div>
                <div className="product-slide__name">
                  <h4>Biplane</h4>
                </div>
                <div className="product-slide__text">
                  <div className="product-slide__sale">
                    <p>$240.00</p>
                  </div>
                  <div className="product-slide__price">
                    <p>$190.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="product-slide">
                <div className="product-slide__img">
                  <img src="images/5.png" alt="slide ảnh"></img>
                </div>
                <div className="product-slide__name">
                  <h4>Biplane</h4>
                </div>
                <div className="product-slide__text">
                  <div className="product-slide__sale">
                    <p>$240.00</p>
                  </div>
                  <div className="product-slide__price">
                    <p>$190.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="product-slide">
                <div className="product-slide__img">
                  <img src="images/6.png" alt="slide ảnh"></img>
                </div>
                <div className="product-slide__name">
                  <h4>Biplane</h4>
                </div>
                <div className="product-slide__text">
                  <div className="product-slide__sale">
                    <p>$240.00</p>
                  </div>
                  <div className="product-slide__price">
                    <p>$190.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="product-slide">
                <div className="product-slide__img">
                  <img src="images/7.png" alt="slide ảnh"></img>
                </div>
                <div className="product-slide__name">
                  <h4>Biplane</h4>
                </div>
                <div className="product-slide__text">
                  <div className="product-slide__sale">
                    <p>$240.00</p>
                  </div>
                  <div className="product-slide__price">
                    <p>$190.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="product-slide">
                <div className="product-slide__img">
                  <img src="images/8.png" alt="slide ảnh"></img>
                </div>
                <div className="product-slide__name">
                  <h4>Biplane</h4>
                </div>
                <div className="product-slide__text">
                  <div className="product-slide__sale">
                    <p>$240.00</p>
                  </div>
                  <div className="product-slide__price">
                    <p>$190.00</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div >

    )
  }
}