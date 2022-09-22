import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {SearchOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../logo.svg';
import './styles.scss';

function Navbar() {
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
      <div className="leftmenu">
        <div className="menu">
          <button className="navbutton">
            <ShoppingCartOutlined style={{ fontSize: '25px', color: '#08c' }}/>
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
