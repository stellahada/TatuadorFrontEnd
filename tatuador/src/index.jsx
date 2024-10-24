import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';


import Studio from './pages/studio';    
import Orcamento from './pages/orcamento';
import Footer from './pages/footer';
import Home from './pages/Home';
import Artista from './pages/artista';
import Feedbacks from './pages/feedbacks';
import Galeria from './pages/galeria'

import {register} from 'swiper/element/bundle'
register();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Galeria/>
    <Artista />
    <Feedbacks/>
    <Studio />
    <Orcamento />
    <Footer />
  </React.StrictMode>
);
