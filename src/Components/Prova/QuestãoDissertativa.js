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
export default function QuestaoDissertativa({number, index}) {


  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
         <Typography gutterBottom variant="h4" component="div">
          Questão {number}
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
          <TextField
          id="outlined-multiline-flexible"
          label="resposta"
          multiline
          rows={4}
          value={value}
          onChange={handleChange}
          fullWidth
        />
    </Box>
    </div>
  );
}
