  
import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import Card from '@mui/material/Card';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import DescriptionIcon from '@mui/icons-material/Description';
import { Routes, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Icon from '@mui/material/Icon';
const FirstLine = styled.div`

display: grid; 
grid-template-columns: 1fr 1fr ;
column-gap: 64px;
margin-top: 64px;
row-gap: 64px;

@media(max-width: 600px){
  grid-template-columns: 1fr;

 }



`

const PageBox = styled.div`
 width: 60vw; 
 margin: auto;

 @media(max-width: 1200px){
  width: 90vw; 
  font-size: 1.25rem;
 }



 

`


const TableBox = styled.div`

margin-top: 64px;
`











export default function ListaAlunosProfessor() {
  return (
<>
    <Headers/>
<PageBox>
  


<TableBox> 
<Paper elevation={1} style = {{padding: '16px'}}>
<Table>
      <Thead >
        <Tr >
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Número  </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center" >Status </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center" >Nota </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Data de Submissão </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Duração </Typography></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr style = {{color: '#797979'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "">   <DescriptionIcon/>  111111 </Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Não Enviada  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> 0 </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> 21/06/2021</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> 0 min</Typography></Td>
        </Tr>
        <Tr style = {{color: '#FE9700'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "/prova_review_aluno">   <DescriptionIcon/>  222222 </Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Aguardando Revisão  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">4.5</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">15/05/2021</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">40 min</Typography></Td>
        </Tr>

        <Tr style = {{color: '#639fff'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "/prova_review_professor">   <DescriptionIcon/>  333333 </Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Revisada </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> 9</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">20/05/2021 </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> 35 min</Typography></Td>


        </Tr>
        <Tr style = {{color: '#8AC249'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "/prova_review">   <DescriptionIcon/>  444444 </Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Corrigida </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> 7</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">19/05/2021 </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> 15 min</Typography></Td>
        </Tr>
        <Tr style = {{color: '#eb4034'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "/professor_avaliar">   <DescriptionIcon/>  555555 </Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Não Corrigida </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> - </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">20/05/2021 </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> 27 min</Typography></Td>
        </Tr>


   

        
   
        
      </Tbody>
    </Table>


  </Paper>
  <br/>
  <br/>



</TableBox>
   </PageBox>
   </>
  );
}