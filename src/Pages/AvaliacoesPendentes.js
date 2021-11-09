
import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import DescriptionIcon from '@mui/icons-material/Description';

const FirstLine = styled.div`

display: grid; 
grid-template-columns: 1fr 1fr ;
column-gap: 64px;
margin-top: 64px;


`

const PageBox = styled.div`
 width: 60vw; 
 margin: auto;



 

`


const TableBox = styled.div`

margin-top: 64px;
`

const Link = styled.a`

`










export default function AvaliacoesPendentes() {
  return (
<>
    <Headers/>
<PageBox>
  

<FirstLine>

<Paper elevation={1}  style = {{padding: '32px'}}>      <Typography gutterBottom variant="h4" component="div">
Nome/codigo do curso
            </Typography></Paper>
<Paper elevation={1}   style = {{padding: '32px'}} >      <Typography gutterBottom variant="h4" component="div">
Descrição /Informações úteis
            </Typography></Paper>

</FirstLine>
<TableBox> 
<Paper elevation={1} style = {{padding: '32px'}}>
<Table>
      <Thead >
        <Tr >
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Revisão  </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Status  </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Data limite para questionamento  </Typography></Th>
          <Th> <Typography gutterBottom variant="h5" component="div" align = "center">Nota </Typography></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> <Link> <DescriptionIcon/>   Avaliação 1  </Link>   </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">A Revisar  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">DD/MM/AAAA  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Nota  </Typography></Td>
        </Tr>
        <Tr>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> <Link> <DescriptionIcon/>   Avaliação 2  </Link>   </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">A Revisar  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">DD/MM/AAAA  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Nota  </Typography></Td>
        </Tr>
        <Tr>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> <Link> <DescriptionIcon/>   Avaliação 3  </Link>   </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">A Revisar  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">DD/MM/AAAA  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Nota  </Typography></Td>
        </Tr>
        <Tr>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center"> <Link> <DescriptionIcon/>   Avaliação 4  </Link>   </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">A Revisar  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">DD/MM/AAAA  </Typography></Td>
          <Td><Typography gutterBottom variant="h6" component="div" align = "center">Nota  </Typography></Td>
        </Tr>
   
        
      </Tbody>
    </Table>
  </Paper>
</TableBox>
   </PageBox>
   </>
  );
}