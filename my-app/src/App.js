import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Login from './Pages/Login';
import Home from './Pages/Home';
import ProvaPage from './Pages/ProvaPage';
import Prova from './Pages/Prova';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
/* import * as serviceWorker from "./serviceWorker"; */
import { Routes, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <>

<BrowserRouter>
    <StyledEngineProvider injectFirst>


   {/*  <Home/> */}
    {/*     <Login/> */}







    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="prova_home" element={<ProvaPage />} />
        <Route path="prova" element={<Prova />} />      </Routes>


  </StyledEngineProvider>
</BrowserRouter>
    </>
  );
} 

export default App;
