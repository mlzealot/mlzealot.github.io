import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";
import "../css/style_common.css";
import "../css/navbar.css";

import AnchorLink from 'react-anchor-link-smooth-scroll';

class NavbarPage extends Component {

  render() {
    return (
        <MDBNavbar className="primary-gradient" dark expand="md" fixed="top" scrolling>
          <MDBNavbarBrand>
            <strong>
                <AnchorLink href="#home" className="white-text">
                    Brand
                </AnchorLink>
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <AnchorLink href="#projects" className="nav-link">
                    Projects
                </AnchorLink>
              </MDBNavItem>
              <MDBNavItem>
                <AnchorLink href="#about_me" className="nav-link">
                    About Me
                </AnchorLink>
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
    );
  }
}

export default NavbarPage;