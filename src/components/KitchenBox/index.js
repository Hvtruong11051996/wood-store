import React from 'react';
import './kichenbox.css';

function KitchenBox(props) {
  return (
    <section className="kitchen-box">
      <div className="container">
        <div className="row kitchen-box-store" style={{ marginBottom: 30 }}>
          <div className="col-md-6 relative">
            <img
              src="images/9.png"
              alt="logo"
              className="img-responsive animate__animated animate__backInLeft animate__delay-1s"
            />
            <div className="header-position-one"></div>
          </div>
          <div className="col-md-3 relative">
            <img
              src="images/10.png"
              alt="logo"
              className=" img-responsive animate__animated animate__backInRight animate__delay-1s"
            />
            <div className="header-position"></div>
          </div>
          <div className="col-md-3 relative">
            <img
              src="images/11.png"
              alt="logo"
              className=" img-responsive animate__animated animate__backInRight animate__delay-1s"
            />
            <div className="header-position"></div>
          </div>
        </div>
        <div className="row kitchen-box-relative">
          <div className="col-md-3 relative">
            <img
              src="images/12.png"
              alt="logo"
              className="img-responsive animate__animated animate__backInLeft animate__delay-1s"
            />
            <div className="header-position"></div>
          </div>
          <div className="col-md-3 relative">
            <img
              src="images/13.png"
              alt="logo"
              className=" img-responsive animate__animated animate__backInLeft animate__delay-1s"
            />
            <div className="header-position"></div>
          </div>
          <div className="col-md-6 relative">
            <img
              src="images/14.png"
              alt="logo"
              className=" img-responsive animate__animated animate__backInRight animate__delay-1s"
            />
            <div className="header-position-one"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KitchenBox;