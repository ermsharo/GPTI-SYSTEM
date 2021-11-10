import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Button from '@material-ui/core/Button';
import Icon from '@mui/material/Icon';
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
  grid-template-columns: 70% 30%;

`


const ButtonBoxBullet = styled.div`

 padding: 24px;
 display: flex;
 flex-direction: column;
 row-gap: 16px;


`





  const currencies = [
    {
      value: 'USD',
      label: '2º semestre/2021',
    },
    {
      value: 'EUR',
      label: '1º semestre/2021',
    },
    {
      value: 'BTC',
      label: '2º semestre/2020',
    },
    {
      value: 'JPY',
      label: '1º semestre/2020',
    },
  ];

export default function CadastroPergunta() {

  
  const [currency, setCurrency] = React.useState('EUR');

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


    <TextField id="outlined-basic" label="Código" variant="outlined" fullWidth/>
    <br/><br/>
    <TextField id="outlined-basic" label="Disciplina" variant="outlined" fullWidth />
    <br/><br/>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField 
          id="outlined-select-currency"
          select
          label="semestre / ano"
          value={currency}
          onChange={handleChange}
       
          fullWidth
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      
      </div>
    
    </Box>

    </CadastroBoxBullet>
    <ButtonBoxBullet>

<Button variant="contained" color = "primary" >Importar alunos  &nbsp; <Icon color="white">upload</Icon> </Button>



<Button variant="contained" color = "primary" >Gerar Link 
de Ingresso  &nbsp; <Icon color="white">link</Icon> </Button>


    </ButtonBoxBullet>

    </FormBoxBullet>

   <Link to = "/perguntas"> <Button variant="contained" color = "primary" fullWidth >Criar pergunta  &nbsp; <Icon color="white">check</Icon> </Button> </Link>
      </PageBox>
      </div>
    </>
  );
}