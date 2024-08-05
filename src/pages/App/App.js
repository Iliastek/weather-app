import React from 'react';
import './App.css';
import settingsSVG from '../../images/svg/settings.svg'
import SettingsCog from '../../components/SettingsCog';
import Home from '../Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Settings from '../Settings/Settings';
import sunSvg from '../../images/svg/sun.svg'

function App() {
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
