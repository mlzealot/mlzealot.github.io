import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import "../css/style_common.css";
import "../css/navbar.css";

import AnchorLink from 'react-anchor-link-smooth-scroll';

import { appName } from '../data/HomeData';
import { navBarPortfolioLinkArray } from '../data/NavBarData';

import resume from "../assets/resume.pdf";

class NavBar extends Component {
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
            <strong >
              <AnchorLink href="#home" className="white-text">
                  {appName}
              </AnchorLink>
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <AnchorLink href="#projects" offset='100' className="nav-link">
                  Projects
                </AnchorLink>
              </MDBNavItem>
              <MDBNavItem>
                <AnchorLink href="#about_me" offset='60' className="nav-link">
                  About Me
                </AnchorLink>
              </MDBNavItem>
              <MDBNavItem>
                <a href={resume} target="_blank" className="nav-link">
                  Resume
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              {navBarPortfolioLinkArray.map((portfolio) => (
                <MDBNavItem className="nav-link" key={portfolio.portfolio_id}>
                  <a href={portfolio.portfolio_url} className="waves-effect waves-light" target="_blank">
                    <MDBIcon fab icon={portfolio.portfolio_icon} className="white-text"/>
                  </a>
                </MDBNavItem>
              ))}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavBar;