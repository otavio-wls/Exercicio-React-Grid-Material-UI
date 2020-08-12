import React from 'react';
import { CssBaseline, Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#00008B',
    color: '#fff',
  },
  typography: {
    widht: 20,    
  }, 
 }));

export default function Footer() {
  const classes = useStyles();
  return(
    <div>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" className={classes.typography}>Clinica Saúde 10</Typography>
          
        </Container>
      </footer>
    </div>
    
  );
}