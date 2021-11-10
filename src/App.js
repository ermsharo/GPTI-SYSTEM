import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Login from './Pages/Login';
import Home from './Pages/Home';
import ProvaPageNew from './Pages/ProvaPageNew';
import Prova from './Pages/Prova';
import CursosAluno from './Pages/CursosAluno';
import PaginaCurso from './Pages/PaginaCurso';
import AvaliacoesPendentes from './Pages/AvaliacoesPendentes';
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
        <Route path="/prova_home_new" element={<ProvaPageNew />} />
        <Route path="/prova_home_review" element={<ProvaPageNew />} />
        <Route path="prova" element={<Prova />} />   
        <Route path="avaliacoes_pendentes" element={<AvaliacoesPendentes />} />  
        <Route path="cursos_aluno" element={<CursosAluno />} />  
        <Route path="/pagina_curso" element={<PaginaCurso />} />  
        
           </Routes>


  </StyledEngineProvider>
</BrowserRouter>
    </>
  );
} 

export default App;
