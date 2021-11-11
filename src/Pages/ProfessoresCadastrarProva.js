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

/* import { DataGrid } from '@mui/x-data-grid'; */

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


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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

Cadasto de turma
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

   

    <div style={{ height: 400, width: '100%' }}>
{/*       <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    </div>



<Button variant="contained" color = "primary" >Importar alunos  &nbsp; <Icon color="white">upload</Icon> </Button>



<Button variant="contained" color = "primary" row = {10}>Gerar Link 
de Ingresso  &nbsp; <Icon color="white">link</Icon> </Button>


    </ButtonBoxBullet>

    </FormBoxBullet>

   <Link to = "/turmas"> <Button variant="contained" color = "primary" fullWidth >Criar turma  &nbsp; <Icon color="white">check</Icon> </Button> </Link>
      </PageBox>
      </div>
    </>
  );
}