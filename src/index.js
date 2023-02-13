import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import App from './App';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import ProgramInfo from '../src/pages/ProgramInfo';
// import {Route, Link} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
     element: <App/>,
  },
  {
    path: 'program',
     element: <ProgramInfo/>,
  },
])
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
  
);
