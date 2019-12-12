import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const Panel = () => <AppBar position="static">
    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6" >
        App
      </Typography>
      <Link component={Button} color="inherit" to='/'>Home</Link>
    </Toolbar>
  </AppBar>
