import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import Paper from '@mui/material/Paper';

const Grid = styled.div`

display: grid; 
grid-template-columns: 1fr 1fr ;
width: 60vw;
margin: auto;
margin-top: 20vh;
column-gap: 5vw;
row-gap: 5vw;

`
const PageBox = styled.div`

width: 60vw;
margin: auto;

`



const ProvaButton = styled.div`

 display: flex;
 flex-direction: column;
 text-align: center; 

`
const DisplayGrid = styled.div`
display: grid; 
 grid-template-columns: 1fr 1fr 1fr 1fr;
 padding: 64px; 
 column-gap: 24px;
 row-gap: 24px;

`


const OurAvaliation = (name, status) =>{


  let statusColor; 

if(status == 0){
  statusColor = "#797979"
}

if(status == 1){
  statusColor = "#8AC249"
}
if(status == 2){
  statusColor = "#F34235"
}
if(status == 3){
  statusColor = "#fe9700"
}



  return(
    <Link to = "/prova">
   <Paper elevation={1} style = {{padding: '16px'}}>
   <ProvaButton style ={{color: statusColor}}>
    <div>
    <DescriptionIcon style ={{fontSize: '64px'}}/>
    </div>
    <div>
    <Typography gutterBottom variant="h5" component="div">
       {name}
    </Typography>
    </div>
   </ProvaButton>
   </Paper>
      </Link>
  )
  
  }



export default function UseFormControl() {
  return (
      <>
      <Headers />
      <PageBox>
      <DisplayGrid>
{OurAvaliation('avaliacao 01', 0)}
{OurAvaliation('avaliacao 02', 2)}
{OurAvaliation('avaliacao 03', 3)}
{OurAvaliation('avaliacao 04', 1)}
{OurAvaliation('avaliacao 05', 0)}
{OurAvaliation('avaliacao 06', 1)}
</DisplayGrid>


    </PageBox>
    </>
  );
}