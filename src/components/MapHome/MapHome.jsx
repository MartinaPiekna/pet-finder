import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import shelters from '../../data/utulky.json';
import logo from '../../assets/img/location.svg';
import shelter from '../../assets/img/pet-house.svg';
import { db } from '../../db.js';

export const MapContainer = () => {
  const [enabledShelters, setEnabledShelters] = useState(true);
  const [enabledLost, setEnabledLost] = useState(true);
  const [enabledFound, setEnabledFound] = useState(true);
  return (
    <>
      <div className="home__button">
        <button
          className="home__button--first"
          onClick={() => {
            setEnabledShelters(true);
            setEnabledFound(false);
            setEnabledLost(false);
          }}
        >
          Mapa s útulky
        </button>
        <button
          className="home__button--second"
          onClick={() => {
            setEnabledLost(true);
            setEnabledShelters(false);
            setEnabledFound(false);
          }}
        >
          Mapa ztracených zvířat
        </button>
        <button
          className="home__button--third"
          onClick={() => {
            setEnabledFound(true);
            setEnabledLost(false);
            setEnabledShelters(false);
          }}
        >
          Mapa nalezených zvířat
        </button>
        <button
          className="home__button--fourth"
          onClick={() => {
            setEnabledShelters(true);
            setEnabledFound(true);
            setEnabledLost(true);
          }}
        >
          Zobrazit vše
        </button>
      </div>

      <div className="home__map" style={{ width: '80vw', height: '400px' }}>
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

export const MapHome = withScriptjs(
  withGoogleMap((props) => {
    const [selectedShelter, setSelectedShelter] = useState(null);
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState('fail');

    useEffect(() => {
      console.log();
      setLoading('loading');
      return db.collection('ztrata').onSnapshot(
        (query) => {
          setRecords(
            query.docs.map((doc) => {
              const data = doc.data();
              data.id = doc.id;
              return data;
            }),
          );
          setLoading('success');
        },
        (err) => {
          setLoading('fail');
        },
      );
    }, []);
    console.log(records);

    return (
      <>
        <div>
          <GoogleMap defaultZoom={8} defaultCenter={{ lat: 50.0, lng: 15.5 }}>
            {shelters.map((shelter) => (
              <Marker
                visible={props.enabledShelters}
                key={shelter.id}
                position={{
                  lat: shelter.souradnice[0],
                  lng: shelter.souradnice[1],
                }}
                onClick={() => {
                  setSelectedShelter(shelter);
                }}
                icon={{
                  url: logo,
                  scaledSize: new window.google.maps.Size(40, 40),
                }}
              />
            ))}

            {records
              .filter((record) => {
                return record.typeOfRecord === 'lost';
              })
              .map((record) => (
                <Marker
                  key={record.id}
                  visible={props.enabledLost}
                  position={{
                    lat: record.location.latitude,
                    lng: record.location.longitude,
                  }}
                  onClick={() => {
                    setRecords(record);
                  }}
                />
              ))}
            {records
              .filter((record) => {
                return record.typeOfRecord === 'found';
              })
              .map((record) => (
                <Marker
                  key={record.id}
                  visible={props.enabledFound}
                  position={{
                    lat: record.location.latitude,
                    lng: record.location.longitude,
                  }}
                  onClick={() => {
                    setRecords(record);
                  }}
                />
              ))}
              {selectedShelter && (
              <InfoWindow
                position={{
                  lat: selectedShelter.souradnice[0],
                  lng: selectedShelter.souradnice[1],
                }}
                onCloseClick={() => {
                  setSelectedShelter(null);
                }}
              >
                <div>
                  <img
                    src={shelter}
                    alt="logo"
                    style={{ margin: '0 auto', display: 'block' }}
                  />
                  <h2>{selectedShelter.nazev}</h2>
                  <p>{selectedShelter.adresa}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      </>
    );
  }),
);
