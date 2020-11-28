import React, { useState, useEffect } from 'react';
import { db } from '../../db.js';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from 'react-google-maps';

export const MapForm = withScriptjs(
  withGoogleMap(({ onChangePosition }) => {
    const [marker, setMarker] = useState({
      lat: 50.0,
      lng: 14.5,
    });

    useEffect(() => {
      onChangePosition(marker);
    }, [marker]);

    return (
      <>
        <GoogleMap
          onClick={(event) => {
            setMarker({
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
            });
          }}
          defaultZoom={6.8}
          defaultCenter={{ lat: 50.0, lng: 15.5 }}
        >
          <Marker
            draggable
            onDragEnd={(event) => {
              setMarker({
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
              });
            }}
            position={marker}
          />
        </GoogleMap>
      </>
    );
  }),
);
