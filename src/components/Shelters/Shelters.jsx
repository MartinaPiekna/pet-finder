import React, { useState } from 'react';
import shelters from '../../data/utulky.json';
import { Pagination } from '../Pagination/Pagination';
import './shelters.scss';

export const Shelters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sheltersPerPage] = useState(3);

  const last = currentPage * sheltersPerPage;
  const first = last - sheltersPerPage;
  const currentShelters = shelters.slice(first, last);
  const paginate = (number) => setCurrentPage(number);

  return (
    <div className="shelters">
      <div className="shelters__container">
        <h1 className="shelters__title">Seznam útulků v ČR</h1>
        <hr className="shelters__divider" />
        {currentShelters.map((shelter) => (
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
      <Pagination
        sheltersPerPage={sheltersPerPage}
        total={shelters.length}
        paginate={paginate}
      />
    </div>
  );
};
