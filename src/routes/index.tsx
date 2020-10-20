import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Repository from '../pages/Repository'


// import { Container } from './styles';

const routes: React.FC = () => (
<BrowserRouter>
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repo" exact component={Repository} />

  </Switch>
</BrowserRouter>
)
export default routes;