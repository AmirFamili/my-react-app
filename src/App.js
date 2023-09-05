import './App.css';
import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Shopping from './components/shopping';
import Chef from './components/chef';
import Footer from './components/footer';

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <main id='main'>
          < About />
          <Shopping /> 
          <Chef />
        </main>
        <Footer/>


      </>

    )
  }
}

export default App;




