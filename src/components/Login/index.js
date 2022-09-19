import React from 'react';
import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import {  Input  } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import './styles.scss';

function Login() {
  return (
    <div className="login-form">
        Login
        <Input size="large" placeholder="user name" prefix={<UserOutlined />} />
    </div>
  );
}

export default Login;
