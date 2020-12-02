import React from 'react';
import './about.scss';
import photoM from '../../assets/img/martina.png';
import photoB from '../../assets/img/barbora.png';

export const About = () => {
  return (
    <>
      <section className="about">
        <h1 className="about__title">O tvůrcích</h1>
        <hr className="about__divider" />
        <div className="about__container">
          <div className="about__card about__card--first">
            <h2 className="about__person">Martina Hytychová</h2>
            <img
              className="about__photo"
              src={photoM}
              alt="photo Martina"
              width="100px"
              height="100px"
            />
            <p className="about__info">
              PetFinder je první opravdu komplexní projekt, na kterém jsem
              otestovala dosavadní znalosti JS, Reactu, stylování a programovací
              skills.
            </p>
            <p className="about__info">
              Ve volných chvílích se chci dále věnovat rozvoji tohoto projektu a
              to konkrétně uživatelům umožnit vytvořit si vlastní uživatelský
              účet, kde budou moci editovat a mazat jejich vložené záznamy nebo
              dále komunikovat s ostatními uživateli.
            </p>
          </div>
          <div className="about__card about__card--second">
            <h2 className="about__person">Barbora Štündlová</h2>
            <img
              className="about__photo"
              src={photoB}
              alt="photo Barbora"
              width="100px"
              height="100px"
            />
            <p className="about__info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              tempora dolores culpa, rem possimus aspernatur dolorum unde, odit
            </p>
            <p className="about__info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium hic aut maiores cupiditate eos quaerat blanditiis
            </p>
          </div>
        </div>
        <h3 className="about__contact">
          V případě jakýchkoliv dotazů nás neváhejte kontaktovat na:{' '}
          <a
            className="about__email-link"
            href={'mailto: martina.hyt@gmail.com'}
          >
            <span className="about__email">martina.hyt@gmail.com</span>
          </a>
        </h3>
      </section>
    </>
  );
};
