import React, { useState } from 'react';
import './mobile.css';
import logo from '../../images/Home/logo.png';
import listMenu from './menuItem';
import { Link } from 'react-router-dom';
import { CaretDownOutlined } from '@ant-design/icons';

function MenuMobile(props) {

  const [click, setClick] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleId, setToggleId] = useState(0)


  const [toggleItem, setToggleItem] = useState(false)
  const [toggleItemId, setToggleItemId] = useState(0)
  const [tabOpening, setTabOpening] = useState({
    tabCurrent: 0,
    isOpen: false
  })

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showMenu = (item) => {
    setToggleId(item.id);
    setToggleMenu(!toggleMenu);

  }

  const changeTabCurrent = (item) => {
    if (item.id === toggleId) return;
    setTabOpening({
      tabCurrent: item.id,
      isOpen: !tabOpening
    });
    setToggleId(item.id);
    setToggleMenu(true);
  }

  const showMenuItem = (item) => {
    setToggleItem(!toggleItem);
    setToggleItemId(item.id);
  }

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
            {listMenu.map((menu, index) => {
              var menuSub = menu.sub; // list data from api
              if (menu.sub) {
                return (
                  <li className={menu.cName} key={index}>
                    <a>
                      <Link to={menu.path}>
                        {menu.title}
                      </Link>
                      {menuSub.length !== 0 ? <CaretDownOutlined onClick={() => { showMenu(menu); changeTabCurrent(menu) }} /> : ""}
                    </a>
                    {menuSub.length !== 0 ? menuSub.map((menuItem, index) => {
                      const subItem = menuItem.sub;
                      return (
                        <ul className={String(toggleId) === String(menuItem.idParent) && toggleMenu ? '' : 'menu-toggle'}>
                          <li key={index}>
                            <a>
                              {menuItem.title}
                              {menuSub.length !== 0 ? <CaretDownOutlined onClick={() => showMenuItem(menuItem)} /> : ""}
                            </a>
                            <ul>
                              {subItem !== '' ? subItem.map((item, index) => {
                                const subItemLevel2 = item.sub;
                                return (
                                  <ul className={String(toggleItemId) === String(item.idParent) && toggleItem ? '' : 'menu-toggle'}>
                                    <li key={index}>
                                      <a>
                                        {item.title}
                                        {subItemLevel2.length !== 0 ? <CaretDownOutlined onClick={() => showMenuItem(item)} /> : ""}
                                      </a>
                                      <ul>
                                        {subItemLevel2 !== '' ? subItemLevel2.map((item, index) => {
                                          return (
                                            <ul>
                                              <li key={index}>
                                                <a>
                                                  {item.title}
                                                </a>
                                              </li>
                                            </ul>
                                          )
                                        }) : ''}
                                      </ul>
                                    </li>
                                  </ul>
                                )
                              }) : ''}
                            </ul>
                          </li>
                        </ul>
                      )
                    }) : ''}
                  </li>

                )
              }
              return (
                <Link to={menu.path}>
                  <li className={menu.cName} key={index}>
                    <a>
                      {menu.title}
                    </a>
                  </li>
                </Link>
              )
            })}

          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;