import React, { useState } from 'react';
import './information.scss';
import banknote from "../../assets/img/icons/banknote.svg"
import building from "../../assets/img/icons/building.svg"
import cat from "../../assets/img/icons/cat.svg"
import cpu from "../../assets/img/icons/cpu.svg"
import globe from "../../assets/img/icons/globe.svg"
import link from "../../assets/img/icons/link.svg"
import medical from "../../assets/img/icons/medical.svg"
import police from "../../assets/img/icons/police.svg"
import tag from "../../assets/img/icons/tag.svg"
import tree from "../../assets/img/icons/tree.svg"

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
            <div >
              <div className="information__text"><img src={tree}/>
                <p>Zůstaňte 2-3h na místě ztráty a pravidelně kontrolujte místo,
                kde se vám zvíře ztratilo.</p>
              </div>
              <div className="information__text"><img src={police}/>
                <p>Kontaktujte Městskou policii i Policii České republiky, odchyt
                psů zajišťuje ta městská.</p>
              </div>
              <div className="information__text">
                <p>Informujte okolní útulky, veterinární kliniky, myslivecká
                sdružení, technické služby s fotografií nebo popisem vašeho
                ztraceného zvířete,</p>
              </div>
              <div className="information__text"><img src={building}/>nebo přímo navštivte nejbližší útulek.</div>
              <div className="information__text"><img src={cpu}/>
                <p>Pokud je vaše zvíře čipované, kontaktujte{' '}
                <a href="https://www.narodniregistr.cz/" target="_blank"
                  re="noreferrer noopener">
                  Národní registr majitelů čipovaných zvířat
                </a>{' '}
                a ztrátu nahlašte.</p>
              </div>
              <div className="information__text"><img src={link}/>
                <p>Zavolejte na městský nebo obecní úřad a zjistěte, zda v místě
                ztráty neproběhl odchyt zvířat a vaše zvíře nezmizelo tímto
                způsobem.</p>
              </div>
              <div className="information__text"><img src={cat}/>
                <p>Na frekventovaná místa v okolí ztráty můžete vylepit plakáty s
                fotkou zvířete.</p>
              </div>
              <div className="information__text"><img src={banknote}/><p>Pomoci vám může také vypsání odměny.</p></div>
            </div>
          </article>
          <article
            className={
              visible[1]
                ? 'information__section'
                : 'information__section information__section--hidden'
            }
          >
            <div>
              <div>
                <div className="information__text"><img src={tag}/>
                  <p>Pokud zvíře není agresivní a nebojí se vás, podívejte se,
                  jestli má obojek se známkou nebo se pokuste najít jinou formu jeho identifikace.</p>
                </div>
                <div className="information__text"><img src={medical}/>
                  <p>Zvíře může být očipované, vezměte jej k nejbližšímu veternáři{' '}</p>
                </div>
              </div>
              <div className="information__text"><img src={building}/><p>nebo jej dovezte do nejbližšího útulku.</p></div>
              <div>
                <div className="information__text"><img src={link}/>
                  <p>Pokud zvíře nespolupracuje a vy vidíte, že je opravdu
                  zatoulané, zavolejte pomocnou odchytovou službu.</p>
                </div>
                <div className="information__text"><img src={globe}/>
                  <p>Dejte o nálezu zvířete vědět svému okolí - jak na místě, tak
                  prostřednictvím internetu.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
