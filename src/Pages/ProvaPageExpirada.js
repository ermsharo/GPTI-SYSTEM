import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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
column-gap: 5vw;
row-gap: 5vw;

`

const Avaliação = styled.div`
text-align: center;

padding-top: 64px;

`





const OurCardButton = (name, image , link, subtext) =>{

return(
(link) ?   <Link to = {link}>
<Card >
    <CardActionArea>
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
   {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
  {subtext}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </Link> : <Card >
    <CardActionArea>
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
   {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
  {subtext}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

)

}



export default function ProvaPageExpirada() {
  return (
      <>
      <Headers />
      <Grid>

      <div  style = {{cursor:'none',
opacity: 0.5}}>
    {OurCardButton('Fazer Prova','https://sbradioterapia.com.br/wp-content/uploads/2017/11/prova-alternativa.jpg')}
    </div>
    <div style = {{cursor:'none',
opacity: 0.5}}>

    {OurCardButton('Verificar Respostas','https://portalexamedeordem.com.br/wp-content/uploads/2019/08/corre%C3%A7%C3%A3o-632x474.jpg')}
    </div>


    </Grid>


    <Avaliação> 
    <Typography gutterBottom variant="h5" component="div">
    A avaliação expirou em DD/MM/AAAA
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          Nota final 0
          </Typography>
    </Avaliação>

    </>
  );
}