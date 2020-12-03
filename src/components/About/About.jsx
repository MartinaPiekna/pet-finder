import React from 'react';
import './about.scss';
import photoM from '../../assets/img/martina.jpeg';
import photoB from '../../assets/img/bara_a_bob.jpeg';

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
              <em>
                <b>PetFinder</b>
              </em>{' '}
              je první opravdu komplexní projekt, na kterém jsem otestovala
              dosavadní znalosti JS, Reactu, stylování a programovací skills.
            </p>
            <p className="about__info">
              Ve volných chvílích se chci dále věnovat rozvoji tohoto projektu,
              a to konkrétně uživatelům umožnit vytvořit si vlastní uživatelský
              účet, kde budou moci editovat a mazat jejich vložené záznamy nebo
              dále komunikovat s ostatními uživateli.
            </p>
            <div className="about__icons">
              <a
                className="about__icon"
                href="https://www.linkedin.com/in/martina~hytychova/"
                target="blank"
                rel="noopener"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                className="about__icon"
                href="https://github.com/MartinaHytychova"
                target="blank"
                rel="noopener"
              >
                <i className="fab fa-github-square fa-2x"></i>
              </a>
              <a
                className="about__icon"
                href="https://www.facebook.com/martina.hytychova"
                target="blank"
                rel="noopener"
              >
                <i className="fab fa-facebook-square fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="about__card about__card--second">
            <h2 className="about__person">Barbora Stündlová</h2>
            <img
              className="about__photo"
              src={photoB}
              alt="photo Barbora"
              width="100px"
              height="100px"
            />
            <p className="about__info">
              <em>
                <b>PetFinder</b>
              </em>{' '}
              je i můj první větší projekt a jsem moc ráda, že je to právě tento
              projekt. Snoubí totiž dvě z&nbsp;mých zálib - programování a
              zvířata.
            </p>
            <p className="about__info">
              Dalším krokem ve vývoij této webové aplikace by mohlo být také
              vygenerování nejbližších útulků podle lokace uživatele nebo
              možnost vkládání komentářů o úspěšném nalezení/předání ztraceného
              mazlíčka.
            </p>
            <div className="about__icons">
              <a
                className="about__icon"
                href="https://www.linkedin.com/in/barbora-st%C3%BCndlov%C3%A1-533198a5/"
                target="blank"
                rel="noopener"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                className="about__icon"
                href="https://github.com/BarboraStundlova"
                target="blank"
                rel="noopener"
              >
                <i className="fab fa-github-square fa-2x"></i>
              </a>
              <a
                className="about__icon"
                href="https://www.facebook.com/bara.stundlova/"
                target="blank"
                rel="noopener"
              >
                <i className="fab fa-facebook-square fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
