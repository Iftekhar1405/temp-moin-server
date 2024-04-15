// components/CoachingCard.js
import React from 'react';
import './CoachingSection.css';
import './images/personal-growth.png';

const CoachingCard = ({ title, description, color,imageurl  }) => {
  return (
    <div className="coaching-card" style={{ backgroundColor: color }}>
       <img src={imageurl}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CoachingCard;
