import React from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>({
  container: {
    width: '85%',
  },  
  title:{
    marginTop: 100,
    marginLeft: 35,
    fontFamily: 'Helvetica, sans-serif',
    color: '#4F4F4F',
  },
  subTitle: {
    marginLeft: 35,
    fontFamily: 'Helvetica, sans-serif',
    color: '#4F4F4F',
  },
  description: {
    marginLeft: 35,
    fontFamily: 'Helvetica, sans-serif',
    textAlign: 'justify',
    color: '#696969',
  }
}))

export default function InfoOdonto() {
  const classes = useStyles();
  return(
    <div>
      <Header />
      <Grid container className={classes.container}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div style={{marginBottom: '10px'}}>
            <h2 className={classes.title}>Conheça um pouco sobre a especialidade</h2>
            <p className={classes.description}>É a ciência que estuda e trata o sistema mastigatório, compreendendo a cabeça, o pescoço e abrangendo os ossos, musculatura mastigatória, articulações, dentes e tecidos. </p>
          </div>
          
          <h3 className={classes.subTitle}>O que faz um profisisional dessa area?</h3>
          <p className={classes.description}>O cirurgião-dentista é o profissional da odontologia, mais conhecido como odontólogo ou popularmente como dentista.
          <br /> Atua na prevenção de doenças dentárias e sistêmicas, em especial na manifestação oral destas como câncer, leucemia, disfunção da articulação temporomandibular, etc.
          <br /> Podendo atuar nas diversas áreas da saúde, como por exemplo a estética (dentística) e reabilitação oral como a prótese dentária e mais recentemente com a implantodontia.
          <br /> Exerce suas atividades por especialidades como prótese dentária, endodontia, periodontia, ortodontia e ortopedia facial, implantodontia, cirurgia bucomaxilofacial, disfunção temporomandibular e dor orofacial, odontogeriatria, dentística, prevenção e odontopediatria. </p>
          <h3 className={classes.subTitle}>O que você pode fazer nessa area?</h3>
          <p className={classes.description}>Aqui vão algumas opções que você pode optar nessa área:
            <ul>
              <li>Acupuntura odontológica</li>
              <li>Dentística restauradora</li>
              <li>Endodontia</li>
              <li>Odontologia do esporte</li>
              <li>Patologia bucal</li>
            </ul>
          </p>            
        </Grid>
      </Grid>
      <Footer />      
    </div>


  );
}