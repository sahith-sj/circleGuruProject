import React, { Component } from 'react';
import './App.css';
import Home from '../src/app/components/home/homeComponent.js';
import StickyFooter from '../src/app/components/footer/footerComponent.js';
// import {view} from './app/components/views/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
        <StickyFooter></StickyFooter>
      </div>
    );
  }
}

export default App;
