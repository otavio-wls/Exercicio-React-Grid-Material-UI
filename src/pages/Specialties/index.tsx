import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import { Card, CardContent, Button, Typography, makeStyles, Grid } from '@material-ui/core';
import cardio from '../../assets/cardio.png';
import pediatra from '../../assets/pediatra.png';
import odonto from '../../assets/odonto.png';
import oftalmo from '../../assets/oftalmo.png';
import quiropraxia from '../../assets/quiro.png';
import endocrino from '../../assets/endocrino.png';
import fisio from '../../assets/fisio.png';

const useStyles = makeStyles({
  styleGridContainer:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 45,
    marginBottom: 32,
    width: '85%',
    alignItems: 'center',
  },
  root: {
    maxWidth: '100%',
    marginTop: 30,
  },
  title: {
    fontSize: 14,
  },
  img: {
    marginTop: 10,
    marginLeft: '28%',
    width: 100,
    height: 100,
  },
  button: {
    marginLeft: '20%',
    marginBottom: 15
  }
});

export default function Specialties() {
  const classes = useStyles();
  return(
    <Fragment>
      <Header />
    <Grid container spacing={2} className={classes.styleGridContainer}>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Cardiologista</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={cardio} alt='cardiologista' className={classes.img}/>
        </CardContent>
        <div className={classes.button}>
        <Link to={'/especialidades/cardio'}><Button size="small">Agende sua Consulta</Button></Link>
        </div>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Pediatria</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={pediatra} alt='pediatra' className={classes.img}/>
        </CardContent>
        <div className={classes.button}>
        <Link to={'/especialidades/pediatra'}><Button size="small">Agende sua Consulta</Button></Link>
        </div>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Odontologista</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={odonto} alt='odontologia' className={classes.img}/>
        </CardContent>
        <div className={classes.button}>
        <Link to={'/especialidades/odonto'}><Button size="small">Agende sua Consulta</Button></Link>
        </div>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Oftalmologista</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={oftalmo} alt='oftalmologista' className={classes.img}/>
        </CardContent>
        <div className={classes.button}>
        <Link to={'/especialidades/oftalmo'}><Button size="small">Agende sua Consulta</Button></Link>
        </div>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Quiropraxista</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={quiropraxia} alt='quiropraxia' className={classes.img}/>
        </CardContent>
        <div className={classes.button}>
        <Link to={'/especialidades/cardio'}><Button size="small">Agende sua Consulta</Button></Link>
        </div>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Endocrinologista</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={endocrino} alt='endocrinologista' className={classes.img}/>
        </CardContent>
        <div className={classes.button}>
        <Link to={'/especialidades/cardio'}><Button size="small">Agende sua Consulta</Button></Link>
        </div>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Fisioterapeuta</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={fisio} alt='fisioterapia' className={classes.img}/>
        </CardContent>
        <div className={classes.button}>
        <Link to={'/especialidades/cardio'}><Button size="small">Agende sua Consulta</Button></Link>
        </div>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Cardiologista</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={cardio} alt='cardiologista' className={classes.img}/>
        </CardContent>
        <div className={classes.button}>
        <Link to={'/especialidades/cardio'}><Button size="small">Agende sua Consulta</Button></Link>
        </div>
      </Card>
      </Grid>
    </Grid>      
    <Footer />
    </Fragment>
  );
}