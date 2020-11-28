import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './detail.scss';
import { db } from '../../db.js';
import emptyImage from '../../assets/img/empty_image.svg';

export const Detail = () => {
  const [record, setRecord] = useState([]);
  const [loading, setLoading] = useState('fail');
  let { id } = useParams();
  useEffect(() => {
    setLoading('loading');
    db.collection('ztrata')
      .doc(id)
      .get()
      .then(
        (document) => {
          const data = document.data();
          console.log(data);
          setRecord(data);
          setLoading('success');
        },
        (err) => {
          setLoading('fail');
        },
      );
  }, []);

  let content = <h2 className="detail__loading">Nic tu není 😢</h2>;

  if (loading === 'loading') {
    content = <h2 className="detail__loading">Načítám...⏳</h2>;
  } else if (loading === 'success') {
    content = (
      <div className="detail__container">
        <figure className="detail__figure">
          <img
            className="detail__image"
            width="200"
            height="200"
            src={
              record.downloadURL === undefined ? emptyImage : record.downloadURL
            }
            alt={`photo_${record.type}`}
          />
          <figcaption className="detail__figcaption">
            Fotografie ztraceného zvířete
          </figcaption>
        </figure>
        <div className="detail__wrapper">
          <span className="detail__name">Druh zvířete: </span>
          <span className="detail__type">
            {' '}
            {record.type === '' ? 'nevyplněno' : record.type}
          </span>
        </div>
        <div className="detail__wrapper">
          <span className="detail__name">Popis zvířete: </span>
          <span className="detail__description">
            {' '}
            {record.description === '' ? 'nevyplněno' : record.description}
          </span>
        </div>
        <div className="detail__wrapper">
          <span className="detail__name">Kontaktní e-mail: </span>
          <a className="detail__email-link" href={`mailto:${record.email}`}>
            <span className="detail__email"> {record.email}</span>
          </a>
        </div>
        <div className="detail__wrapper">
          <span className="detail__name">Telefonický kontakt: </span>
          <span className="detail__phone"> {record.phone}</span>
        </div>
        <div className="detail__wrapper">
          <span className="detail__name">Datum ohlášení: </span>
          <time className="detail__date" dateTime={record.date}>
            {record.date}
          </time>
        </div>
      </div>
    );
  }

  return (
    <section className="detail">
      <h1 className="detail__headline">Detail ztráty</h1>
      <hr className="detail__divider" />
      {content}
    </section>
  );
};
