import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
// import { Router, RouterProvider } from 'react-router-dom';
// import { router } from './Router/Router.jsx';
import { Provider } from 'react-redux';
import { store } from './redux-rtk/app/store.js';
import { Toaster } from 'react-hot-toast';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { router } from './Router/Router.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>


        <App />

      </ThemeProvider>
    </Provider>
  </React.StrictMode>
  ,
)
