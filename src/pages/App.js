import React from 'react';
import './App.css';
import settingsSVG from '../images/svg/settings.svg'
import SettingsCog from '../components/SettingsCog';
import Home from './Home';
import Settings from './Settings';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
           <BrowserRouter>
    <header className='header'>
        Good Morning!
        <SettingsCog imageSrc={settingsSVG} />
      </header>
      <Routes>
        <Route path="/" element={<App/>}/>
          <Route index element={<Home />} />
          <Route path="/settings" element={<Settings />} />        
      </Routes>
    <footer className='footer'>
      <Link to="/">Home</Link>
        </footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
