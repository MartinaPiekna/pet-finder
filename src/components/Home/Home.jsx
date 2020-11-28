import React, { useState } from 'react';
import { MapHome } from '../MapHome/MapHome.jsx';
import './home.scss';


export const Home = () => {
  return (
   <>
    <h1 className="home__headline">nadpis</h1>
    <section className="home__description">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ullam veritatis sequi voluptas molestias esse expedita maxime, corrupti voluptate vitae eligendi, adipisci nihil neque, ipsa nam! Similique porro totam at?
  </section>
  <div className="home__button">
  <button className="home__button--first">Mapa s útulky</button>
  <button className="home__button--second">Mapa ztracených zvířat</button>
  <button className="home__button--third">Mapa nalezených zvířat</button>
  </div>
     
        <div className="home__map" style={{ width: '80vw', height: '400px' }}>
          <MapHome
            googleMapURL={
              'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAJiOxHuDPq_5Z9NpUgwgWm5EQS14zbAe0'
            }
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%', borderRadius: '5px' }} />}/>
          </div>
    </>
  );
};
