import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Headline from './components/headline'
import Footer from './components/footer'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Headline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

