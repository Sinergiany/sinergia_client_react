import React, { Component } from 'react';
import logo from './logo.svg';
import sinergialogo from './sinergia_logo.png';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PageTransition from 'react-router-page-transition';

import Navbarbootstrap from './components/Navbarbootstrap';






class App extends Component {
  render() {
    return (
        
            <div>

              <Navbarbootstrap/>
             
                <div >
                  
                  {this.props.children}
                   
                </div>

            </div>        

    );
  }
}

export default App;
