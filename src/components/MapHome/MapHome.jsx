import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from 'react-google-maps';
import './mapHome.scss';
import shelters from '../../data/utulky.json';
import lost from '../../assets/img/location_lost.svg';
import found from '../../assets/img/location_found.svg';
import shelterIcon from '../../assets/img/pet-house_color.svg';
import { db } from '../../db.js';
import { Link } from 'react-router-dom';
import { InfoPopup } from '../InfoPopup/InfoPopup';

export const MapHome = withScriptjs(
  withGoogleMap((props) => {
    const [selectedShelter, setSelectedShelter] = useState(null);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [records, setRecords] = useState([]);

    useEffect(() => {
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
                  setSelectedRecord(null);
                }}
                icon={{
                  url: shelterIcon,
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
                  icon={{
                    url: lost,
                    scaledSize: new window.google.maps.Size(40, 40),
                  }}
                  onClick={() => {
                    setSelectedRecord(record);
                    setSelectedShelter(null);
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
                  icon={{
                    url: found,
                    scaledSize: new window.google.maps.Size(40, 40),
                  }}
                  onClick={() => {
                    setSelectedRecord(record);
                    setSelectedShelter(null);
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
                imageSource={shelterIcon}
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
                typeOfRecord={selectedRecord.typeOfRecord}
              >
                <Link
                  to={`/detail/${selectedRecord.id}`}
                  style={{
                    textAlign: 'center',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    color: '#6d9773',
                    display: 'block',
                  }}
                >
                  Více informací
                </Link>
              </InfoPopup>
            )}
          </GoogleMap>
        </div>
      </>
    );
  }),
);
