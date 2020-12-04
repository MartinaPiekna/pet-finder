import React, { useState } from 'react';
import { MapHome } from '../MapHome/MapHome.jsx';
import './mapContainer.scss';

export const MapContainer = () => {
  const [enabledShelters, setEnabledShelters] = useState(true);
  const [enabledLost, setEnabledLost] = useState(true);
  const [enabledFound, setEnabledFound] = useState(true);
  const [activeButton, setActiveButton] = useState([false, false, false, true]);
  return (
    <>
      <div className="mapContainer">
        <button
          className={
            activeButton[0]
              ? 'mapContainer__button mapContainer__button--active'
              : 'mapContainer__button'
          }
          onClick={() => {
            setEnabledShelters(true);
            setEnabledFound(false);
            setEnabledLost(false);
            setActiveButton([true, false, false, false]);
          }}
        >
          Útulky
        </button>
        <button
          className={
            activeButton[1]
              ? 'mapContainer__button mapContainer__button--active'
              : 'mapContainer__button'
          }
          onClick={() => {
            setEnabledLost(true);
            setEnabledShelters(false);
            setEnabledFound(false);
            setActiveButton([false, true, false, false]);
          }}
        >
          Ztráta
        </button>
        <button
          className={
            activeButton[2]
              ? 'mapContainer__button mapContainer__button--active'
              : 'mapContainer__button'
          }
          onClick={() => {
            setEnabledFound(true);
            setEnabledLost(false);
            setEnabledShelters(false);
            setActiveButton([false, false, true, false]);
          }}
        >
          Nález
        </button>
        <button
          className={
            activeButton[3]
              ? 'mapContainer__button mapContainer__button--active'
              : 'mapContainer__button'
          }
          onClick={() => {
            setEnabledShelters(true);
            setEnabledFound(true);
            setEnabledLost(true);
            setActiveButton([false, false, false, true]);
          }}
        >
          Zobrazit vše
        </button>
      </div>

      <div
        className="mapContainer__component"
        style={{ width: '100%', height: '400px' }}
      >
        <MapHome
          googleMapURL={
            'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAJiOxHuDPq_5Z9NpUgwgWm5EQS14zbAe0'
          }
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%', borderRadius: '5px' }} />}
          enabledShelters={enabledShelters}
          enabledLost={enabledLost}
          enabledFound={enabledFound}
        />
      </div>
    </>
  );
};
