import React, { useState } from 'react';
import './information.scss';

export const Information = () => {
  const [visible, setVisible] = useState([true, false]);

  return (
    <>
      <section className="information">
        <h1 className="information__title">Jak se zachovat?</h1>
        <hr className="information__divider" />
        <div className="information__container">
          <div className="information__buttons">
            <button
              className={
                visible[0]
                  ? 'information__button information__button--active'
                  : 'information__button'
              }
              onClick={() => {
                setVisible([true, false]);
              }}
            >
              Ztráta
            </button>
            <button
              className={
                visible[1]
                  ? 'information__button information__button--active'
                  : 'information__button'
              }
              onClick={() => {
                setVisible([false, true]);
              }}
            >
              Nález
            </button>
          </div>

          <article
            className={
              visible[0]
                ? 'information__section'
                : 'information__section information__section--hidden'
            }
          >
            <ul className="information__list">
              <li className="information__item">
                Zůstaňte 2-3h na místě ztráty a pravidelně kontrolujte místo,
                kde se vám zvíře ztratilo.
              </li>
              <li className="information__item">
                Kontaktujte Městskou policii i Policii České republiky, odchyt
                psů zajišťuje ta městská.
              </li>
              <li className="information__item">
                Informujte okolní útulky, veterinární kliniky, myslivecká
                sdružení, technické služby s fotografií nebo popisem vašeho
                ztraceného zvířete,
              </li>
              <li className="information__item">
                nebo přímo navštivte nejbližší útulek.
              </li>
              <li className="information__item">
                Pokud je vaše zvíře čipované, kontaktujte{' '}
                <a
                  className="information__link"
                  href="https://www.narodniregistr.cz/"
                  target="_blank"
                  re="noreferrer noopener"
                >
                  Národní registr majitelů čipovaných zvířat
                </a>{' '}
                a ztrátu nahlašte.
              </li>
              <li className="information__item">
                Zavolejte na městský nebo obecní úřad a zjistěte, zda v místě
                ztráty neproběhl odchyt zvířat a vaše zvíře nezmizelo tímto
                způsobem.
              </li>
              <li className="information__item">
                Na frekventovaná místa v okolí ztráty můžete vylepit plakáty s
                fotkou zvířete.
              </li>
              <li className="information__item">
                Pomoci vám může také vypsání odměny.
              </li>
            </ul>
          </article>
          <article
            className={
              visible[1]
                ? 'information__section'
                : 'information__section information__section--hidden'
            }
          >
            <ul className="information__list">
              <li className="information__item">
                Pokud zvíře není agresivní a nebojí se vás, podívejte se, jestli
                má obojek se známkou nebo se pokuste najít jinou formu jeho
                identifikace.
              </li>
              <li className="information__item">
                Zvíře může být očipované, vezměte jej k nejbližšímu veternáři{' '}
              </li>
              <li className="information__item">
                nebo jej dovezte do nejbližšího útulku.
              </li>
              <li className="information__item">
                Pokud zvíře nespolupracuje a vy vidíte, že je opravdu zatoulané,
                zavolejte pomocnou odchytovou službu.
              </li>
              <li className="information__item">
                Dejte o nálezu zvířete vědět svému okolí - jak na místě, tak
                prostřednictvím internetu.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};
