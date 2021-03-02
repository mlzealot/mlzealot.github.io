
import React, { Component } from 'react';
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import ProjectCards from './components/project_cards';
import Footer from './components/footer';

class App extends Component {

  render() {
    return (
      <Router>
        <script src="../lib/particles.js"></script>
        <NavBar></NavBar>
        <Home/>
        <ProjectCards/>
        <Footer/>
      </Router>
    );
  }
}

export default App;
