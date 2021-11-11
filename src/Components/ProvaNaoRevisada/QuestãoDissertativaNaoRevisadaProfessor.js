import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { minHeight } from '@mui/system';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function QuestaoDissertativaNaoRevisadaProfessor({number, index}) {


  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const [open, setOpen] = React.useState(false);

  return (
    <div>
         <Typography gutterBottom variant="h4" component="div">
          Questão {number} (1.0)
          </Typography>

          <Typography gutterBottom variant="h6" component="div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. 
          Nullam ultricies, magna vel ultrices fermentum, ex ante laoreet mi, nec mollis tortor lacus et ligula
          </Typography>
<br/>
<br/>
          <Typography gutterBottom variant="h5" component="div" style = {{color: '#424242'}}>
         Sua resposta
          </Typography>

          <Typography gutterBottom variant="h6" component="div" style = {{color: '#424242'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. 
          Nullam ultricies, magna vel ultrices fermentum, ex ante laoreet mi, nec mollis tortor lacus et ligula
          </Typography>
          <br/>
<br/>
          <Typography gutterBottom variant="h5" component="div" style = {{color: '#81ac8d'}}>
         Resposta esperada

          </Typography>

          <Typography gutterBottom variant="h6" component="div" style = {{color: '#81ac8d'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. 
          Nullam ultricies, magna vel ultrices fermentum, ex ante laoreet mi, nec mollis tortor lacus et ligula
          </Typography>


          <br/>
          <br/>
          <Typography gutterBottom variant="h5" component="div" style = {{color: '#424242'}}>
         Comentarios do professor da primeira correção

          </Typography>

          <Typography gutterBottom variant="h6" component="div" style = {{color: '#424242'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. 
          Nullam ultricies, magna vel ultrices fermentum, ex ante laoreet mi, nec mollis tortor lacus et ligula
          </Typography>

          <br/>
          <br/>
          <Typography gutterBottom variant="h5" component="div" style = {{color: '#424242'}}>
         Pedido de revisão do aluno

          </Typography>

          <Typography gutterBottom variant="h6" component="div" style = {{color: '#424242'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. 
          Nullam ultricies, magna vel ultrices fermentum, ex ante laoreet mi, nec mollis tortor lacus et ligula
          </Typography>

          <br/>
        
<br/>
          <Typography gutterBottom variant="h5" component="div" >
         Nota antes da revisão  (0.5 / 1.0)

          </Typography>
<br/>

    
     
         
         
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90%'
  ,     
   margin : 'auto' },
      }}
      noValidate
      autoComplete="off"
      paddingTop = "16px"
      paddingBottom = "16px"
      



    >
    

    
    </Box>

    </div>
  );
}
