import React, { useState } from 'react';
import './information.scss';

export const Information = () => {
  const [hidden, setHidden] = useState(false);
 

  return (
    <>
      <section className="information">
        <h1 className="information__headline">Co ještě můžete udělat?</h1>
        <div className="information__tip">
          <div className="information__button">
            <button
              className={hidden? "information__button--nonactive":"information__button--active"} 
              onClick={() => {
                setHidden(false);
                
              }}
            >
              Našlo se zvíře
            </button>
            <button
              className={hidden? "information__button--active":"information__button--nonactive"}
              onClick={() => {
                setHidden(true);
                
              }}
            >
              Hledám zvíře
            </button>
          </div>

          <article className={hidden ? 'information__sectionHidden' : 'information__sectionShown'}>
            PRVNI Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Omnis maxime pariatur ipsa error dicta nulla facilis enim eaque nam
            explicabo a mollitia ea velit accusantium, delectus aliquid hic
            inventore consequuntur.
          </article>
          <article className={hidden ? 'information__sectionShown' : 'information__sectionHidden'}>
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
