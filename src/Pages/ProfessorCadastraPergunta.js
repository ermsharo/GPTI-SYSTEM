import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Button from '@material-ui/core/Button';
import Icon from '@mui/material/Icon';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {
  BrowserRouter as Router,
  Link,
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

 padding: 16px;
 display: flex;
 flex-direction: column;
 row-gap: 16px;

`

export default function CadastroPergunta() {
  const [question, setQuestion] = React.useState('');
  const [ops, setOps] = React.useState('');
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };
  const handleChange2 = (event) => {
    setOps(event.target.value);
  };
  const handleChange3 = (event) => {
    setValue(event.target.value);
  };
  


  return (
      <>
      <Headers />
      <div>
      <PageBox> 
      <Typography gutterBottom variant="h4" component="div">

Cadasto de pergunta
     </Typography>
    
    <FormBoxBullet>

    <CadastroBoxBullet>

    <TextField id="outlined-basic" label="Título" variant="outlined" fullWidth/>
    <br/><br/>
    <TextField id="outlined-basic" label="Matéria" variant="outlined" fullWidth />
    <br/><br/>
    <TextField id="outlined-basic" label="Tema" variant="outlined" fullWidth />
    <br/><br/>
    <TextField id="outlined-basic" label="Dificuldade" variant="outlined" fullWidth />
    <br/><br/>
    <TextField id="outlined-basic" label="Enunciado" variant="outlined" fullWidth />
    <br/><br/>
    <TextField id="outlined-basic" label="Comentário" variant="outlined" fullWidth />
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
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Tipo de Questão</InputLabel>
        <Select sx={{display: 'flex', flexDirection: 'column'}}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={question}
          label="Tipo de questão"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Dissertativa</em>
          </MenuItem>
          <MenuItem value={10}>Optativa</MenuItem>
          <MenuItem value={20}>Multipla Escolha</MenuItem>
        </Select>
      </FormControl>
        
      
      </div>
    </Box>

    </CadastroBoxBullet>

    <ButtonBoxBullet>
    <div>
      <TextField
          id="outlined-multiline-flexible"
          label="opções"
          multiline
          rows={4}
          value={value}
          onChange={handleChange3}
          fullWidth
        />

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Tipo de Questão</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={ops}
          label="Opção Correta"
          onChange={handleChange2}
        >
          <MenuItem value="">
            <em>Optativa 1</em>
          </MenuItem>
          <MenuItem value={10}>Optativa 2</MenuItem>
          <MenuItem value={20}>Optativa 3</MenuItem>
          <MenuItem value={20}>Optativa 4</MenuItem>
          <MenuItem value={20}>Optativa 5</MenuItem>
        </Select>
      </FormControl>
      </div>
    </ButtonBoxBullet>
    
    </FormBoxBullet>

   <Link to = "/perguntas"> <Button variant="contained" color = "primary" fullWidth >Criar pergunta  &nbsp; <Icon color="white">add_circle</Icon> </Button> </Link>
      </PageBox>
      </div>
    </>
  );
}