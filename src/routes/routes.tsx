import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/index';
import Client from '../pages/Clients/index';
import Specialties from '../pages/Specialties/index';
import InfoCardio from '../pages/InfoCardio/index';
import InfoPediatra from '../pages/InfoPediatra';
import InfoOdonto from '../pages/InfoOdonto/index';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Login} />
        <Route exact path='/clients' component={Client} />
        <Route exact path='/especialidades' component={Specialties} />
        <Route exact path='/especialidades/cardio' component={InfoCardio} />
        <Route exact path='/especialidades/pediatra' component={InfoPediatra} />
        <Route exact path='/especialidades/odonto' component={InfoOdonto} />
      </Switch>      
    </BrowserRouter>
  );
}