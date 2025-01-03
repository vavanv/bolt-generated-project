import React, { useState } from 'react';
    import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
    import MenuIcon from '@mui/icons-material/Menu';

    const App = () => {
      const [open, setOpen] = useState(false);

      const toggleDrawer = () => {
        setOpen(!open);
      };

      const menuItems = ['Home', 'Login'];

      return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Sliding Menu App</Typography>
            </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={open} onClose={toggleDrawer}>
            <List>
              {menuItems.map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
      );
    };

    export default App;
