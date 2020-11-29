import React from 'react';
import { MapContainer } from '../MapHome/MapHome.jsx';
import { Link } from 'react-router-dom';
import './home.scss';

export const Home = () => {
  return (
    <>
      <h1 className="home__headline">nadpis</h1>
      <section className="home__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ullam
        veritatis sequi voluptas molestias esse expedita maxime, corrupti
        voluptate vitae eligendi, adipisci nihil neque, ipsa nam! Similique
        porro totam at?
      </section>
      <MapContainer />
      <Link to="/new" className="home__button--link">
        Přidat záznam
      </Link>
    </>
  );
};
