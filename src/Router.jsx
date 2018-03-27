import React from 'react';
import App from './App';
import Home from './pages/home';
import Parentcenter from './pages/parentcenter';
import About from './pages/about';
import Services from './pages/services';
import Media from './pages/media';
import Getinvolved from './pages/getinvolved';
import Calendar from './pages/calendar';
import Blog from './pages/blog';
import Donate from './pages/donate';
import Resources from './pages/resources';
import Contact from './pages/contact';
import Carrers from './pages/carrers';
import Settings from './pages/settings';

import {
  BrowserRouter as ReactRouter,
  Route
}from 'react-router-dom';


export default class Router extends React.Component{
  render(){
    return(
      <ReactRouter>
        <App>
          <Route exact path='/' component={Home} > </Route>
          <Route exact path='/parentcenter' component={Parentcenter} > </Route>
          <Route exact path='/About' component={About} > </Route>
          <Route exact path='/services' component={Services} > </Route>
          <Route exact path='/media' component={Media} > </Route>
          <Route exact path='/getinvolved' component={Getinvolved} > </Route>
          <Route exact path='/calendar' component={Calendar} > </Route>
          <Route exact path='/blog' component={Blog} > </Route>
          <Route exact path='/donate' component={Donate} > </Route>
          <Route exact path='/resources' component={Resources} > </Route>
          <Route exact path='/contact' component={Contact} > </Route>
          <Route exact path='/carrers' component={Carrers} > </Route>
          <Route exact path='/settings' component={Settings} > </Route>
        </App>

      </ReactRouter>
    );
  }
}
