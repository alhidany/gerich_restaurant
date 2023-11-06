import React from 'react'

import { AboutUs,Chef,FindUs,Footer, Gallery,Intro,Laurels,Header,SpecialMenu } from './container';
import { Navbar } from './componenents';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);




export default App