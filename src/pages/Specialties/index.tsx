import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import { Card, CardActions, CardContent, Button, Typography, makeStyles, Grid } from '@material-ui/core';
import Cardio from '../../assets/cardio.png';
import Pediatra from '../../assets/pediatra.png';
import Odonto from '../../assets/odonto.png';
import Oftalmo from '../../assets/oftalmo.png';
import Quiropraxia from '../../assets/quiro.png';
import Endocrino from '../../assets/endocrino.png';
import Fisio from '../../assets/fisio.png';

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
    width: 100,
    height: 100,
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
          <img src={Cardio} alt='cardiologista' className={classes.img}/>
        </CardContent>
        <CardActions>
          <Button size="small">Agende sua Consulta</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Pediatria</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={Pediatra} alt='pediatra' className={classes.img}/>
        </CardContent>
        <CardActions>
        <Button size="small">Agende sua Consulta</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Odontologista</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={Odonto} alt='odontologia' className={classes.img}/>
        </CardContent>
        <CardActions>
        <Button size="small">Agende sua Consulta</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Oftalmologista</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={Oftalmo} alt='oftalmologista' className={classes.img}/>
        </CardContent>
        <CardActions>
        <Button size="small">Agende sua Consulta</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Quiropraxista</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={Quiropraxia} alt='quiropraxia' className={classes.img}/>
        </CardContent>
        <CardActions>
        <Button size="small">Agende sua Consulta</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Endocrinologista</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={Endocrino} alt='endocrinologista' className={classes.img}/>
        </CardContent>
        <CardActions>
        <Button size="small">Agende sua Consulta</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Fisioterapeuta</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={Fisio} alt='fisioterapia' className={classes.img}/>
        </CardContent>
        <CardActions>
        <Button size="small">Agende sua Consulta</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Cardiologista</Typography>
          <Typography variant="body2" component="p"> Temos os Melhores Especialistas
          <br />        
          </Typography>
          <img src={Cardio} alt='cardiologista' className={classes.img}/>
        </CardContent>
        <CardActions>
        <Link to={'/especialidades/cardio'}><Button size="small">Agende sua Consulta</Button></Link>
        </CardActions>
      </Card>
      </Grid>
    </Grid>      
    <Footer />
    </Fragment>
  );
}