import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Banner from './Banner'
import Experience from './Experience'
import Skills from './Skills'
import Work from './Work'
import About from './About'
import Contact from './Contact'

function App() {
    return(
      <>
              <Header />
              <Banner />
              <About />
              <Skills />
              <Experience />
              <Work />
              <Contact /> 
      </>
    )}

export default App;

