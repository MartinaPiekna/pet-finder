import React, { useState } from 'react';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from 'react-google-maps';
import logo from '../../assets/img/location.svg';

export const MapForm = withScriptjs(
  withGoogleMap((props) => {
    const [lostLocation, setLostLocation] = useState([]);
    return (
      <>
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: 50.0, lng: 15.5 }}>
          {props.isMarkerShown && (
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
          )}
        </GoogleMap>
      </>
    );
  }),
);
