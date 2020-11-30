import React from 'react';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import './geolocation.scss';

export const Geolocation = (props) => {
  const onClick = () =>
    navigator.geolocation.getCurrentPosition(function (position) {
      props.onPosition(position.coords);
    });

  return (
    <>
      <button className="geolocation__button" onClick={onClick} type="button">
        Moje poloha
      </button>
    </>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));
