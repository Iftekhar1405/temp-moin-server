// App.js
import React from 'react';
import './App.css';
import CoachingSection from './components/CoachingSection';
import CoachingCardContainer from './components/CoachingCardContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coaching Website</h1>
      </header>
      <CoachingSection />
      <CoachingCardContainer />
    </div>
  );
}

export default App;
