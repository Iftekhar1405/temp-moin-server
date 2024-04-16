// App.js
import React, { useRef } from 'react';
import './App.css';
import CoachingSection from './components/CoachingSection';
import CoachingCardContainer from './components/CoachingCardContainer';
import Navb from './components/Navb';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import { ScrollLink } from 'react-scroll';


function App() {
  const ref = useRef(null)
  const handleclick = ()=>{
    ref.current.scrollIntoView({behavior:'smooth'})
  }
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
          <div className='button'>
            <button onClick={handleclick} className='button'>Contact Us </button>
          </div>
          &#124;
          <div>
            FAQ
          </div>
        </nav>
      <CoachingSection />
      <CoachingCardContainer />
      <AboutUs/>
      <ContactUs ref={ref}/>
      <FAQ/>
    </div>
  );
}

export default App;
