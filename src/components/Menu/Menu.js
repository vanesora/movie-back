import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Menu.css';
import Icon from "../Icon/Icon";


const Menu = ({
  tabs,
  color,
  backgroundColor,
  backgroundColorGeneral,
  selectedColor = "black",
  tabsWidth = "120px",
  tabHeight = "68px",
  starterSelectedTab = "",
  space = "0",
  search = (val) => { },
  filter = (val) => { }
}) => {
  const [selectedTab, setSelectedTab] = useState(starterSelectedTab);
  const [value, setValue] = useState('');
  const [valueSelect, setValueSelect] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const arraySelect = ['Terror', 'Drama', 'Comedia', 'Fantasía', 'Anime', 'Acción', 'Romance', 'Borrar']

  const toggling = () => setIsOpen(!isOpen);

  const handleClickNavigate = (selectedTab) => {
    const url = tabs.find((x) => x.id === selectedTab);
    navigate(url.url);
  }

  const handleClickSearch = () => {
    setValueSelect('')
    search && search(value);
  }

  const handleChange = value => () => {
    if (value === 'Borrar') {
      setValueSelect('');
      filter && filter('');
    } else {
      setValueSelect(value);
      filter && filter(value);
    }
    setValue(null)
    setIsOpen(false);
  }

  useEffect(() => {
    setSelectedTab(starterSelectedTab);
  }, [starterSelectedTab]);

  useEffect(() => {
    if (value === '') {
      handleClickSearch();
    }
  }, [value]);

  return (
    <div style={{ backgroundColor: backgroundColorGeneral }} className='menu-container'>
      <div>
        {tabs.map((tab) => (
          <button
            style={{
              color: color,
              backgroundColor: backgroundColor,
              borderBottomWidth: selectedTab === tab.id ? '4px' : '',
              borderBottomColor: selectedTab === tab.id ? selectedColor : '',
              width: tabsWidth,
              height: tabHeight,
              marginInline: space,
              cursor: 'pointer'
            }}
            key={`${tab.id}-${tab.text}`}
            onClick={() => {
              setSelectedTab(tab.id);
              handleClickNavigate(tab.id);
            }}
          >
            {tab.text}
          </button>
        ))}
      </div>

      <div className="container-search">
        <div className="drop-down-container ">
          <div className="drop-down-header" onClick={toggling}>Filtrar: <span>{valueSelect}</span></div>
          <div>
            {isOpen && <ul className="drop-down-list">
              {arraySelect.map((item) => (
                <li className="list-item" value={item} key={item} onClick={handleChange(item)}>{item}</li>
              ))}
            </ul>}
          </div>
        </div>
        <input onChange={(e) => {
          setValue(e.target.value);
        }} placeholder="Buscar"></input>
        <Icon name="searchMenu" onClick={() => handleClickSearch()} />
      </div>
    </div>
  );
};

export default Menu;
