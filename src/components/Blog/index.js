import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css';

function Blog(props) {
  return (
    <div>
      <section className="blog container">
        <div>
          <div className="row">
            <div className="col-md-6 relative">
              <img src="images/hp2.4.jpg" alt="logo" style={{ width: '100%' }} className=" img-responsive" />
              <div className="arrival">
                <a href="#" style={{ color: '#000' }} className="Brightness">
                  <div className="btn-arrival">
                    <Link to="/products">SHOP NOW</Link>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 relative">
              <img src="images/hp2.5.jpg" alt="logo" style={{ width: '100%' }} className=" img-responsive" />
              <div className="arrival">
                <a href="#" style={{ color: '#000' }} className="Brightness">
                  <div className="btn-arrival">
                    <Link to="/products">SHOP NOW</Link>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;