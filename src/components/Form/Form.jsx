import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import shelters from '../../data/utulky.json';
import './form.scss';
import { db, storage } from '../../db.js';
import emptyImage from '../../assets/img/empty_image.svg';
import { MapForm } from '../MapForm/MapForm.jsx';
import { Geolocation } from '../Geolocation/Geolocation.jsx';

export const Form = () => {
  const [progress, setProgress] = useState(0);
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [record, setSaveRecord] = useState({
    typeOfRecord: '',
    description: '',
    type: '',
    phone: '',
    email: '',
    date: '',
    urlImage: '',
    location: {
      latitude: 50.0,
      longitude: 14.5,
    },
  });

  const types = ['pes', 'kočka', 'ptactvo'];
  const regexp = /[a-zA-Z]/gi;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;

  let history = useHistory();

  const onFileChange = (e) => {
    const image = e.target.files[0];
    const uploadFile = storage.ref(`images/${image.name}`).put(image);

    uploadFile.on(
      'state_changed',
      (snapShot) => {
        const progress = Math.round(
          (snapShot.bytesTransferred / snapShot.totalBytes) * 100,
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setSaveRecord((record) => ({ ...record, urlImage: url }));
          });
      },
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    db.collection('ztrata')
      .add(record)
      .then((document) => history.push(`/detail/${document.id}`));
    setDisabled(true);
  };

  const handleOnInvalid = () => {
    setSubmit(true);
  };

  return (
    <>
      <div className="form">
        <h1 className="form__headline">Vyplňte, prosím formulář:</h1>
        <hr className="form__divider" />
        <div className="form__switch-container">
          <div className="form__switches">
            <input
              className={
                submit ? 'form__switch form__input--invalid' : 'form__switch '
              }
              type="radio"
              id="lost"
              name="typeOfRecord"
              onChange={() => {
                setSaveRecord((record) => ({
                  ...record,
                  typeOfRecord: 'lost',
                }));
              }}
              required
            />
            <label className="form__switch-label" htmlFor="lost">
              Ztratil/a jsem
            </label>
          </div>
          <div className="form__switches">
            <input
              className={
                submit ? 'form__switch form__input--invalid' : 'form__switch '
              }
              type="radio"
              id="found"
              name="typeOfRecord"
              onChange={() => {
                setSaveRecord((record) => ({
                  ...record,
                  typeOfRecord: 'found',
                }));
              }}
              required
            />
            <label className="form__switch-label" htmlFor="found">
              Nalezl/a jsem
            </label>
          </div>
        </div>
        <form
          onSubmit={handleOnSubmit}
          onInvalid={handleOnInvalid}
          className="form__main"
        >
          <label className="form__label-photo" htmlFor="image">
            Fotografie zvířete
          </label>
          {progress === 0 || progress === 100 ? null : (
            <progress value={progress} max="100" />
          )}
          <img
            className="form__photo"
            width="230"
            height="180"
            src={progress === 100 ? record.urlImage : emptyImage}
            alt="photo"
          />
          <input
            className={
              submit
                ? 'form__photo-input form__photo-input--invalid'
                : 'form__photo-input'
            }
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
            onChange={onFileChange}
            required
          />

          <label className="form__label" htmlFor="type">
            Druh zvířete:{' '}
          </label>
          <div className="form__type-container">
            {types.map((type) => {
              return (
                <div key={type} className="form__types">
                  <input
                    className={
                      submit ? 'form__type form__input--invalid' : 'form__type'
                    }
                    type="radio"
                    id={type}
                    name="type"
                    onChange={() => {
                      setChecked(false),
                        setSaveRecord((record) => ({
                          ...record,
                          type,
                        }));
                    }}
                    required
                  />
                  <label className="form__type-label" htmlFor={type}>
                    {type}
                  </label>
                </div>
              );
            })}
            <div className="form__types">
              <input
                className={
                  submit ? 'form__type form__input--invalid' : 'form__type'
                }
                type="radio"
                id="name"
                name="type"
                value=""
                onChange={() => {
                  setChecked((checked) => !checked);
                }}
                required
              />
              <label className="form__type-label" htmlFor="type">
                jiné
              </label>
            </div>
          </div>
          {checked ? (
            <input
              className={
                submit
                  ? 'form__type-input form__input--invalid'
                  : 'form__type-input'
              }
              type="text"
              id="name"
              name="type"
              onChange={(e) => {
                const type = e.target.value;
                setSaveRecord((record) => ({
                  ...record,
                  type,
                }));
              }}
              required={checked}
              placeholder="jiný druh"
              autoFocus
              list="names"
            />
          ) : null}

          <label className="form__label" htmlFor="description">
            Popis zvířete:{' '}
          </label>
          <textarea
            className={
              submit
                ? 'form__description form__input--invalid'
                : 'form__description '
            }
            style={{ width: '50em', height: '200px' }}
            type="text"
            id="description"
            name="description"
            onInvalid={handleOnInvalid}
            onChange={(e) => {
              const description = e.target.value;
              setSaveRecord((record) => ({
                ...record,
                description,
              }));
            }}
            maxLength="300"
            placeholder="Zde popište vaše ztracené zvíře..."
            required
          />
          {record.typeOfRecord === 'lost' ? (
            <div className="form__shelters">
              <label className="form__label" htmlFor="shelter">
                Útulek:
              </label>
              <select
                className={
                  submit
                    ? 'form__shelter-select form__input--invalid'
                    : 'form__shelter-select'
                }
                id="shelter"
                name="shelter"
              >
                <option
                  className={
                    selected
                      ? 'form__shelter-option--disabled'
                      : 'form__shelter-option'
                  }
                  value=""
                  disabled
                >
                  Vyberte útulek...
                </option>
                {shelters.map((shelter) => (
                  <option
                    className="form__shelter-option"
                    key={shelter.id}
                    value={shelter.id}
                  >
                    {shelter.nazev}
                  </option>
                ))}
              </select>
              <em className="form__shelter--emphisize">
                *V případě, že se zvíře nenachází v útulku, vyberte místo na
                mapě.
              </em>
            </div>
          ) : null}
          <label className="form__label-map" htmlFor="map">
            Vyberte místo na mapě:
          </label>
          <div className="form__map">
            <div className="form__map">
              {' '}
              <div
                style={{
                  width: '100vw',
                  height: '400px',
                }}
              >
                <Geolocation
                  onPosition={(location) => {
                    setSaveRecord((record) => ({
                      ...record,
                      location,
                    }));
                  }}
                />
                <MapForm
                  defaultPosition={{
                    lat: record.location.latitude,
                    lng: record.location.longitude,
                  }}
                  onChangePosition={(position) =>
                    setSaveRecord((record) => ({
                      ...record,
                      location: {
                        latitude: position.lat,
                        longitude: position.lng,
                      },
                    }))
                  }
                  googleMapURL={
                    'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAJiOxHuDPq_5Z9NpUgwgWm5EQS14zbAe0'
                  }
                  loadingElement={<div style={{ height: '100%' }} />}
                  containerElement={<div style={{ height: '100%' }} />}
                  mapElement={
                    <div style={{ height: '100%', borderRadius: '10px' }} />
                  }
                />
              </div>
            </div>
          </div>

          <label className="form__label" htmlFor="phone">
            Telefon:{' '}
          </label>
          <input
            className="form__phone"
            id="phone"
            name="phone"
            type="tel"
            name="phone"
            onChange={(e) => {
              const phone = e.target.value;
              setSaveRecord((record) => ({
                ...record,
                phone,
              }));
            }}
            pattern="[0-9]{3} [0-9]{3} [0-9]{3}"
            placeholder="123 456 789"
            autoComplete="on"
          />
          <label className="form__label" htmlFor="email">
            E-mail:{' '}
          </label>
          <input
            className={
              submit ? 'form__email form__input--invalid' : 'form__email'
            }
            type="email"
            name="email"
            id="email"
            pattern={emailRegex}
            onChange={(e) => {
              const email = e.target.value;
              setSaveRecord((record) => ({
                ...record,
                email,
              }));
            }}
            placeholder="novak@gmail.com"
            autoComplete="on"
            required
          />
          <label className="form__label" htmlFor="datetime-local">
            Datum ztráty:{' '}
          </label>
          <input
            className={
              submit ? 'form__date form__input--invalid' : 'form__date'
            }
            type="datetime-local"
            name="date"
            id="date"
            onChange={(e) => {
              const date = e.target.value;
              setSaveRecord((record) => ({
                ...record,
                date,
              }));
            }}
            required
          />
          <button className="form__button" type="submit" disabled={disabled}>
            Odeslat
          </button>
        </form>
      </div>
    </>
  );
};
