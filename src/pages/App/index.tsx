import React from 'react';
import './App.css';
const settingsSVG = require('../../images/svg/settings.svg').default;
import SettingsCog from '../../components/SettingsCog/index.tsx';
import Home from '../Home/index.tsx';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
const sunSvg = require('../../images/svg/sun.svg').default;
import Settings from '../Settings/index.tsx';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className='header'>
          Good Morning!
          <SettingsCog imageSrc={settingsSVG} />
        </header>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <footer className='footer'>
          <Link to="/">
            <img className="home_buttonSvg" src={sunSvg} alt='The sun' />
          </Link>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
