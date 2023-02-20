import React, { useEffect, useState } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import logo from '../../assets/img/logo.png';
import '../../styles/Header.css';
import Icon from "../Icon/Icon";
import { useNavigate } from "react-router-dom";


const Header = ({
  logged= false,
  user = { name: 'test'},
  login = ()=>{},
  logOut = ()=>{}
}) => {
  const width = useWindowWidth();
  const [viewName, setViewName] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (width <= 640) {
      setViewName(false);
    } else {
      setViewName(true);
    }
  }, [width]);

  const handleClickLogin = () =>{
    login();
    navigate('/login');
  }

  const handleClickLogOut = () =>{
    logOut();
    navigate('/');
  }

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      {logged && <div className="user-container">
        {viewName && <>
          <span>Bienvenido</span>
          <h3>{user.name}</h3></>}
        <div>
          <Icon name="iconLogOut" onClick={() =>handleClickLogOut()} />
        </div>
      </div>}

      {!logged && <div className="login-header-container">
        <button onClick={()=> handleClickLogin()}>
          Iniciar Sesión
        </button>
      </div>}
    </div>
  );
};

export default Header;
