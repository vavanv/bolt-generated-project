import React from 'react';
    import { Container, Grid, Paper, Typography, TextField, Button } from '@mui/material';

    const App = () => {
      return (
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6">Menu</Typography>
                <Button fullWidth variant="contained" color="primary">Item 1</Button>
                <Button fullWidth variant="contained" color="primary">Item 2</Button>
                <Button fullWidth variant="contained" color="primary">Item 3</Button>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6">Form</Typography>
                <TextField label="Name" fullWidth margin="normal" />
                <TextField label="Email" type="email" fullWidth margin="normal" />
                <Button variant="contained" color="primary">Submit</Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      );
    };

    export default App;
