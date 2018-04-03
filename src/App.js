import React, { Component } from 'react';
import logo from './logo.svg';
import sinergialogo from './sinergia_logo.png';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PageTransition from 'react-router-page-transition';

import Sidebar from './components/sidebar';
import './include/bootstrap';





class App extends Component {
  render() {
    return (
        
            <div className="wrapper">

           		<Sidebar/>
             
             
             <div id="content">

                <nav className="navbar navbar-default">
                    <div className="container-fluid">

                        <div className="navbar-header">
                            <button type="button" id="sidebarCollapse" className="navbar-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Page</a></li>
                                <li><a href="#">Page</a></li>
                                <li><a href="#">Page</a></li>
                                <li><a href="#">Page</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

             
                  {this.props.children}
                   
               </div>

            </div>        

    );
  }
}

export default App;
