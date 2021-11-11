  
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

@media(max-width: 1200px){
  grid-template-columns: 1fr;

 }



`

const PageBox = styled.div`
 width: 60vw; 
 margin: auto;

 @media(max-width: 1200px){
  width: 90vw; 
 }



 

`


const TableBox = styled.div`

margin-top: 64px;
`











export default function TurmasProfessor() {
  return (
<>
    <Headers/>
<PageBox>
  


<TableBox> 
<Paper elevation={1} style = {{padding: '32px'}}>
<Table>
      <Thead >
        <Tr >
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Código  </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center" >Disciplina </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center" >Sem/Ano  </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Alunos Matriculados </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Situação </Typography></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr style = {{color: '#797979'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "/lista_alunos">   <DescriptionIcon/>  XYZ 1 </Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Engenharia de Sistemas II  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">  2º/2021</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> 30 </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center" style = {{color :'#8AC249'}} > Ativo </Typography></Td>
        </Tr>
        <Tr style = {{color: '#797979'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "/lista_alunos">   <DescriptionIcon/>  XYZ 2 </Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Engenharia de Sistemas I  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">  1º/2021</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> 30 </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div">
                  <Link to = "/turmas">
                    <Button variant="contained" >Finalizar</Button>
                  </Link>
                </Typography></Td>
        </Tr>

        <Tr style = {{color: '#797979'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "/lista_alunos">   <DescriptionIcon/>  XYZ 3 </Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Engenharia de Sistemas III  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">  2º/2021</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> 30 </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center" style = {{color :'#8AC249'}} > Ativo </Typography></Td>
        </Tr>


   

        
   
        
      </Tbody>
    </Table>


  </Paper>
  <br/>
  <br/>



</TableBox>
<div>
  <Link to = "/adicionar_turma"><Button variant="contained" color = "primary" fullWidth>Adicionar turma  &nbsp; <Icon color="white">add_circle</Icon> </Button></Link>

</div>
   </PageBox>
   </>
  );
}