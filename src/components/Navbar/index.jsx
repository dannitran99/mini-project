import React, { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useSelector ,useDispatch } from 'react-redux';
import {SearchOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import {Badge,TextField} from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import { getData } from '../../redux/actions/getProduct';
import logo from '../../logo.svg';
import style from './Navbar.module.scss';

function Navbar() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.createCart);
  const todos = useSelector((state) => state.getProduct);
  const dispatch = useDispatch();

  const [searchKeyword,setSearchKeyword] = useState('');

  useEffect(() => {
    dispatch(getData())
  }, []);

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
          <div className={style.textboxsearch}>
              <TextField 
                label="Search..." 
                value={searchKeyword} 
                onChange={(event) =>setSearchKeyword(event.target.value)}
                onKeyPress={(ev) => {
                  if (ev.key === 'Enter') {
                    searchKeyword && navigate({
                      pathname: '/search',
                      search: `?keyword=${searchKeyword}`
                    })
                    ev.preventDefault();
                  }
                }}
              />
          </div>
        </div>
        <div className={style.menu}>
          <button className={style.buttonHoverDropdown}>
            Category
            <div className={style.subMenu}>
              <ul>
                {todos.category.map((item,index)=>{
                  return (
                    <div key={index} className={style.dropdownItem}>
                      <li><a onClick={() => navigate({
                        pathname: '/category',
                        search: `?name=${item}`
                      })}>{item}</a></li>
                      <br/>
                    </div>
                  );
                })}
              </ul>
            </div>
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
              <button className={style.buttonHoverDropdown}>
                <img src={user.picture} className={style.avt}/>
                <div className={style.subMenu}>
                  <ul>
                    <li><a onClick={() => navigate('/info')}>Information</a></li>
                    <br/>
                    <li><a onClick={() => logout({ returnTo: window.location.origin })}>Logout</a></li>
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
