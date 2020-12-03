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
            <ul>
              <li>
                Zůstaňte 2-3h na místě ztráty a pravidelně kontrolujte místo,
                kde se vám zvíře ztratilo.
              </li>
              <li>
                Kontaktujte Městskou policii i Policii České republiky, odchyt
                psů zajišťuje ta městská.
              </li>
              <li>
                Informujte okolní útulky, veterinární kliniky, myslivecká
                sdružení, technické služby s fotografií nebo popisem vašeho
                ztraceného zvířete,
              </li>
              <li>nebo přímo navštivte nejbližší útulek.</li>
              <li>
                Pokud je vaše zvíře čipované, kontaktujte{' '}
                <a href="https://www.narodniregistr.cz/" target="blank">
                  Národní registr majitelů čipovaných zvířat
                </a>{' '}
                a ztrátu nahlašte.
              </li>
              <li>
                Zavolejte na městský nebo obecní úřad a zjistěte, zda v místě
                ztráty neproběhl odchyt zvířat a vaše zvíře nezmizelo tímto
                způsobem.
              </li>
              <li>
                Na frekventovaná místa v okolí ztráty můžete vylepit plakáty s
                fotkou zvířete.
              </li>
              <li>Pomoci vám může také vypsání odměny.</li>
            </ul>
          </article>
          <article
            className={
              visible[1]
                ? 'information__section'
                : 'information__section information__section--hidden'
            }
          >
            <ul>
              <li>
                <li>
                  Pokud zvíře není agresivní a nebojí se vás, podívejte se,
                  jestli má obojek se známkou nebo se pokuste najít jinou formu jeho identifikace.
                </li>
                <li>
                  Zvíře může být očipované, vezměte jej k nejbližšímu veternáři{' '}
                </li>
              </li>
              <li>nebo jej dovezte do nejbližšího útulku.</li>
              <li>
                <li>
                  Pokud zvíře nespolupracuje a vy vidíte, že je opravdu
                  zatoulané, zavolejte pomocnou odchytovou službu.
                </li>
                <li>
                  Dejte o nálezu zvířete vědět svému okolí - jak na místě, tak
                  prostřednictvím internetu.
                </li>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};
