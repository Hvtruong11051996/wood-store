import React from 'react';
import './footer.css';

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-content">
            <h2>WOODY STORE</h2>
            <p>Woody integrates design, technology and
            nature. We offer innovative wooden
            products to a more sustainable and
            durable envoriment.
          </p>
          </div>
          <div className="footer-content">
            <div className="footer-left__menu">
              <h2>MENU</h2>
              <ul>
                <li><a>Home</a></li>
                <li><a>Product</a></li>
                <li><a>About Us</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-left__menu">
              <h2>Explore</h2>
              <ul>
                <li><a>Policy</a></li>
                <li><a>FAQ</a></li>
                <li><a>Blogs</a></li>
                <li><a>Gallery</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-left__menu">
              <h2>Contact Us</h2>
              <ul>
                <li>
                  <i className="fas fa-location-arrow"></i>
                  <a>Chợ Triều Khúc - Tân Triều - Thanh Trì - Hà Nội</a>
                </li>
                <li>
                  <i className="far fa-envelope-open"></i>
                  <a>Hoangtruongttat96@gmail.com</a>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <a>0979454593</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;