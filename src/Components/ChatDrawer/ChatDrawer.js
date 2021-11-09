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

export default function SwipeableTemporaryDrawer({

    chatStatus,ChatStatusChange

}) {



 

  return (
    <div>
   

 
          <SwipeableDrawer
            anchor='left'
            open={chatStatus}
            onClose={ChatStatusChange}
            onOpen={ChatStatusChange}
          >
  <div> Nosso grande chat aqui</div>
          </SwipeableDrawer>

    
    </div>
  );
}
