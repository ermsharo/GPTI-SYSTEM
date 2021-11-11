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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function QuestaoMultiplaEscolha({number, index}) {


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
        <FormControlLabel value="1" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
        <FormControlLabel value="2" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
        <FormControlLabel value="3" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
        <FormControlLabel value="4" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
        <FormControlLabel value="5" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
      </RadioGroup>
    </FormControl>
    </Box>
    </div>
  );
}
