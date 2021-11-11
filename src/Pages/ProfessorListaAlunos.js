  
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
<Paper elevation={1} style = {{padding: '32px'}}>
<Table>
      <Thead >
        <Tr >
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Número  </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center" >Nome </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center" >Email  </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Data de Inscrição </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Situação </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Opção </Typography></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr style = {{color: '#797979'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "">   <DescriptionIcon/>  111111 </Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">José Rubinho  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> rubinho@usp.br</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> 11/05/2021</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"style = {{color :'#8AC249'}}> Ativa</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div">
                  <Link to = "">
                    <Button variant="contained" >Editar</Button>
                  </Link>
                  <Link to = "">
                    <Button variant="contained" >Finalizar</Button>
                  </Link>
                </Typography></Td>
        </Tr>
        <Tr style = {{color: '#797979'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "">   <DescriptionIcon/>  222222 </Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Carina Carol  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">carina@usp.br</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">15/04/2021</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center" style = {{color :'#eb4034'}}>Finalizada</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div">
                  <Link to = "">
                    <Button variant="contained" >Editar</Button>
                  </Link>
                  <Link to = "">
                    <Button variant="contained" >Finalizar</Button>
                  </Link>
                </Typography></Td>
        </Tr>

        <Tr style = {{color: '#797979'}}>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"><Link to = "">   <DescriptionIcon/>  333333 </Link>    </Typography> </Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Balu Astolfo </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> balu@usp.br</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">20/05/2021 </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center" style = {{color :'#8AC249'}}> Ativa</Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div">
                  <Link to = "">
                    <Button variant="contained" >Editar</Button>
                  </Link>
                  <Link to = "">
                    <Button variant="contained" >Finalizar</Button>
                  </Link>
                </Typography></Td>

        </Tr>


   

        
   
        
      </Tbody>
    </Table>


  </Paper>
  <br/>
  <br/>



</TableBox>
<div>
  <Link to = ""><Button variant="contained" color = "primary" fullWidth>Link para Ingressão  &nbsp; <Icon color="white">add_circle</Icon> </Button></Link>

</div>
   </PageBox>
   </>
  );
}