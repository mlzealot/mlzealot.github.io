
import React, { Component } from 'react';
import "./index.css";
import NavBar from './components/NavBarDemo';
import Home from './components/Home';
import ProjectCards from './components/ProjectCards';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

class AppDemo extends Component {

  render() {
    return (
        <div>
          <NavBar />
          <section id="home"><Home id="home"/></section>
          <section id="projects"><ProjectCards/></section>
          <section id="about_me"><AboutMe id="about_me"/></section>
          <Footer/>
        </div>
    );
  }
}

export default AppDemo;
