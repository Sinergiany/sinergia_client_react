import React, { Component } from 'react';
import logo from './logo.svg';
import sinergialogo from './sinergia_logo.png';
import './App.css';
import Navbarmdb from './components/navbar_mdb';

class App extends Component {
  render() {
    return (
      <section>
            <header>
                <Navbarmdb/>
                <div className="view intro hm-purple-light" >
                <div className="full-bg-img flex-center">
                <div className="container text-center white-text wow fadeInUp">
                  <h2>This Navbar is fixed and transparent</h2>
                  <br/>
                  <h5>It will always stay visible on the top, even when you scroll down</h5>
                  <p>Navbar's background will switch from transparent to solid color while scrolling down</p>
                  <br/>
                  <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
                </div>
                </div>
              </div>
          </header>

          <main className="text-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12">

                <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
              </div>
            </div>
          </main>

      </section>

    );
  }
}

export default App;