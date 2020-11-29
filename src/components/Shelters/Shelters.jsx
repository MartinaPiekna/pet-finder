import React from 'react';
import shelters from '../../data/utulky.json';
import './shelters.scss';

export const Shelters = () => {
  return (
    <div className="shelters">
      <h1 className="shelters__title">Seznam útulků v ČR</h1>
      <hr className="shelters__divider" />
      {shelters.map((shelter) => (
        <>
          <div className="shelters__card" key={shelter.id}>
            <h2 className="shelters__name"> 🐶 {shelter.nazev}</h2>
            <h3 className="shelters__location">📍 {shelter.okres}</h3>
            <p className="shelters__address">🏡 {shelter.adresa}</p>
            <p className="shelters__phone">📞 {shelter.telefon}</p>
            <a className="shelters__link" href={`mailto:${shelter.email}`}>
              <span className="shelters__email">📬 {shelter.email}</span>
            </a>
            <p className="shelters__open-hours">🕘 {shelter.provozni_doba}</p>
          </div>
          <hr className="shelters__divider--small" />
        </>
      ))}
    </div>
  );
};
