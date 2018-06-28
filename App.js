import React, { Component } from 'react';
import './App.css';

import Navigation from './Components/Navigation.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Partners from './Components/Partners.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
 		<Home />
 		<About/>
 		Partners/>
        <Footer />
 
      </div>
    );
  }
}

export default App;
