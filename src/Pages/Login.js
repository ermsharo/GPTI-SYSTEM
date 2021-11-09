import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import styled from 'styled-components'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";




const Grid = styled.div`

display: grid; 
grid-template-columns: 1fr 1fr ;
width: 60vw;
margin: auto;
margin-top: 20vh;

`

const ForgetPassword = styled.div`

color : purple; 
padding: 16px;


`

const LogoBox = styled.div`
display: flex;
justify-content: center;

img{
    width: 50%;
    margin: auto;
}

`

const LoginBox = styled.div`

width: 100%;
border: 2px solid black; 

`
const FormPading = styled.div`

padding: 16px;

`


export default function UseFormControl() {
  return (
      <Grid>
    <LoginBox>
    
      <FormControl  fullWidth >
          <FormPading>
      <OutlinedInput placeholder="Usuario" fullWidth />
        </FormPading>

        <FormPading>
        <OutlinedInput placeholder="Senha"  fullWidth/>
        </FormPading>

    <FormPading>

        <Link to="/home"><Button variant="contained" fullWidth >Contained</Button></Link>
        </FormPading>
        <ForgetPassword>Esqueceu a senha</ForgetPassword>
      </FormControl>

      
    </LoginBox>
    <LogoBox >
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Logo_EACH-USP.svg/2090px-Logo_EACH-USP.svg.png" />


    </LogoBox>
    </Grid>
  );
}