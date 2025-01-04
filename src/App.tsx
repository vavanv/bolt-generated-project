import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
    import { Home, Login } from '@mui/icons-material';
    import { Outlet, Link } from 'react-router-dom';

    const drawerWidth = 240;

    export default function App() {
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/login">
                    <ListItemIcon>
                      <Login />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Outlet />
          </Box>
        </Box>
      );
    }
