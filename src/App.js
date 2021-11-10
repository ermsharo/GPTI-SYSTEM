import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Login from './Pages/Login';
import Home from './Pages/Home';
import ProvaPageNew from './Pages/ProvaPageNew';
import Prova from './Pages/Prova';
import CursosAluno from './Pages/CursosAluno';
import PaginaCurso from './Pages/PaginaCurso';
import ProvaPageReview from './Pages/ProvaPageReview'; 
import AvaliacoesPendentes from './Pages/AvaliacoesPendentes';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
/* import * as serviceWorker from "./serviceWorker"; */
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import ProvaReview from './Pages/ProvaReview';
import ProvaReviewProfessor from './Pages/ProvaReviewProfessor';
import ProvaPageExpirada from './Pages/ProvaPageExpirada';
import HomeRevisoes from './Pages/HomeRevisões';
import HomeProfessor from './Pages/HomeProfessor';
import TurmasProfessor from './Pages/TurmasProfessor';
import CadastroTurma from './Pages/CadastroTurma';
import PerguntasProfessor from './Pages/ProfessorPerguntas';
import CadastroPerguntaProfessor from './Pages/ProfessorCadastraPergunta'; 
function App() {
  return (
    <>

<BrowserRouter>
    <StyledEngineProvider injectFirst>





    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/prova_home_new" element={<ProvaPageNew />} />
        <Route path="/prova_home_review" element={<ProvaPageReview/>} />
        <Route path="/prova" element={<Prova />} />   
        <Route path="/prova_review" element={<ProvaReview />} />  
        <Route path="/prova_review_professor" element={<ProvaReviewProfessor />} /> 
        <Route path="/prova_expirada" element={<ProvaPageExpirada />} />   
        <Route path="/avaliacoes_pendentes" element={<AvaliacoesPendentes />} />  
        <Route path="/cursos_aluno" element={<CursosAluno />} />  
        <Route path="/pagina_curso" element={<PaginaCurso />} />  
        <Route path="/revisoes_home" element={<HomeRevisoes />} />  
        <Route path="/home_professor" element={<HomeProfessor />} />  
        <Route path="/turmas" element={<TurmasProfessor />} />  
        <Route path="/adicionar_turma" element={<CadastroTurma />} /> 
        <Route path="/perguntas" element={<PerguntasProfessor />} />  
        <Route path="/adicionar_pergunta" element={<CadastroPerguntaProfessor />} /> 
        
        
           </Routes>


  </StyledEngineProvider>
</BrowserRouter>
    </>
  );
} 

export default App;
