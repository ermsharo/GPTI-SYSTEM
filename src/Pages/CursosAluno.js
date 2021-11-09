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
import QuestaoDissertativa from '../Components/Prova/QuestãoDissertativa';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import { StepIcon } from '@mui/material';
import Headers from './../Components/Header/index';
import QuestaoMultiplaEscolha from '../Components/Prova/QuestãoMultiplaEscolha';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { borderTop } from '@mui/system';







const HeaderBox = styled.div`

width: 100%;
margin:auto;


`

const HeaderDisplay = styled.div`



display:flex; 

padding-top: 10px;
margin: auto;

`





const UserText = styled.div`
padding-left:10px;
padding-right: 10px;
line-height: 80px;


`


const PageBox = styled.div`
 
 width: 60vw;
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
               


<Button variant="contained" fullWidth >Acessar</Button>

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