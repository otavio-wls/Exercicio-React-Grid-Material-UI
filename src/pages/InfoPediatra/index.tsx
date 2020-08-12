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
  },
  subTitle: {
    marginLeft: 35,
    fontFamily: 'Helvetica, sans-serif',
  },
  description: {
    marginLeft: 35,
    fontFamily: 'Helvetica, sans-serif',
    textAlign: 'justify',
  }
}))

export default function InfoPediatra() {
  const classes = useStyles();
  return(
    <div>
      <Header />
      <Grid container className={classes.container}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div style={{marginBottom: '10px'}}>
            <h2 className={classes.title}>Conheça um pouco sobre a especialidade</h2>
            <p className={classes.description}>A pediatria é o ramo de medicina que trata a saúde e os cuidados médicos dos infantes, das crianças, e dos adolescentes do nascimento até a idade de 18.
            <br /> A palavra “pediatria” significa o “curandeiro das crianças”; são derivados de duas palavras gregas: (pais = criança) e (iatros = doutor ou curandeiro). 
            <br />A pediatria é uma especialidade médica relativamente nova, tornando-se somente nos mediados do século XIX. Abraham Jacobi (1830-1919) é sabido como o pai da pediatria.</p>
          </div>
          
          <h3 className={classes.subTitle}>Que um pediatra faz?</h3>
          <p className={classes.description}>Um pediatra é o médico de uma criança que fornece não somente cuidados médicos para as crianças que são aguda ou crônica mal mas igualmente serviços sanitários preventivos para crianças saudáveis.
          <br /> Um pediatra controla o bem estar físico, mental, e emocional das crianças sob seu cuidado em cada fase da revelação, na doença e na saúde.</p>
          
          <h3 className={classes.subTitle}>Alvos da pediatria</h3>
          <p className={classes.description}>
            
            Os alvos do estudo da pediatria são reduzir a taxa infantil e da criança de mortes, controlar a propagação da doença infecciosa, promover estilos de vida saudáveis por uma vida sã longa e ajudá-los a facilitar os problemas das crianças e dos adolescentes com circunstâncias crônicas. <br />
            <br />Os Pediatras diagnosticam e tratam diversas condições entre incluir das crianças: <br />
            <ul>
              <li>os ferimentos</li>
              <li>infeccões</li>
              <li>circunstâncias genéticas e congenitais</li>
              <li>cancros</li>
              <li>doenças e deficiências orgnânicas do órgão</li>
            </ul>
          </p>
        </Grid>
      </Grid>
      <Footer />      
    </div>


  );
}