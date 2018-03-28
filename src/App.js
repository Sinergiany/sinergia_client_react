import React, { Component } from 'react';
import logo from './logo.svg';
import sinergialogo from './sinergia_logo.png';
import './App.css';


class App extends Component {
  render() {
    return (

      <div>
 

          <div className="App">
          {this.props.children}

        </div>
      </div>

    );
  }
}

export default App;
