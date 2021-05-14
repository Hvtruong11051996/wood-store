import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderTop from './HeaderTop';

function Header(props) {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <HeaderNav></HeaderNav>
        </div>
    );
}

export default Header;