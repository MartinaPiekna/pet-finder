import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from 'react-google-maps';
import './mapHome.scss';
import shelters from '../../data/utulky.json';
import logo from '../../assets/img/location.svg';
import shelter from '../../assets/img/pet-house.svg';
import { db } from '../../db.js';
import { Link } from 'react-router-dom';
import { InfoPopup } from '../InfoPopup/InfoPopup';

export const MapHome = withScriptjs(
  withGoogleMap((props) => {
    const [selectedShelter, setSelectedShelter] = useState(null);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [records, setRecords] = useState([]);

    useEffect(() => {
      console.log();
      return db.collection('ztrata').onSnapshot((query) => {
        setRecords(
          query.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });
    }, []);

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
                    setSelectedRecord(record);
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
                    setSelectedRecord(record);
                  }}
                />
              ))}
            {selectedShelter && (
              <InfoPopup
                location={{
                  latitude: selectedShelter.souradnice[0],
                  longitude: selectedShelter.souradnice[1],
                }}
                onClose={() => {
                  setSelectedShelter(null);
                }}
                imageSource={shelter}
                title={selectedShelter.nazev}
                description={selectedShelter.adresa}
              ></InfoPopup>
            )}
            {selectedRecord && (
              <InfoPopup
                location={selectedRecord.location}
                onClose={() => {
                  setSelectedRecord(null);
                }}
                imageSource={selectedRecord.urlImage}
                title={selectedRecord.type}
                description={selectedRecord.description}
              >
                <Link to={`/detail/${selectedRecord.id}`}>Podrobnosti</Link>
              </InfoPopup>
            )}
          </GoogleMap>
        </div>
      </>
    );
  }),
);
