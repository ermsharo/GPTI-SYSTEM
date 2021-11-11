              
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











export default function PerguntasProfessor() {
  return (
<>
    <Headers/>
<PageBox>
  


<TableBox> 
<Paper elevation={1} style = {{padding: '32px'}}>
<Table>
      <Thead >
        <Tr >
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Título  </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center" >Matéria </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center" >Tema  </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Ativo </Typography></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr style = {{color: '#797979'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "/pergunta">   <DescriptionIcon/> Pergunta 1</Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Engenharia de Sistemas...  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">  Boas Práticas</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Ativo </Typography></Td>
        </Tr>
       
        <Tr style = {{color: '#797979'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "/pergunta">   <DescriptionIcon/> Pergunta 2</Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Engenharia de Sistemas...  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">  Boas Práticas</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Ativo </Typography></Td>
        </Tr>

        <Tr style = {{color: '#797979'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "/pergunta">   <DescriptionIcon/> Pergunta 3</Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Gestão de projetos...  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">  Boas Práticas</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Ativo </Typography></Td>
        </Tr>

   

        
   
        
      </Tbody>
    </Table>


  </Paper>
  <br/>
  <br/>



</TableBox>
<div>
  <Link to = "/adicionar_pergunta"><Button variant="contained" color = "primary" fullWidth>Adicionar  pergunta &nbsp; <Icon color="white">add_circle</Icon> </Button></Link>

</div>
   </PageBox>
   </>
  );
}