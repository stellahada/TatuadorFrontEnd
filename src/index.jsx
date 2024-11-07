import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';



import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Estoque from './pages/Estoque';
import Agenda from './pages/Agenda';


import {register} from 'swiper/element/bundle'
register();


export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} /> 
          <Route path="/Estoque" element={<Estoque />} /> 
          <Route path="/Agenda" element={<Agenda />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);