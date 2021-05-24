import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTop from '../../components/Header/HeaderTop';
import './notfound.css';

function NotFound(props) {
    return (
        <div className="wood-notfound container">
            <HeaderTop></HeaderTop>
            <div className="wood-notfound__content">
                <div clasName="wood-notfound__img">
                    <img src="images/baotri.jpg"></img>
                </div>
                <div className="wood-notfound__text">
                    <p>Hệ thống đang nâng cấp. <br />
                Vui lòng bấm <strong><Link to="/"><a>Vào đây</a></Link></strong> để trở lại. <br />
                Xin chân thành cảm ơn !!!.
                </p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;