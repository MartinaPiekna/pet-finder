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
            PRVNI Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Omnis maxime pariatur ipsa error dicta nulla facilis enim eaque nam
            explicabo a mollitia ea velit accusantium, delectus aliquid hic
            inventore consequuntur.
          </article>
          <article
            className={
              visible[1]
                ? 'information__section'
                : 'information__section information__section--hidden'
            }
          >
            DRUHY Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            reiciendis repellendus veritatis ad, harum sint! Molestias cumque,
            sapiente odit, velit quam ut iste harum cupiditate eligendi vero a
            deleniti atque.
          </article>
        </div>
      </section>
    </>
  );
};
