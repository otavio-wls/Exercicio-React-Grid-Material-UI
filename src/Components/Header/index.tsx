import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  '@global' : {
    margin: 0,
    padding: 0,
  },
  root: {
    flexGrow: 1,
  },
  appBar: {
    display: 'flex',
    backgroundColor: '#00008B',    
  },
  title:{
    flexGrow: 1,
  },
  button:{
    color: '#fff',
  }
 }));

export default function Header() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title}>Clinica Saúde 10</Typography>
          <Link to={'/especialidades'}><Button className={classes.button} color="inherit">Especialidades</Button></Link>
          <Link to={'/'}><Button className={classes.button} color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>  
    </div>
    
  );
}