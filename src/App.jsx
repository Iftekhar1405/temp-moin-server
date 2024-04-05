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
      <Navb />
      <nav className="nav-bar">
          <div>
           Home
           
          </div>
          &#124;
          <div>
            Courses
          </div>
          &#124;
          <div>
            About Us 
          </div>
          &#124;
          <div>
            Contact Us 
          </div>
          &#124;
          <div>
            FAQ
          </div>
        </nav>
      <CoachingSection />
      <CoachingCardContainer />
      <AboutUs/>
      <ContactUs/>
      <FAQ/>
    </div>
  );
}

export default App;
