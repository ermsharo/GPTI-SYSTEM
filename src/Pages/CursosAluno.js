import * as React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import Typography from '@mui/material/Typography';
import Headers from './../Components/Header/index';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import { Routes, Route, Link } from "react-router-dom";





const HeaderBox = styled.div`

width: 80%;
margin:auto;


`

const HeaderDisplay = styled.div`



display:flex; 

@media(max-width: 700px){
  display:block;
}

padding-top: 10px;
margin: auto;

`





const UserText = styled.div`
padding-left:10px;
padding-right: 10px;
line-height: 80px;


`


const PageBox = styled.div`
 
 width: 60%;
 margin: auto; 
 margin-top: 64px;


`



const MinhasMateriasComp = () =>{
    return(   

        <>
          <Box  style = {{marginTop : '16px'}}>
       
            <AppBar position="static" style = {{backgroundColor: '#fec006' , color: '#202020'}}>
            <HeaderBox>
              <Toolbar>
                <HeaderDisplay>
                    <UserText>  <Typography gutterBottom variant="h6" component="div">
                Materia 1 
                </Typography></UserText>
                <UserText>  <Typography gutterBottom variant="h6" component="div">
      Nome do professor
                </Typography></UserText>
                <UserText>  <Typography gutterBottom variant="h6" component="div">
                           <Badge badgeContent={4} color="warning">
                           <DescriptionIcon color = "action"/> 
      </Badge>
            
                </Typography></UserText>          
                <UserText>  <Typography gutterBottom variant="h6" component="div">
                  <Link to = "/pagina_curso">
                    <Button variant="contained" >Acessar</Button>
                  </Link>
                </Typography></UserText>  
      
                </HeaderDisplay>
              </Toolbar>
              </HeaderBox>
            </AppBar>
          </Box>
      
      
       </>
    )
}




export default function UseFormControl() {

return(<>
<Headers/>
<PageBox>
   { MinhasMateriasComp()}
   { MinhasMateriasComp()}
   { MinhasMateriasComp()}
   { MinhasMateriasComp()}
   </PageBox></>
)




}