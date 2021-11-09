

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import ChatDrawer from './../ChatDrawer/ChatDrawer';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

const HeaderBox = styled.div`

width: 100%;
margin:auto;


`

const HeaderDisplay = styled.div`


width: 70%;
display:flex; 
justify-content: space-around;
padding-top: 10px;
margin: auto;

`

const LogoBox = styled.div`

img{
  width: 40px; 
  height: 40px;
  

}
margin:auto; 


`

const UserBox = styled.div`

display: flex;


`

const UserText = styled.div`
padding-left:10px;
padding-right: 10px;
line-height: 80px;


`





export default function Header() {

  const [chatStatus, setChatStatus] = useState(false);

  const ChatStatusChange = () =>{
  
    setChatStatus(!chatStatus); 
  }
  


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
 
      <AppBar position="static">
      <HeaderBox>
        <Toolbar>
          <HeaderDisplay>
            <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick ={ChatStatusChange}
          >
          <Badge badgeContent={4} color="warning">
  <ChatBubbleIcon color="action" />
</Badge>
          </IconButton>


          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <Badge badgeContent={4} color="warning">
          <NotificationsIcon color="action" />
</Badge>
          </IconButton>

</div>
<LogoBox>
<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Logo_EACH-USP.svg/2090px-Logo_EACH-USP.svg.png"/>
</LogoBox>  

    <UserBox>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
<UserText>  <Typography gutterBottom variant="h6" component="div">
  usario@professor.com.br
          </Typography></UserText>

    </UserBox>
    </HeaderDisplay>
        </Toolbar>

        </HeaderBox>
      </AppBar>
    </Box>

 <ChatDrawer chatStatus = {chatStatus} ChatStatusChange = {ChatStatusChange}/>

    </>
  );
}
