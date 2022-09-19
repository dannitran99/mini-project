import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {SearchOutlined} from '@ant-design/icons';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../logo.svg';
import './styles.scss';


function Navbar() {
  const { loginWithRedirect } = useAuth0();
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
      <div className="menu">
        <button className="navbutton">
          Cart
        </button>
        <button className="navbutton">
          VN
        </button>
        <button className="navbutton" onClick={() => loginWithRedirect()}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
