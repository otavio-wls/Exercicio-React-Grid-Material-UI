import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../pages/Login/index';
import Specialties from '../pages/Specialties/index';
import InfoCardio from '../pages/InfoCardio/index';
import InfoPediatra from '../pages/InfoPediatra';
import InfoOdonto from '../pages/InfoOdonto/index';

export default function Routes() {
  return(
    <BrowserRouter>
      <Route exact path='/' component={Login} />
      <Route exact path='/especialidades' component={Specialties} />
      <Route exact path='/especialidades/cardio' component={InfoCardio} />
      <Route exact path='/especialidades/pediatra' component={InfoPediatra} />
      <Route exact path='/especialidades/odonto' component={InfoOdonto} />
    </BrowserRouter>


  );
}