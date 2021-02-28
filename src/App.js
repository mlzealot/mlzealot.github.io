
import React, { Component } from 'react';
import "./index.css";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './components/navbar';
import Home from './components/home';
import AppPage from './components/home_demo';

class App extends Component {

  render() {
    return (
      <Router>
        <script src="../lib/particles.js"></script>
        <NavBar></NavBar>
        <Home/>
        {/* <main style={{ marginTop: '4rem' }}>
          <Routes />
        </main> */}
        <div className='flyout'>
          <MDBFooter color='indigo'>
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a href='https://www.MDBootstrap.com'> MDBootstrap.com </a>
            </p>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
