import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './detail.scss';
import { db } from '../../db.js';
import emptyImage from '../../assets/icons/empty_image.svg';

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
    const checkDate = (date) => {
      const year = date.substring(0, 4);
      const month = date.substring(5, 7);
      const day = date.substring(8, 10);
      const newDate = `${day}. ${month}. ${year}`;
      console.log(newDate);
      return newDate;
    };
    content = (
      <div className="detail__container">
        <figure className="detail__figure">
          <img
            className="detail__image"
            width="200"
            height="200"
            src={record.urlImage ? record.urlImage : emptyImage}
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
          <span className="detail__name">Útulek, kde je zvíře umístěno: </span>
          <span className="detail__description">
            {' '}
            {record.shelter === '' ? 'nevyplněno' : record.shelter}
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
          <span className="detail__phone">
            {' '}
            {record.phone ? record.phone : 'nevyplněno'}
          </span>
        </div>
        <div className="detail__wrapper">
          <span className="detail__name">Datum ohlášení: </span>
          <span className="detail__date" date={record.date}>
            {checkDate(record.date)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <section className="detail">
      <h1 className="detail__headline">Detail záznamu</h1>
      <hr className="detail__divider" />
      {content}
      <Link to="/" className="navigation__link">
        <p className="detail__link-homepage">Zpět na úvodní stránku</p>
      </Link>
    </section>
  );
};
