import React from 'react';
import {useSelector  } from 'react-redux';
import {SearchOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import {Badge} from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../logo.svg';
import './styles.scss';

function Navbar() {

  const data = useSelector((state) => state.createCart);
  const { loginWithRedirect, isAuthenticated ,user, logout } = useAuth0();
  return (
    <div className="navmenu">
      <div className="leftmenu">
        <div className="menu">
          <button className="navlogo">
            <img src={logo} className="applogo" alt="logo" />
          </button>
        </div>
        <div className="menu">
          <button className="navsearch">
            <SearchOutlined/>
          </button>
          <button className="navbutton">
            Category
          </button>
        </div>
      </div>
      <div className="rightmenu">
        <div className="menu">
          <button className="navbutton">
            <Badge badgeContent={data.count} color="primary" overlap="rectangular">
              <ShoppingCartOutlined style={{ fontSize: '25px', color: '#08c' }}/>
            </Badge>
          </button>
        </div>
        <div className="menu">
          {isAuthenticated ? (
            <>
              <button className="user-menu">
                <img src={user.picture} className="avt"/>
                <div className="sub-menu">
                  <ul>
                    <li>Information</li>
                    <br/>
                    <li><a href='#' onClick={() => logout({ returnTo: window.location.origin })}>Logout</a></li>
                  </ul>
                </div>
              </button>
              
            </>
          ):(
            <button className="navbutton" onClick={() => loginWithRedirect()}>
              Login
            </button>)}
         </div>
      </div>
    </div>
  );
}

export default Navbar;
