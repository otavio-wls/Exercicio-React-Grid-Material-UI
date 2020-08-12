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

export default function InfoCardio() {
  const classes = useStyles();
  return(
    <div>
      <Header />
      <Grid container className={classes.container}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div style={{marginBottom: '10px'}}>
            <h2 className={classes.title}>Conheça um pouco sobre a especialidade</h2>
            <p className={classes.description}>Cardiologia é a especialidade médica que se ocupa do diagnóstico e tratamento das doenças que acometem o coração bem como os outros componentes do sistema circulatório. O médico especialista nessa área é o cardiologista.</p>
          </div>
          
          <h3 className={classes.subTitle}>Quando devo consultar um Cardiologista?</h3>
          <p className={classes.description}>Deve-se consultar um cardiologista, basicamente, em duas situações: para orientação preventiva e para tratamento de alguma doença. <br />
          <br /> I-Cardiologia Preventiva: a- Sabendo que a maior causa de morte atualmente é por problemas cardiovasculares e ao que tudo indica, essa incidência tende a aumentar, todos os adultos, a partir de 18 anos de idade, mesmo que aparentemente saudáveis, deveriam consultar,  o cardiologista, para se orientarem, adequadamente, a respeito de seus próprios riscos cardíacos e da diversas possibilidades atuais oferecidas como tratamento preventivo . Apesar das altas taxas de mortalidade por problemas cardiovasculares, é importante deixar bem claro que a maioria das complicações podem ser evitadas quando o diagnóstico é precoce e o paciente investe na PREVENÇÃO. b-Antes de iniciar qualquer tipo de atividade física c-Antes de submeter-se a algum procedimento cirúrgico <br />
          <br />II- Cardiologia Curativa Se eu não tenho nenhum diagnóstico, como saber que meus sintomas são de doença cardíaca? Os sintomas abaixo relacionados são os que aparecem mais freqüentemente nas doenças cardíacas: Como saber que a dor é do coração? O coração está localizado no tórax por isso a isquemia, ou seja a diminuição da chegada de sangue nesse órgão, pode provocar dor , desconforto ou pressão em qualquer local dessa  região, inclusive no estomago, e  dorso. Essa dor também pode irradiar-se para os braços e queixo. A dor precordial típica é opressiva, como se algo estivesse apertando fortemente o preçórdio. Muitas vezes ela vem acompanhada de sudorese, palidez, sensação de morte,  falta de ar ou dificuldade para respirar.</p>
        </Grid>
      </Grid>
      <Footer />      
    </div>


  );
}