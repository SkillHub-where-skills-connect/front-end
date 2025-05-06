import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './Header.css';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <List className="drawer-list">
      <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about">
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/community">
        <ListItemText primary="Community" />
      </ListItem>
      <ListItem button component={Link} to="/contact">
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem button component={Link} to="/events">
        <ListItemText primary="Events" />
      </ListItem>
      <ListItem button component={Link} to="/skills-services">
        <ListItemText primary="Skills Services" />
      </ListItem>
      <ListItem button component={Link} to="/support-faqs">
        <ListItemText primary="Support FAQs" />
      </ListItem>
      <ListItem button component={Link} to="/license">
        <ListItemText primary="License" />
      </ListItem>
      <ListItem button component={Link} to="/login">
        <ListItemText primary="Login" />
      </ListItem>
      <ListItem button component={Link} to="/register">
        <ListItemText primary="Register" />
      </ListItem>
      <ListItem button component={Link} to="/forgotpassword">
        <ListItemText primary="Forgot Password" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <Typography variant="h6" className="logo">
                 
        </Typography>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerList}
            </Drawer>
          </>
        ) : (
          <div className="desktop-menu">
            <
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/community">Community</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/events">Events</Button>
            <Button color="inherit" component={Link} to="/skills-services">Skills Services</Button>
            <Button color="inherit" component={Link} to="/support-faqs">Support FAQs</Button>
            <Button color="inherit" component={Link} to="/license">License</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            {/* <Button color="inherit" component={Link} to="/register">Register</Button>
            <Button color="inherit" component={Link} to="/forgotpassword">Forgot Password</Button> */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;