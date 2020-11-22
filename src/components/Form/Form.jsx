import React, { useState } from 'react';
import shelters from '../../data/utulky.json';
import './form.scss';
import { db } from '../../db.js';

export const Form = () => {
  const [popis, setPopis] = useState('');
  const [druh, setDruh] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  return (
    <>
      <div className="form">
        <h1 className="form__headline">Zadejte ztrátu zvířete:</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            db.collection('ztrata').add({
              popis: popis,
              druh: druh,
              phone: phone,
              email: email,
              date: date,
            });
          }}
          className="form__main"
        >
          <label className="form__photo-label">
            Vložte fotografii zvířete
            <input
              className="form__photo-input"
              type="file"
              accept="image/png, image/jpeg"
            />
          </label>
          <label>
            Zadejte druh zvířete:
            <input
              type="text"
              onChange={(e) => setDruh(e.target.value)}
              value={druh}
            />
          </label>
          <label>
            Zadejte popis zvířete:
            <input
              type="text"
              onChange={(e) => setPopis(e.target.value)}
              value={popis}
            />
          </label>
          <label>
            Vyberte útulek:
            <select name="pets">
              {shelters.map((shelter) => (
                <option key={shelter.id} value={shelter.id}>
                  {shelter.nazev}
                </option>
              ))}
            </select>
          </label>
          <em>
            *V případě, že se zvíře nenachází v útulku, vyberte místo na mapě.
          </em>
          <label>
            <div>Mapa</div>
          </label>
          <label>
            Telefon:{' '}
            <input
              type="number"
              name="telefon"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </label>
          <label>
            E-mail:{' '}
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            Datum ztráty:
            <input
              type="date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </label>
          <button type="submit">Odeslat</button>
        </form>
      </div>
    </>
  );
};
