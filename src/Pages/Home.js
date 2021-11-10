import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Badge from '@mui/material/Badge';
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




const OurCardButton = (name, image , link, subtext) =>{

  return(
    <Link to = {link}>
   
                    
    <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
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
   
      </Link>
  )
  
  }



export default function UseFormControl() {
  return (
      <>
      <Headers />
      <Grid>

    <div>

      
    {OurCardButton('Seus cursos','asdasd',"/cursos_aluno")}
    </div>

    <div>
    {OurCardButton('Avaliações pendentes','asdasd','/avaliacoes_pendentes')}
    </div>

    <div>
    {OurCardButton('Revisões','asdasd', "/revisoes_aluno")}
    </div>



    </Grid>
    </>
  );
}