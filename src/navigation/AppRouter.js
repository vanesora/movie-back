import React, { useState } from 'react';
import { HashRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import Home from '../screens/Home/Home';
import Categories from '../screens/Categories/Categories';
import Movie from '../screens/Movie/Movie';
import Header from '../components/Header/Header';
import Login from '../screens/Login/Login';
import '../styles/AppRouter.css';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('');


  const tabs = [{ text: 'Inico', id: '1', url: '/' }, { text: 'Categorias', id: '2', url: '/categories' }]

  const handleClickLogin = () => {
    setLoggedIn(true)
  }

  const handleClickLogOut = () => {
    setLoggedIn(false)
  }

  const handleClickSearch = (val) => {
    setValue(val);
  }

  const handleClickFilter = (val) => {
    setFilter(val);
  }

  return (
    <HashRouter>
      <Header logged={loggedIn} user={{ name: 'Cristian' }} login={() => handleClickLogin()} logOut={() => handleClickLogOut()} />
      <div className='container-routes'>
        {loggedIn && <Menu tabs={tabs} search={handleClickSearch} filter={handleClickFilter}
          color='white' backgroundColor={'transparent'} tabHeight={'40px'}
          tabsWidth={'100px'} backgroundColorGeneral={'black'} starterSelectedTab={'1'}
          selectedColor={'white'}/>}
        <div className='routes'>
        <Routes >
          <Route exact path="/" element={loggedIn ? (<Home />) : (<Login />)} />
          <Route exact path="/categories" element={loggedIn ? (<Categories  searchValue={value} filterValue={filter}/>) : (<Login />)} />
          <Route path="/movies/:id" element={loggedIn ? (<Movie />) : (<Login />)} />
          <Route exact path="/login" element={!loggedIn ? (<Login />) : (<Home />)} />
        </Routes >
        </div>
      </div>
      <Footer />
    </HashRouter>
  )
}

export default AppRouter;
