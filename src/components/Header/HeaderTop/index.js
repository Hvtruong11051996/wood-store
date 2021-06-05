import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Menu, notification } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actLogout } from '../../../actions';
import logo from '../../../images/logo.png';
import './top.css';



function HeaderTop(props) {

  const cartCount = useSelector(state => state.carts)
  const userRegister = useSelector(state => state.register)
  const userLogin = useSelector(state => state.user)
  const dispatch = useDispatch()

  const user = userRegister.find(x => x.email === userLogin.email)

  const openSuccess = () => {
    notification.success({
      message: 'Thông Báo :',
      description:
        'Đăng Xuất thành công !',
    });
  };

  const onHandleChange = () => {
    const action = actLogout({})
    dispatch(action);
    openSuccess();
  }

  return (
    <header>
      <div className="s-inner clearfix">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="pull-right nav-right">
          <ul className="navbar-menu">
            <li className="navbar-menu-active">
              <Link to="/">
                HOME
              </Link>
            </li>
            <li className="dropdown menusaga-show">
              <Link to="/products">
                PRODUCT
              </Link>
              <i className="fas fa-angle-down"></i>
              <div className="box-menu container">
                <div className="row">

                  <div className="col-md-3 ">
                    <div className=" slideSort">
                      <h3 className="slider-left-title">Catalog</h3>
                      <ul className="slide-left-list">
                        <li><a href="ProductGrid.html">Kitchen</a></li>
                        <li><a href="ProductGrid.html">Living room</a></li>
                        <li><a href="ProductGrid.html">Office</a></li>
                        <li><a href="ProductGrid.html">Gadgets</a></li>
                        <li><a href="ProductGrid.html">Accessories</a></li>
                        <li><a href="ProductGrid.html">Tool kits</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 ">

                    <div className=" slideSort">
                      <h3 className="slider-left-title">Categories</h3>
                      <ul className="slide-left-list">
                        <li><a href="ProductGrid.html">New Product</a></li>
                        <li><a href="ProductGrid.html">Most Poupular</a>
                        </li>
                        <li><a href="ProductGrid.html">Top Trending</a></li>
                        <li><a href="ProductGrid.html">On Sale</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div
                      className="box-slider-left slideNewproduct slideNewproduct2">
                      <h3 className="slider-left-title"
                        style={{ marginBottom: 10 }}>Best sellers</h3>
                      <div className="box-slideNewproduct">
                        <div
                          className="slideNewproduct-item slideNewproduct-img">
                          <a href="SingleProduct.html"><img
                            src="images/Product/1P5.jpg"
                            alt="product1"
                            className="img-responsive" /></a>
                        </div>
                        <div
                          className="slideNewproduct-item slideNewproduct-text">
                          <h5><a href="SingleProduct.html">Trailer</a>
                          </h5>
                          <p className="slideProduct-price">$32.00</p>
                        </div>
                      </div>
                      <div className="box-slideNewproduct ">
                        <div
                          className="slideNewproduct-item slideNewproduct-img">
                          <a href="SingleProduct.html"><img
                            src="images/Product/1P3.jpg"
                            alt="product1"
                            className="img-responsive" /></a>
                        </div>
                        <div
                          className="slideNewproduct-item slideNewproduct-text">
                          <h5><a href="SingleProduct.html">Magic Clock</a>
                          </h5>
                          <p className="slideProduct-price">$32.00</p>
                        </div>
                      </div>
                      <div className="box-slideNewproduct">
                        <div
                          className="slideNewproduct-item slideNewproduct-img">
                          <a href="SingleProduct.html"><img
                            src="images/Product/1P1.jpg"
                            alt="product1"
                            className="img-responsive img-area" /></a>
                        </div>
                        <div
                          className="slideNewproduct-item slideNewproduct-text">
                          <h5><a href="SingleProduct.html">ObrazMechaniczny</a></h5>
                          <p className="slideProduct-price">$32.00</p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <h3 className="slider-left-title">Woody Store</h3>
                    <div className="box-gallery">
                      <a href="AboutUs.html">
                        <img src="images/MN2.png" alt="banner slideBar"
                          className="img-responsive" style={{ width: 100 }} />
                        <div className="arrIcon">
                        </div>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown menusaga-show">
              <Link to="/explore">
                EXPLORE
              </Link>
              <i className="fas fa-angle-down"></i>
              <div className="box-menu container">
                <div className="row">
                  <div className="col-md-3 ">
                    <div className=" slideSort">
                      <h3 className="slider-left-title">About Us</h3>
                      <ul className="slide-left-list">
                        <li><a href="ProductGrid.html">Policy</a></li>
                        <li><a href="ProductGrid.html">FAQ</a></li>
                        <li><a href="ProductGrid.html">Term Conditions</a></li>
                        <li><a href="ProductGrid.html">Private Policy</a></li>
                        <li><a href="ProductGrid.html">Accessories</a></li>
                        <li><a href="ProductGrid.html">Term of User</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 ">

                    <div className=" slideSort">
                      <h3 className="slider-left-title">Other link</h3>
                      <ul className="slide-left-list">
                        <li><a href="ProductGrid.html">Blogs</a></li>
                        <li><a href="ProductGrid.html">Gallery</a>
                        </li>
                        <li><a href="ProductGrid.html">Top Trending</a></li>
                        <li><a href="ProductGrid.html">On Sale</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div
                      className="box-slider-left slideNewproduct slideNewproduct2">
                      <h3 className="slider-left-title"
                        style={{ marginBottom: 10 }}>Recent news</h3>
                      <div className="box-slideNewproduct">
                        <div
                          className="slideNewproduct-item slideNewproduct-img">
                          <a href="SingleProduct.html"><img
                            src="images/recen1.png"
                            alt="product1"
                            className="img-responsive" /></a>
                        </div>
                        <div
                          className="slideNewproduct-item slideNewproduct-text">
                          <h5><a href="SingleProduct.html">Jul 19,2019 / 4 Comments</a>
                          </h5>
                          <p className="slideProduct-price">Waxy latest also use</p>
                        </div>
                      </div>
                      <div className="box-slideNewproduct ">
                        <div
                          className="slideNewproduct-item slideNewproduct-img">
                          <a href="SingleProduct.html"><img
                            src="images/recen2.png"
                            alt="product1"
                            className="img-responsive" /></a>
                        </div>
                        <div
                          className="slideNewproduct-item slideNewproduct-text">
                          <h5><a href="SingleProduct.html">Jun 26 , 2019 / 15 Comments</a>
                          </h5>
                          <p className="slideProduct-price">Decorating your home</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <h3 className="slider-left-title">Our Gallery</h3>
                    <div className="box-gallery">
                      <a href="AboutUs.html">
                        <img src="images/MN1.png" alt="banner slideBar"
                          className="img-responsive" style={{ width: 100 }} />
                        <div className="arrIcon">
                        </div>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/abouts">
                ABOUTS
              </Link>
            </li>

            <li className="dropdown cart">

              <Link to="/carts">
                <i className="fas fa-cart-plus"></i>
                <Badge count={cartCount.length}>
                  <span className="head-example" />
                </Badge>
                CART
              </Link>
            </li>

            <li className="dropdown user">
              <Dropdown.Button overlay={
                <Menu>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    {user ? user.nickname : ''}
                  </Menu.Item>

                  {user ?
                    <Menu.Item key="2" icon={<LoginOutlined />} onClick={onHandleChange}>
                      Đăng Xuất
                    </Menu.Item>
                    :
                    <Menu.Item key="2" icon={<LoginOutlined />}>
                      <Link to="/login"> Đăng Nhập </Link>
                    </Menu.Item>
                  }

                  <Menu.Item key="3" icon={<LogoutOutlined />}>
                    <Link to="/register">Đăng Ký</Link>
                  </Menu.Item>
                </Menu>
              }
                placement="bottomCenter"
                icon={<UserOutlined />}
              >
                <Link to="/login">User</Link>

              </Dropdown.Button>
            </li>
          </ul>
        </div>
        <div className="search">
          <div className="search-text">
            <input type="text" placeholder="Search ..."></input>
          </div>
          <div className="search-icon">
            <a><i className="fas fa-search"></i></a>
          </div>
        </div>
      </div>
    </header>

  );
}

export default HeaderTop;
