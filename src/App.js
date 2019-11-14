import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js'
import Hero from './Components/Hero/Hero.js'
import Intro from './Components/Intro/Intro.js'
import Services from './Components/Services/Services.js'
import Work from './Components/Work/Work.js'
import Testimonials from './Components/Testimonials/Testimonials.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Work />
    </div>
  );
}

export default App;
