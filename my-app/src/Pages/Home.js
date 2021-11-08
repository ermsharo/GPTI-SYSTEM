import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Grid = styled.div`

display: grid; 
grid-template-columns: 1fr 1fr ;
width: 60vw;
margin: auto;
margin-top: 20vh;
column-gap: 5vw;
row-gap: 5vw;

`




const OurCardButton = (name, image , subtext) =>{

  return(
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
  )
  
  }



export default function UseFormControl() {
  return (
      <>
      <Headers />
      <Grid>

    <div>
    {OurCardButton('Seus cursos','asdasd')}
    </div>

    <div>
    {OurCardButton('Avaliações pendentes','asdasd')}
    </div>

    <div>
    {OurCardButton('Revisões','asdasd')}
    </div>



    </Grid>
    </>
  );
}