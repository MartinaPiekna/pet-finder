import React from 'react';
import shelters from '../../data/utulky.json';
import './shelters.scss';

export const Shelters = () => {
  return (
    <div className="shelters">
      {shelters.map((shelter) => (
        <div className="shelters__card" key={shelter.id}>
          <h2>{shelter.nazev}</h2>
          <h3>{shelter.okres}</h3>
          <p>{shelter.adresa}</p>
          <p>{shelter.telefon}</p>
          <p>{shelter.email}</p>
          <p>{shelter.provozni_doba}</p>
        </div>
      ))}
    </div>
  );
};
