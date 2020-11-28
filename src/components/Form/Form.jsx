import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import shelters from '../../data/utulky.json';
import './form.scss';
import { db, storage } from '../../db.js';
import emptyImage from '../../assets/img/empty_image.svg';
import { MapForm } from '../MapForm.jsx/MapForm.jsx';

export const Form = () => {
  const [progress, setProgress] = useState(0);
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [record, setSaveRecord] = useState({
    description: '',
    type: '',
    phone: '',
    email: '',
    date: '',
    urlImage: '',
    location: {},
  });
  const [isMarkerShown, setIsMarkerShown] = useState(false);

  const types = ['pes', 'kočka', 'ptactvo'];
  const regexp = /^[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ \.\'\-]+$/;

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
            setSaveRecord({ ...record, urlImage: url });
          });
      },
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    db.collection('ztrata')
      .add(record)
      .then((document) => history.push(`/detail/${document.id}`));

    setDisabled(true);
  };

  return (
    <>
      <div className="form">
        <h1 className="form__headline">Vyplňte, prosím informace o ztrátě:</h1>
        <hr className="form__divider" />
        <form onSubmit={onSubmit} className="form__main">
          <label className="form__label" htmlFor="image">
            Fotografie zvířete
          </label>
          {progress === 0 || progress === 100 ? null : (
            <progress value={progress} max="100" />
          )}
          <img
            className="form__photo"
            width="100"
            height="100"
            src={progress === 100 ? record.urlImage : emptyImage}
            alt="photo"
          />
          <input
            className="form__photo-input"
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
            onChange={onFileChange}
          />

          <label className="form__label" htmlFor="name">
            Druh zvířete:{' '}
          </label>
          <div className="form__type-container">
            {types.map((type) => (
              <div key={type} className="form__types">
                <input
                  className="form__type"
                  type="radio"
                  id="names"
                  name="names"
                  onChange={() => setChecked(false)}
                  value={record.type}
                  required
                />
                <label className="form__type-label" htmlFor="name">
                  {type}
                </label>
              </div>
            ))}
            <div className="form__types">
              <input
                className="form__type"
                type="radio"
                id="names"
                name="names"
                value={record.type}
                onChange={(e) => {
                  setChecked(!checked);
                  setSaveRecord({ ...record, type: e.target.value });
                }}
                required
              />
              <label className="form__type-label" htmlFor="name">
                jiné
              </label>
            </div>
          </div>
          {checked ? (
            <input
              className="form__type-input"
              type="text"
              id="name"
              name="name"
              value={record.type}
              onChange={(e) =>
                setSaveRecord({ ...record, type: e.target.value })
              }
              required={checked}
              placeholder="jiný druh"
              pattern={regexp}
              autoFocus
              list="names"
            />
          ) : null}

          <label className="form__label" htmlFor="description">
            Popis zvířete:{' '}
          </label>
          <textarea
            className="form__description"
            style={{ width: '50em', height: '200px' }}
            type="text"
            id="description"
            name="description"
            onChange={(e) =>
              setSaveRecord({ ...record, description: e.target.value })
            }
            value={record.description}
            maxLength="300"
            placeholder="Zde popište vaše ztracené zvíře..."
            required
          />
          <div className="form__shelters">
            <label className="form__label" htmlFor="shelter">
              Útulek:
            </label>
            <select
              className="form__shelter-select"
              id="shelter"
              name="shelter"
            >
              <option
                className="form__shelter-option"
                value="none"
                defaultValue
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
              *V případě, že se zvíře nenachází v útulku, vyberte místo na mapě.
            </em>
          </div>
          <label className="form__label-map" htmlFor="map">
            <div className="form__map">
              {' '}
              <div
                style={{
                  width: '100vw',
                  height: '400px',
                }}
              >
                <MapForm
                  onChangePosition={(position) =>
                    setSaveRecord({
                      ...record,
                      location: {
                        latitude: position.lat,
                        longitude: position.lng,
                      },
                    })
                  }
                  googleMapURL={
                    'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAJiOxHuDPq_5Z9NpUgwgWm5EQS14zbAe0'
                  }
                  loadingElement={<div style={{ height: '100%' }} />}
                  containerElement={<div style={{ height: '100%' }} />}
                  mapElement={
                    <div style={{ height: '100%', borderRadius: '5px' }} />
                  }
                />
              </div>
            </div>
          </label>

          <label className="form__label" htmlFor="phone">
            Telefon:{' '}
          </label>
          <input
            className="form__phone"
            id="phone"
            name="phone"
            type="tel"
            name="telefon"
            onChange={(e) =>
              setSaveRecord({ ...record, phone: e.target.value })
            }
            value={record.phone}
            pattern="[0-9]{3} [0-9]{3} [0-9]{3}"
            placeholder="123 456 789"
            autoComplete="on"
          />
          <label className="form__label" htmlFor="email">
            E-mail:{' '}
          </label>
          <input
            className="form__email"
            type="email"
            name="email"
            id="email"
            onChange={(e) =>
              setSaveRecord({ ...record, email: e.target.value })
            }
            value={record.email}
            placeholder="novak@gmail.com"
            autoComplete="on"
            required
          />
          <label className="form__label" htmlFor="date">
            Datum ztráty:{' '}
          </label>
          <input
            className="form__date"
            type="date"
            name="date"
            id="date"
            onChange={(e) => setSaveRecord({ ...record, date: e.target.value })}
            value={record.date}
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
