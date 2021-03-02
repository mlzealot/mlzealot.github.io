import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import "../css/style_common.css";
import "../css/navbar.css";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar className="primary-gradient" dark expand="md" fixed="top" scrolling>
          <MDBNavbarBrand>
            <strong className="white-text">Brand</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Features</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            <MDBNavItem className="nav-link">
                <a href="https://github.com/srimanth98"className="waves-effect waves-light" target="_blank">
                  <MDBIcon fab icon="github" className="white-text"/>
                </a>
              </MDBNavItem>
              <MDBNavItem className="nav-link">
                <a href="https://kaggle.com/srimanth98"className="waves-effect waves-light" target="_blank">
                  <MDBIcon fab icon="kaggle" className="white-text"/>
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;