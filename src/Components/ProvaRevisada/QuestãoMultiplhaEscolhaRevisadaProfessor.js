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
import { fontWeight, minHeight } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function QuestaoMultiplaEscolha({number, index, correct}) {


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
         
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90%'
  ,     
   minHeight:'400px',
   margin : 'auto' },
      }}
      noValidate
      autoComplete="off"
      paddingTop = "16px"
      paddingBottom = "16px"
      



    >
            <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup
        aria-label=""
        defaultValue=""
        name="radio-buttons-group"
      >

        {correct? <div> <FormControlLabel style = {{color: '#81ac8d'}} value="1" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
        <FormControlLabel value="1" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " /></div>:
        
        <div><FormControlLabel style = {{color: '#81ac8d'}} value="1" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
        <FormControlLabel value="2"  style = {{color: '#e35241',
      fontWeight:'BOLDER'} }  control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " /></div>}


      
        <FormControlLabel value="3" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
        <FormControlLabel value="4" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
        <FormControlLabel value="5" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
      </RadioGroup>
    </FormControl>
<br/>
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
          <Typography gutterBottom variant="h5" component="div" style = {{color: '#424242'}}>
         Comentarios do professor após a revisão 

          </Typography>

          <Typography gutterBottom variant="h6" component="div" style = {{color: '#424242'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. 
          Nullam ultricies, magna vel ultrices fermentum, ex ante laoreet mi, nec mollis tortor lacus et ligula
          </Typography>



          <br/>
<br/>
          <Typography gutterBottom variant="h5" component="div" >
         Nota antes da revisão  (0.0 / 1.0)

          </Typography>

          <Typography gutterBottom variant="h5" component="div" >
         Nota após da revisão  (0.2 / 1.0)

          </Typography>
          <br/>
<br/>


    <br/>

<br/>


     
    </Box>
    <Dialog onClose={()=>{setOpen(!open)}} open={open}>
    <Box>
      <DialogTitle>

      <Typography gutterBottom variant="h5" component="div" >
      Escreva o seu pedido de revisão

          </Typography>

      </DialogTitle>
      <DialogContent>
          <DialogContentText>
          Prova 01 - Questão {number} 
          </DialogContentText>
          <br/> <br/>
          <TextField
          id="outlined-multiline-static"
          label="Pedido de revisão "
          multiline
          rows={4}
          defaultValue=""
        />

<br/>
<br/>
<br/>
<br/>

        <Button onClick={()=>{setOpen(!open)}} >
                Enviar pedido de revisão 
                 </Button>
        </DialogContent>



    </Box>
    </Dialog>
    </div>
  );
}
