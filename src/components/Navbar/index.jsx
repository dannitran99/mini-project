import React from 'react';
import { useNavigate } from "react-router-dom";
import {useSelector  } from 'react-redux';
import {SearchOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import {Badge} from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../logo.svg';
import style from './Navbar.module.scss';

function Navbar() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.createCart);
  const { loginWithRedirect, isAuthenticated ,user, logout } = useAuth0();
  return (
    <div className={style.navmenu}>
      <div className={style.leftmenu}>
        <div className={style.menu}>
          <button className={style.navlogo} onClick={() => navigate('/')}>
            <img src={logo} className={style.applogo} alt="logo" />
          </button>
        </div>
        <div className={style.menu}>
          <button className={style.navsearch}>
            <SearchOutlined/>
          </button>
          <button className={style.navbutton}>
            Category
          </button>
        </div>
      </div>
      <div className={style.rightmenu}>
        <div className={style.menu}>
          <button className={style.navbutton} onClick={()=>navigate('/cart')}>
            <Badge badgeContent={data.count} color="primary" overlap="rectangular">
              <ShoppingCartOutlined style={{ fontSize: '25px', color: '#08c' }}/>
            </Badge>
          </button>
        </div>
        <div className={style.menu}>
          {isAuthenticated ? (
            <>
              <button className={style.userMenu}>
                <img src={user.picture} className={style.avt}/>
                <div className={style.subMenu}>
                  <ul>
                    <li><a href='#' onClick={() => navigate('/info')}>Information</a></li>
                    <br/>
                    <li><a href='#' onClick={() => logout({ returnTo: window.location.origin })}>Logout</a></li>
                  </ul>
                </div>
              </button>
              
            </>
          ):(
            <button className={style.navbutton} onClick={() => loginWithRedirect()}>
              Login
            </button>)}
         </div>
      </div>
    </div>
  );
}

export default Navbar;
