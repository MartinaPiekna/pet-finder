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

export const MapHome = withScriptjs(
  withGoogleMap(() => {
    const [selectedShelter, setSelectedShelter] = useState(null);
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState('fail');
    useEffect(() => {
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
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 50.0, lng: 15.5 }}>
        {shelters.map((shelter) => (
          <Marker
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

        {records.map((record) => (
          <Marker
            key={record.id}
            position={{
              lat: record.location.latitude,
              lng: record.location.longitude,
            }}
            onClick={() => {
              setRecords(record);
            }}
          />
        ))}
      </GoogleMap>
    );
  }),
);
