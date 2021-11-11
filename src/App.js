import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Routes, Route, Link } from "react-router-dom";

/* import * as serviceWorker from "./serviceWorker"; */
import Login from './Pages/Login';
import Home from './Pages/Home';
import ProvaPageNew from './Pages/ProvaPageNew';
import Prova from './Pages/Prova';
import CursosAluno from './Pages/CursosAluno';
import ProvaPageReview from './Pages/ProvaPageReview'; 
import PaginaCurso from './Pages/PaginaCurso';
import AvaliacoesPendentes from './Pages/AvaliacoesPendentes';
import './App.css';
import ProvaReview from './Pages/ProvaReview';
import ProvaReviewAluno from './Pages/ProvaReviewAluno';
import ProvaReviewProfessor from './Pages/ProvaReviewProfessor';
import ProvaPageExpirada from './Pages/ProvaPageExpirada';
import HomeRevisoes from './Pages/HomeRevisões';
import HomeProfessor from './Pages/HomeProfessor';
import TurmasProfessor from './Pages/TurmasProfessor';
import CadastroTurma from './Pages/CadastroTurma';
import PerguntasProfessor from './Pages/ProfessorPerguntas';
import CadastroPerguntaProfessor from './Pages/ProfessorCadastraPergunta'; 
import CadastroTurmaProfessor from './Pages/ProfessorCadastraTurma'; 
import PerguntaProfessor from './Pages/PerguntaReview'; 
import ProvasProfessor from './Pages/ProfessorProvas'; 
import ListaAlunosProfessor from './Pages/ProfessorListaAlunos'; 
import ListaProvasTurmaProfessor from './Pages/ProfessorListaProvasTurma'; 

export let theme = createTheme({
  palette: {
    primary: {
      main: "#639fff",
    },
    secondary: {
      main: "#ffd18c",
    },
    success: {
      main: "#8AC249"
    },
    progress: {
      main: "#797979"
    },
    warning: {
      main: "#FE9700"
    },
    failed: {
      main: "#f34235"
    }
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
    <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/prova_home_new" element={<ProvaPageNew />} />
              <Route path="/prova_home_review" element={<ProvaPageReview/>} />
              <Route path="/prova" element={<Prova />} />   
              <Route path="/prova_review" element={<ProvaReview />} />  
              <Route path="/prova_review_aluno" element={<ProvaReviewAluno />} />  
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
              <Route path="/adicionar_turma" element={<CadastroTurmaProfessor />} /> 
              <Route path="/pergunta" element={<PerguntaProfessor />} /> 
              <Route path="/provas_professor" element={<ProvasProfessor />} /> 
              <Route path="/lista_alunos" element={<ListaAlunosProfessor />} /> 
              <Route path="/lista_provas_turma" element={<ListaProvasTurmaProfessor />} /> 
            </Routes>
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
</>
  );
} 

export default App;
