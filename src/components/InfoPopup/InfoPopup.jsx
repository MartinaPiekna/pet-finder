import React from 'react';
import { InfoWindow } from 'react-google-maps';
import empty from '../../assets/img/empty_image.svg';

export const InfoPopup = ({
  children,
  location,
  onClose,
  imageSource,
  title,
  description,
}) => {
  return (
    <InfoWindow
      position={{
        lat: location.latitude,
        lng: location.longitude,
      }}
      onCloseClick={() => {
        onClose();
      }}
    >
      <div style={{ width: '200px', height: '120px' }}>
        <img
          src={imageSource ? imageSource : empty}
          alt="logo"
          width="50px"
          height="50px"
          style={{ margin: '0 auto', display: 'block' }}
        />
        <h2 style={{ margin: '10px 0', textAlign: 'center', fontSize: '18px' }}>
          {title}
        </h2>
        <p
          style={{ margin: '0 0 10px', textAlign: 'center', fontSize: '16px' }}
        >
          {description}
        </p>
        {children}
      </div>
    </InfoWindow>
  );
};
