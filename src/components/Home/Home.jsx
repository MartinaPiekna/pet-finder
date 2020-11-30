import React from 'react';
import { MapContainer } from '../MapContainer/MapContainer.jsx';
import { Link } from 'react-router-dom';
import './home.scss';

export const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Najděte svého ztraceného mazlíčka</h1>
      <hr className="home__divider" />
      <section className="home__description">
        <h2 className="home__text">
          Díky přehledné mapě najdete nejbližší útulky či nalezené a ztracené
          mazlíčky. Jednoduchým filtrováním zobrazíte požadovaný druh záznamů.
        </h2>
      </section>
      <MapContainer />
      <Link to="/new" className="home__button">
        Přidat záznam
      </Link>
    </div>
  );
};
