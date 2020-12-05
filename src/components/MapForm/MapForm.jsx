import React from 'react';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from 'react-google-maps';
import lost from '../../assets/icons/location_lost.svg';

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
            icon={{
              url: lost,
              scaledSize: new window.google.maps.Size(40, 40),
            }}
            position={defaultPosition}
          />
        </GoogleMap>
      </>
    );
  }),
);
