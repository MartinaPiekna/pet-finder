import React, { useState } from 'react';
import './information.scss';

export const Information = () => {
  const [visible, setVisible] = useState([true, false]);

  return (
    <>
      <section className="information">
        <h1 className="information__title">Co ještě můžete udělat?</h1>
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
              Hledá se zvíře
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
              Nalezlo se zvíře
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
                sdružení, technické služby fotografií nebo popisem vsšeho
                ztraceného zvířete,
              </li>
              <li>nebo přímo navštivte nejbližší útulek.</li>
              <li>
                Pokuj je vaše zvíře čipované, kontaktujte{' '}
                <a href="https://www.narodniregistr.cz/">
                  Národní registr majitelů čipovaných zvířat
                </a>{' '}
                a ztrátu nahlašte.
              </li>
              <li>
                Zavoejte na městský nebo obecní úřad a zjistěte,zda v místě
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
                Najdete-li zvíře, kontaktujte Městskou policii a Policii České
                republiky.
              </li>
              <li>Informujte útulky v okolí - pokud zvíře není agresivní nebo se nebojí, můžete jej do útulku rovnou dovézt.</li>
              <li>
                Dejte o nálezu vědět svému okolí - jak na místě, tak na
                prostřednictvím internetu.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};
