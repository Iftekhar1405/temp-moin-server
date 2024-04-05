// App.js
import React from 'react';
import './App.css';
import CoachingSection from './components/CoachingSection';
import CoachingCardContainer from './components/CoachingCardContainer';
import Navb from './components/Navb';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import { ScrollLink } from 'react-scroll';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coaching Website</h1>
      </header>
      <CoachingSection />
      <CoachingCardContainer />
      <AboutUs/>
      <ContactUs/>
      <FAQ/>
    </div>
  );
}

export default App;
