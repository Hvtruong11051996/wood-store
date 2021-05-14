import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Banner1 from '../../images/Home/1.jpg';
import Banner2 from '../../images/Home/2.jpg';
import Banner3 from '../../images/Home/3.jpg';
import Banner4 from '../../images/Home/4.jpg';
import Header from '../Header/HeaderTop'
import './stlye.css';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="banner-next" onClick={onClick}><i className="fas fa-chevron-right"></i></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="banner-pre" onClick={onClick}><i className="fas fa-chevron-left"></i></div>
  );
}

export default class Banner extends Component {
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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      autoplay: true,
      accessibility: true,
      nextArrow: <SampleNextArrow onClick={() => { this.onNext() }} />,
      prevArrow: <SamplePrevArrow onClick={() => { this.onPrev() }} />
    };

    return (
      <div className="banner">
        <Header></Header>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div className="banner-item ">
            <div className="banner__content">
              <div className="banner-left">
                <p className="banner-left__head animate__animated animate__fadeInUp">
                  WELLCOME TO MY STORE
                </p>
                <h1 className="banner-left__title animate__animated animate__fadeInUp">
                  ALL THE WORLD OF WOOD
                </h1>
                <p className="banner-left__desc animate__animated animate__fadeInUp animate__delay-1s">
                  Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum <br />
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="banner-left__button animate__animated animate__fadeInUp animate__delay-1.5s">
                  <button>SHOP NOW</button>
                </div>
              </div>
              <div className="banner-right">
                <div className="banner-right__bg">
                  <img src={Banner1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="banner-item ">
            <div className="banner__content">
              <div className="banner-left">
                <p className="banner-left__head animate__animated animate__fadeInUp">
                  WELLCOME TO MY STORE
                </p>
                <h1 className="banner-left__title animate__animated animate__fadeInUp">
                  ALL THE WORLD OF WOOD
                </h1>
                <p className="banner-left__desc animate__animated animate__fadeInUp animate__delay-1s">
                  Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum <br />
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="banner-left__button animate__animated animate__fadeInUp animate__delay-1.5s">
                  <button>SHOP NOW</button>
                </div>
              </div>
              <div className="banner-right">
                <div className="banner-right__bg">
                  <img src={Banner2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="banner-item ">
            <div className="banner__content">
              <div className="banner-left">
                <p className="banner-left__head animate__animated animate__fadeInUp">
                  WELLCOME TO MY STORE
                </p>
                <h1 className="banner-left__title animate__animated animate__fadeInUp">

                  ALL THE WORLD OF WOOD
                </h1>
                <p className="banner-left__desc animate__animated animate__fadeInUp animate__delay-1s">
                  Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum <br />
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="banner-left__button animate__animated animate__fadeInUp animate__delay-1.5s">
                  <button>SHOP NOW</button>
                </div>
              </div>
              <div className="banner-right">
                <div className="banner-right__bg">
                  <img src={Banner3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="banner-item ">
            <div className="banner__content">
              <div className="banner-left">
                <p className="banner-left__head animate__animated animate__fadeInUp">
                  WELLCOME TO MY STORE
                </p>
                <h1 className="banner-left__title animate__animated animate__fadeInUp">

                  ALL THE WORLD OF WOOD
                </h1>
                <p className="banner-left__desc animate__animated animate__fadeInUp animate__delay-1s">
                  Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum <br />
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="banner-left__button animate__animated animate__fadeInUp animate__delay-1.5s">
                  <button>SHOP NOW</button>
                </div>
              </div>
              <div className="banner-right">
                <div className="banner-right__bg">
                  <img src={Banner4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
