import React, { useState } from 'react';
import './information.scss';

export const Information = () => {
  const [visible, setVisible] = useState([true, false, false]);

  return (
    <>
      <section className="information">
        <h1 className="information__headline">Co ještě můžete udělat?</h1>
        <div className="information__tip">
          <div className="information__button">
            <button
              className={
                visible[0]
                  ? 'information__button--active'
                  : 'information__button--nonactive'
              }
              onClick={() => {
                setVisible([true, false, false]);
              }}
            >
              Našlo se zvíře
            </button>
            <button
              className={
                visible[1]
                  ? 'information__button--active'
                  : 'information__button--nonactive'
              }
              onClick={() => {
                setVisible([false, true, false]);
              }}
            >
              Hledám zvíře
            </button>
            <button
              className={
                visible[2]
                  ? 'information__button--active'
                  : 'information__button--nonactive'
              }
              onClick={() => {
                setVisible([false, false, true]);
              }}
            >
              Útulky v ČR
            </button>
          </div>

          <article className={visible[0] ? 'information__sectionShown' : 'information__sectionHidden'}>
            PRVNI Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Omnis maxime pariatur ipsa error dicta nulla facilis enim eaque nam
            explicabo a mollitia ea velit accusantium, delectus aliquid hic
            inventore consequuntur.
          </article>
          <article
            className={
              visible[1]
                ? 'information__sectionShown'
                : 'information__sectionHidden'
            }
          >
            DRUHY Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            reiciendis repellendus veritatis ad, harum sint! Molestias cumque,
            sapiente odit, velit quam ut iste harum cupiditate eligendi vero a
            deleniti atque.
          </article>
          <article
            className={
              visible[2]
                ? 'information__sectionShown'
                : 'information__sectionHidden'
            }
          >
            TRETI Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            reiciendis repellendus veritatis ad, harum sint! Molestias cumque,
            sapiente odit, velit quam ut iste harum cupiditate eligendi vero a
            deleniti atque.
          </article>
        </div>
      </section>
    </>
  );
};
