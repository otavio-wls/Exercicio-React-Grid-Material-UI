import React, { Fragment, useState } from 'react';
import api from '../../api/api';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import { CssBaseline , Container, Typography, makeStyles, TextField, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) =>({
  root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '89vh',  
  },
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  main: {
    marginBottom: theme.spacing(2),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    borderColor: '#B22222',
  },
  submit:{
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#00008B',
    color: '#fff',
  }
}))

export default function Login() {
  const classes = useStyles(); 
    
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function logar(){    
    if(email.length ===0 || password.length === 0 ){
      alert('Os campos não podem ficarm em branco');      
      return;
    }
    api.post('users/login', {name: 'admin@', email: email , password: password})
    .then(function(response){
      alert(`Seja Bem Vindo ${response.data.user.name}`);    
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
            
            
    }).catch((err) => {
      if(err.response.status === 400){
        alert('Usuario ou Senha Inválidos');
      }else{
        alert(err.response.status);
      }
    });
    return logar();
  }


  return(
      <Fragment>   
        <Header />
        <div className={classes.root}>
          <CssBaseline />
          <Container component='main' maxWidth='xs' className={classes.main}>
            <div className={classes.paper}>
              <Typography component='h1' variant='h4'>Tela de Login</Typography>
              <form className={classes.form} noValidate>
                <TextField variant='outlined' margin='normal'  required fullWidth id="email" label="Endereço de Email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  autoFocus/>
                <TextField variant='outlined' margin='normal'  required fullWidth id="senha" label="Senha"
                  name="senha"
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="senha"
                  autoFocus/>
              </form>
              <Button onClick={logar} type='submit' fullWidth variant='contained' className={classes.submit}>
                Entrar</Button>
            </div>        
          </Container>
        </div>
        <Footer />
      </Fragment>
  );
}