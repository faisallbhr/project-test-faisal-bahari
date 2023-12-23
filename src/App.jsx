// import heroImage from './assets/hero.jpg'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card';
import Router from './components/Router';

function App() {


  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App
