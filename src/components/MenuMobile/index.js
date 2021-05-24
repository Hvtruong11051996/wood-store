import React, { useState } from 'react';
import './mobile.css';
import logo from '../../images/Home/logo.png';

function MenuMobile(props) {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);


    return (
        <div className={click ? 'menu-mobile' : ''}>
            <div className="menu-mobile__top">
                <div className="menu-mobile__toggle" onClick={handleClick}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="menu-mobile__search">
                    <div className="search-text">
                        <input type="text" placeholder="Search ..."></input>
                    </div>
                    <div className="search-icon">
                        <a><i className="fas fa-search"></i></a>
                    </div>
                </div>
            </div>
            <div className="mennu-mobile__bg" onClick={closeMobileMenu}></div>
            <div className="menu-mobile__wrap">
                <div className="menu-mobile__logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="menu-mobile__list">
                    <ul>
                        <li><a>HOME</a></li>
                        <li>
                            <a>PRODUCT</a>
                            <i className="fas fa-caret-down"></i>
                        </li>
                        <li>
                            <a>EXPLORE</a>
                            <i className="fas fa-caret-down"></i>
                        </li>
                        <li><a>ABOUTS</a></li>
                        <li><a>CONTACT</a></li>
                        <li>
                            <a>CART</a>
                            <i className="fas fa-cart-plus"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuMobile;