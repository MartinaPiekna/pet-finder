import React from 'react';
import { MapContainer } from '../MapContainer/MapContainer.jsx';
import { Link } from 'react-router-dom';
import './home.scss';

export const Home = () => {
  return (
    <>
      <h1 className="home__headline">nadpis</h1>
      <section className="home__description">
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ullam
          veritatis sequi voluptas molestias esse expedita maxime, corrupti
          voluptate vitae eligendi, adipisci nihil neque, ipsa nam! Similique
          porro totam at?
        </h2>
      </section>
      <MapContainer />
      <Link to="/new" className="home__button--add">
        Přidat záznam
      </Link>
    </>
  );
};
