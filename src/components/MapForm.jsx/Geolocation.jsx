import React, { useState } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';

export const Geolocation = (props) => {
  const onClick = () =>
    navigator.geolocation.getCurrentPosition(function (position) {
      props.onPosition(position.coords);
    });

  return (
    <>
      <button onClick={onClick}>Něco</button>
    </>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));
