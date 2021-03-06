

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import {theme} from "../../App";


const HeaderBox = styled.div`

width: 100%;
margin:auto;


`

const HeaderDisplay = styled.div`


width: 100%;
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
padding-top: 12px;
`

const UserText = styled.div`
padding-left:10px;
padding-right: 10px;
padding-top: 5px;
`

export default function Header() {

  const [chatStatus, setChatStatus] = useState(false);

  const ChatStatusChange = () =>{
  
    setChatStatus(!chatStatus); 
  }

  return (
    <>
    <Box sx={{ flexGrow: 1, backgroundColor: 'primary.main'}} >
 
      <AppBar position="static">
      <HeaderBox>
        <Toolbar>
 
          <HeaderDisplay>
            
            <div style={{display: 'flex', flexDirection: "row", justifyContent: "center", alignItems: "center"}}>

            <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                      >
                <Link to="/home"><LogoBox>
<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Logo_EACH-USP.svg/2090px-Logo_EACH-USP.svg.png"/>
</LogoBox> </Link>  
          </IconButton>
          <Link to="/home_professor" underline="none" style={{textDecoration: "none"}}>
          <Typography gutterBottom variant="h6" component="div" style={{color: theme.palette.secondary.main, fontWeight: "bold"}}>
          Virtual Avalia
          </Typography>
          </Link>


</div>




    <UserBox>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
<UserText>  <Typography gutterBottom variant="h6" component="div">
  Rog??rio Satrah Ka
          </Typography></UserText>

    </UserBox>
    </HeaderDisplay>
        </Toolbar>

        </HeaderBox>
      </AppBar>
    </Box>


    </>
  );
}
