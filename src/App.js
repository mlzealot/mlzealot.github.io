
import React, { Component } from 'react';
import "./index.css";
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProjectCards from './components/ProjectCards';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

class AppDemo extends Component {

  render() {
    return (
        <div>
          <NavBar />
          <section id="home"><Home/></section>
          <section id="projects"><ProjectCards/></section>
          <section id="about_me"><AboutMe/></section>
          <Footer/>
        </div>
    );
  }
}

export default AppDemo;
