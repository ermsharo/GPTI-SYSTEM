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
import DescriptionIcon from '@mui/icons-material/Description';
import Typography from '@mui/material/Typography';



const ProvaBox = styled.div`



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
      <ProvaBox>
         <Typography gutterBottom variant="h4" component="div">
       <DescriptionIcon/>  PROVA 01 - Banco de dados 
          </Typography>

    </ProvaBox>
  );
}