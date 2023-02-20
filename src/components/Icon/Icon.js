import React from "react";
import iconArrowBack from '../../assets/icons/arrow_back.svg';
import iconArrowForward from '../../assets/icons/arrow_forward.svg';
import iconLogOut from '../../assets/icons/logout.svg';
import iconMenu from '../../assets/icons/menu.svg';
import searchMenu from '../../assets/icons/search.svg';
import '../../styles/Header.css';


const Icon = ({
  size = 'small',
  name = 'iconArrowBack',
  theme = 'light',
  onClick = () => { }
}) => {

  const selectHeight = () => {
    // eslint-disable-next-line default-case
    switch (size) {
      case 'small':
        return '40px';
      case 'medium':
        return '60px';
      case 'large':
        return '80px';
    }
  }

  const selectIcon = () => {
    // eslint-disable-next-line default-case
    switch (name) {
      case 'iconArrowBack':
        return <img src={iconArrowBack} alt="logo" style={{ height: selectHeight, filter: `${theme === 'light' ? 'invert(100%)' : ''}` }} onClick={onClick} />;
      case 'iconArrowForward':
        return <img src={iconArrowForward} alt="logo" style={{ height: selectHeight, filter: `${theme === 'light' ? 'invert(100%)' : ''}` }} onClick={onClick} />;
      case 'iconLogOut':
        return <img src={iconLogOut} alt="logo" style={{ height: selectHeight, filter: 'invert(100%)' }} onClick={onClick} />;
      case 'iconMenu':
        return <img src={iconMenu} alt="logo" style={{ height: selectHeight, filter: 'invert(100%)' }} onClick={onClick} />;
      case 'searchMenu':
        return <img src={searchMenu} alt="logo" style={{ height: selectHeight, filter: 'invert(100%)' }} onClick={onClick} />;
    }
  }

  return (
    <>{selectIcon()}</>
  );
};

export default Icon;
