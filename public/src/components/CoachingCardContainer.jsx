// components/CoachingCardContainer.js
import React from 'react';
import CoachingCard from './CoachingCard';
import './CoachingSection.css';
import './images/personal-growth.png';
const CoachingCardContainer = () => {
  const cardsData = [
    {
       imageurl :'./images/personal-growth.png',
      title: 'Personal Growth',
      description: 'Unlock your full potential and achieve your goals.',
      color: '#FF6B6B',
    },
    {
      title: 'Career Development',
      description: 'Get guidance to advance in your career path.',
      color: '#48BB78',
    },
    {

      title: 'Wellness Coaching',
      description: 'Find balance and improve your overall well-being.',
      color: '#4299E1',
    },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <CoachingCard
          key={index}
          imageurl = {card.imageurl}
          title={card.title}
          description={card.description}
          color={card.color}
        />
      ))}
    </div>
  );
};

export default CoachingCardContainer;
