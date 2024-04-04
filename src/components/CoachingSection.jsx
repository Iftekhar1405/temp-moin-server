import React from 'react';
import './CoachingSection.css';
import { Link } from 'react-scroll';

const CoachingSection = () => {
  return (
    <section className="coaching-section">
      <div className="container">
        <h2>Coaching Services</h2>
        <p>Here you can find information about our coaching services.</p>
        <Link
          to="details"
          smooth={true}
          duration={500}
          className="fancy-button"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default CoachingSection;
