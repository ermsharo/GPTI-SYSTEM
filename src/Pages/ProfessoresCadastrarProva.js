import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import {DataTable, createDataProvasProfessor} from "../Components/TableAvaliacao/Table"
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Button from '@material-ui/core/Button';
import Icon from '@mui/material/Icon';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";


const PageBox = styled.div`
 width: 60vw; 
 margin: auto;
margin-top: 64px;
 @media(max-width: 1200px){
  width: 90vw; 
 }

`


const CadastroBoxBullet = styled.div`


`


const FormBoxBullet = styled.div`

  padding: 16px;
  display: grid;
  grid-template-columns: 50% 50%;


  @media(max-width: 1200px){
    grid-template-columns: 100% ;
  }

`


const ButtonBoxBullet = styled.div`

 padding: 24px;
 display: flex;
 flex-direction: column;
 row-gap: 16px;


`





  const questoes = [
    {
      value: 'Dissertativa',
      label:'ACH1234',
    },
    {
      value: 'Optativa',
      label:'ACH1235',
    },
    {
      value: 'Multipla escolha',
      label:'ACH1236',
    },
  ];



  const alunos = [
    {
      value: 'Dissertativa',
      label:'Aluno 1',
    },
    {
      value: 'Optativa',
      label:'Aluno 2',
    },
    {
      value: 'Multipla escolha',
      label:'Aluno 3',
    },
  ];







  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  
  const rows = [
    createData('1', "tema 1", "1","Facil"),
    createData('1', "tema 2", "3","Médio"),
    createData('1', "tema 3", "5","Dificil"),
    createData('1', "tema 4", "7","Dificil"),
  
  ];
  



export default function CadastroTurma() {

  
  const [currency, setCurrency] = React.useState('Dissertativa');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
      <>
      <Headers />
      <div>
      <PageBox> 
      <Typography gutterBottom variant="h4" component="div">

Cadasto de prova 
     </Typography>
    
    <FormBoxBullet>

    <CadastroBoxBullet>


    <TextField id="outlined-basic" label="Titulo" variant="outlined" fullWidth/>
    <br/><br/>


    <div>
        <TextField 
          id="outlined-select-currency"
          select
          label="Turma"
          value={currency}
          onChange={handleChange}
       
          fullWidth
        >
          {questoes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      
      </div>
    <br/><br/>

    <TextField id="outlined-basic" label="Duração" variant="outlined" fullWidth />
    <br/><br/>
    <TextField id="outlined-basic"    
      helperText="Data inicio"    variant="outlined" fullWidth type = "date" defaultValue = {null}/>
    <br/><br/>

    <TextField id="outlined-basic"    
      helperText="Data submissão:"    variant="outlined" fullWidth type = "date" defaultValue = {null}/>
    <br/><br/>

    <TextField id="outlined-basic"    
      helperText="Data revisão:"    variant="outlined" fullWidth type = "date" defaultValue = {null}/>
    <br/><br/>


    <div>
        <TextField 
          id="outlined-select-currency"
          select
          label="Turma"
          value={currency}
          onChange={handleChange}
       
          fullWidth
        >
          {alunos.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      
      </div>
    <br/><br/>
   

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
  
    
    </Box>

    </CadastroBoxBullet>
    <ButtonBoxBullet>

   

    <TableContainer component={Paper}>
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Quantidade</TableCell>
            <TableCell align="right">Tema</TableCell>
            <TableCell align="right">Peso</TableCell>
            <TableCell align="right">Dificuldade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
    
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>




    </ButtonBoxBullet>

    </FormBoxBullet>




    <ButtonBoxBullet>

   

   



    </ButtonBoxBullet>




   <Link to = "/provas_professor"> <Button variant="contained" color = "primary" fullWidth >Voltar    </Button> </Link>
  <br/> <br/>
  <Link to = "/provas_professor"> <Button variant="contained" color = "primary" fullWidth > Confirmar  </Button> </Link>
    
      </PageBox>
      </div>
    </>
  );
}