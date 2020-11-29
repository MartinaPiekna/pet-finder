import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from 'react-google-maps';

export const MapForm = withScriptjs(
  withGoogleMap(({ onChangePosition, defaultPosition }) => {
    return (
      <>
        <GoogleMap
          onClick={(event) => {
            onChangePosition({
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
              onChangePosition({
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
              });
            }}
            position={defaultPosition}
          />
        </GoogleMap>
      </>
    );
  }),
);
