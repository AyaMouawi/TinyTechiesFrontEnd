import React from 'react';

function TrainerContainer({ TrainerName, TrainerImage }) {
  return (
    <div className="team-item">
      <img
        src={TrainerImage} 
        className="team-img"
        alt="pic"
      />
      <h3>{TrainerName}</h3>
    </div>
  );
}

export default TrainerContainer;
