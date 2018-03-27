import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbarmdb from './components/navbar_mdb';

class App extends Component {
  render() {
    return (
      <div className="App">

            <Navbarmdb/>
            <div className='pages-text'>
              {this.props.children}
            </div>

      </div>
    );
  }
}

export default App;
